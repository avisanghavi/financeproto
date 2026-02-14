import { prisma } from "./prisma";
import { generateVestingPeriods, type VestingPeriodData } from "./calculations";
import type { OptionGrant, VestingSchedule, VestingPeriod } from "../../prisma/generated/prisma";

/**
 * Creates VestingPeriod records in the database for an option grant.
 * Should be called when creating or updating a grant's vesting schedule.
 */
export async function createVestingPeriodRecords(
  vestingScheduleId: string,
  originalQuantity: number,
  schedule: {
    vestingStartDate: Date;
    cliffMonths: number;
    cliffPercentage: number;
    totalPeriods: number;
    periodUnit: "MONTHLY" | "QUARTERLY" | "ANNUALLY";
  },
  terminationDate?: Date | null
): Promise<VestingPeriod[]> {
  // Delete existing periods
  await prisma.vestingPeriod.deleteMany({
    where: { vestingScheduleId },
  });

  // Generate new periods
  const periods = generateVestingPeriods(
    originalQuantity,
    schedule,
    terminationDate
  );

  // Create records
  const created = await prisma.vestingPeriod.createManyAndReturn({
    data: periods.map((p) => ({
      vestingScheduleId,
      periodNumber: p.periodNumber,
      vestingDate: p.vestingDate,
      sharesVested: p.sharesVested,
      cumulativeVested: p.cumulativeVested,
    })),
  });

  return created;
}

/**
 * Updates vesting periods when a grant is terminated.
 * Removes all periods after the termination date.
 */
export async function updateVestingForTermination(
  optionGrantId: string,
  terminationDate: Date
): Promise<void> {
  const grant = await prisma.optionGrant.findUnique({
    where: { id: optionGrantId },
    include: { vestingSchedule: true },
  });

  if (!grant || !grant.vestingSchedule) return;

  // Regenerate periods with termination date
  await createVestingPeriodRecords(
    grant.vestingSchedule.id,
    grant.originalQuantity,
    {
      vestingStartDate: grant.vestingSchedule.vestingStartDate,
      cliffMonths: grant.vestingSchedule.cliffMonths,
      cliffPercentage: Number(grant.vestingSchedule.cliffPercentage),
      totalPeriods: grant.vestingSchedule.totalPeriods,
      periodUnit: grant.vestingSchedule.periodUnit,
    },
    terminationDate
  );
}

/**
 * Gets the vesting progress for an option grant.
 */
export async function getVestingProgress(
  grantId: string,
  asOfDate: Date = new Date()
): Promise<{
  totalShares: number;
  vestedShares: number;
  unvestedShares: number;
  exercisedShares: number;
  exercisableShares: number;
  vestedPercent: number;
  exercisedPercent: number;
}> {
  const grant = await prisma.optionGrant.findUnique({
    where: { id: grantId },
    include: {
      vestingSchedule: {
        include: { vestingPeriods: { orderBy: { periodNumber: "asc" } } },
      },
      exercises: {
        where: { status: { in: ["APPROVED", "COMPLETED"] } },
      },
    },
  });

  if (!grant) {
    return {
      totalShares: 0,
      vestedShares: 0,
      unvestedShares: 0,
      exercisedShares: 0,
      exercisableShares: 0,
      vestedPercent: 0,
      exercisedPercent: 0,
    };
  }

  const totalShares = grant.originalQuantity - grant.expiredQuantity;
  const exercisedShares = grant.exercises.reduce(
    (sum, ex) => sum + ex.sharesExercised,
    0
  );

  // Calculate vested shares from periods
  let vestedShares = 0;
  if (grant.vestingSchedule) {
    for (const period of grant.vestingSchedule.vestingPeriods) {
      if (new Date(period.vestingDate) <= asOfDate) {
        vestedShares = period.cumulativeVested;
      }
    }
  }

  const unvestedShares = totalShares - vestedShares;
  const exercisableShares = Math.max(0, vestedShares - exercisedShares);

  return {
    totalShares,
    vestedShares,
    unvestedShares,
    exercisedShares,
    exercisableShares,
    vestedPercent: totalShares > 0 ? vestedShares / totalShares : 0,
    exercisedPercent: totalShares > 0 ? exercisedShares / totalShares : 0,
  };
}

/**
 * Gets all vesting periods with their current status.
 */
export async function getVestingPeriodsWithStatus(
  grantId: string,
  asOfDate: Date = new Date()
): Promise<
  Array<{
    periodNumber: number;
    vestingDate: Date;
    sharesVested: number;
    cumulativeVested: number;
    isVested: boolean;
    isPast: boolean;
  }>
> {
  const grant = await prisma.optionGrant.findUnique({
    where: { id: grantId },
    include: {
      vestingSchedule: {
        include: { vestingPeriods: { orderBy: { periodNumber: "asc" } } },
      },
    },
  });

  if (!grant?.vestingSchedule) return [];

  return grant.vestingSchedule.vestingPeriods.map((period) => {
    const vestingDate = new Date(period.vestingDate);
    const isVested = vestingDate <= asOfDate;
    const isPast = vestingDate < asOfDate;

    return {
      periodNumber: period.periodNumber,
      vestingDate,
      sharesVested: period.sharesVested,
      cumulativeVested: period.cumulativeVested,
      isVested,
      isPast,
    };
  });
}
