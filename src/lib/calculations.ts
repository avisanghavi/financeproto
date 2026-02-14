import { prisma } from "./prisma";
import {
  addMonths,
  differenceInDays,
  isBefore,
  isAfter,
  isSameDay,
  startOfDay,
} from "date-fns";
import type {
  ShareCertificate,
  ShareClass,
  OptionGrant,
  VestingSchedule,
  Convertible,
  EquityPlan,
  Stakeholder,
} from "../../prisma/generated/prisma";

// ============================================
// TYPES
// ============================================

export interface FullyDilutedBreakdown {
  outstandingCommon: number;
  outstandingPreferredAsConverted: number;
  allOutstandingOptions: number;
  availableOptionPool: number;
  convertibleShares: number;
  total: number;
}

export interface StakeholderOwnership {
  stakeholderId: string;
  stakeholderName: string;
  stakeholderType: string;
  outstandingShares: number;
  fullyDilutedShares: number;
  outstandingPercent: number;
  fullyDilutedPercent: number;
  totalInvested: number;
}

export interface ShareClassOwnership {
  shareClassId: string;
  shareClassName: string;
  shareClassType: string;
  outstandingShares: number;
  fullyDilutedShares: number;
  outstandingPercent: number;
  fullyDilutedPercent: number;
}

export interface VestingPeriodData {
  periodNumber: number;
  vestingDate: Date;
  sharesVested: number;
  cumulativeVested: number;
}

// ============================================
// FULLY DILUTED CALCULATIONS
// ============================================

export async function getFullyDilutedBreakdown(
  companyId: string
): Promise<FullyDilutedBreakdown> {
  // 1. Outstanding common shares
  const commonCerts = await prisma.shareCertificate.findMany({
    where: {
      companyId,
      status: "OUTSTANDING",
      shareClass: { type: "COMMON" },
    },
    include: { shareClass: true },
  });
  const outstandingCommon = commonCerts.reduce((sum, c) => sum + c.quantity, 0);

  // 2. Outstanding preferred shares as-converted
  const preferredCerts = await prisma.shareCertificate.findMany({
    where: {
      companyId,
      status: "OUTSTANDING",
      shareClass: { type: "PREFERRED" },
    },
    include: { shareClass: true },
  });
  const outstandingPreferredAsConverted = preferredCerts.reduce((sum, c) => {
    const conversionRatio = Number(c.shareClass.conversionRatio);
    return sum + Math.floor(c.quantity * conversionRatio);
  }, 0);

  // 3. All outstanding options (vested + unvested from active grants)
  const activeGrants = await prisma.optionGrant.findMany({
    where: {
      companyId,
      status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] },
    },
    include: { exercises: true },
  });
  const allOutstandingOptions = activeGrants.reduce((sum, g) => {
    const exercised = g.exercises.reduce((e, ex) => e + ex.sharesExercised, 0);
    return sum + (g.originalQuantity - exercised - g.expiredQuantity);
  }, 0);

  // 4. Available option pool
  const equityPlans = await prisma.equityPlan.findMany({
    where: { companyId },
  });
  const availableOptionPool = equityPlans.reduce(
    (sum, p) => sum + p.availableShares,
    0
  );

  // 5. Shares issuable on SAFE/CN conversion
  const convertibles = await prisma.convertible.findMany({
    where: { companyId, status: "OUTSTANDING" },
  });
  
  // For conversion shares, we need company's last priced round or cap
  const latestPreferredClass = await prisma.shareClass.findFirst({
    where: { companyId, type: "PREFERRED" },
    orderBy: { createdAt: "desc" },
  });
  
  let convertibleShares = 0;
  for (const conv of convertibles) {
    const principal = Number(conv.principal);
    const accrued = conv.type === "CONVERTIBLE_NOTE" 
      ? calculateAccruedInterest(conv)
      : 0;
    const totalAmount = principal + accrued;
    
    // Use valuation cap to determine shares, or latest preferred price
    if (conv.valuationCap) {
      const cap = Number(conv.valuationCap);
      // Estimate shares based on cap and a standard fully diluted assumption
      // This is a simplified calculation - real conversion happens at a priced round
      const impliedPrice = cap / 10000000; // Simplified: assume 10M fully diluted
      convertibleShares += Math.floor(totalAmount / impliedPrice);
    } else if (latestPreferredClass) {
      // Use latest preferred price with discount
      const discount = conv.discount ? Number(conv.discount) : 0;
      const price = Number(latestPreferredClass.pricePerShare) * (1 - discount);
      if (price > 0) {
        convertibleShares += Math.floor(totalAmount / price);
      }
    }
  }

  const total =
    outstandingCommon +
    outstandingPreferredAsConverted +
    allOutstandingOptions +
    availableOptionPool +
    convertibleShares;

  return {
    outstandingCommon,
    outstandingPreferredAsConverted,
    allOutstandingOptions,
    availableOptionPool,
    convertibleShares,
    total,
  };
}

export async function getFullyDilutedShares(companyId: string): Promise<number> {
  const breakdown = await getFullyDilutedBreakdown(companyId);
  return breakdown.total;
}

export async function getTotalOutstandingShares(companyId: string): Promise<number> {
  const certs = await prisma.shareCertificate.findMany({
    where: { companyId, status: "OUTSTANDING" },
  });
  return certs.reduce((sum, c) => sum + c.quantity, 0);
}

// ============================================
// OWNERSHIP CALCULATIONS
// ============================================

export async function getOwnershipByStakeholder(
  companyId: string
): Promise<StakeholderOwnership[]> {
  const stakeholders = await prisma.stakeholder.findMany({
    where: { companyId },
    include: {
      shareCertificates: {
        where: { status: "OUTSTANDING" },
        include: { shareClass: true },
      },
      optionGrants: {
        where: { status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] } },
        include: { exercises: true, vestingSchedule: true },
      },
      convertibles: {
        where: { status: "OUTSTANDING" },
      },
    },
  });

  const fullyDiluted = await getFullyDilutedBreakdown(companyId);
  const totalOutstanding = await getTotalOutstandingShares(companyId);

  return stakeholders.map((s) => {
    // Outstanding shares from certificates
    const outstandingShares = s.shareCertificates.reduce((sum, c) => {
      const conversionRatio =
        c.shareClass.type === "PREFERRED"
          ? Number(c.shareClass.conversionRatio)
          : 1;
      return sum + Math.floor(c.quantity * conversionRatio);
    }, 0);

    // Options (remaining unexercised)
    const optionShares = s.optionGrants.reduce((sum, g) => {
      const exercised = g.exercises.reduce((e, ex) => e + ex.sharesExercised, 0);
      return sum + (g.originalQuantity - exercised - g.expiredQuantity);
    }, 0);

    // Convertible shares estimate
    let convertibleShares = 0;
    for (const conv of s.convertibles) {
      const principal = Number(conv.principal);
      const accrued =
        conv.type === "CONVERTIBLE_NOTE" ? calculateAccruedInterest(conv) : 0;
      const totalAmount = principal + accrued;
      if (conv.valuationCap) {
        const cap = Number(conv.valuationCap);
        const impliedPrice = cap / fullyDiluted.total || 1;
        convertibleShares += Math.floor(totalAmount / impliedPrice);
      }
    }

    const fullyDilutedShares = outstandingShares + optionShares + convertibleShares;

    // Total invested
    const totalInvested =
      s.shareCertificates.reduce((sum, c) => sum + Number(c.cashPaid), 0) +
      s.convertibles.reduce((sum, c) => sum + Number(c.principal), 0);

    return {
      stakeholderId: s.id,
      stakeholderName: s.name,
      stakeholderType: s.type,
      outstandingShares,
      fullyDilutedShares,
      outstandingPercent:
        totalOutstanding > 0 ? outstandingShares / totalOutstanding : 0,
      fullyDilutedPercent:
        fullyDiluted.total > 0 ? fullyDilutedShares / fullyDiluted.total : 0,
      totalInvested,
    };
  });
}

export async function getOwnershipByShareClass(
  companyId: string
): Promise<ShareClassOwnership[]> {
  const shareClasses = await prisma.shareClass.findMany({
    where: { companyId },
    include: {
      shareCertificates: {
        where: { status: "OUTSTANDING" },
      },
    },
  });

  const fullyDiluted = await getFullyDilutedBreakdown(companyId);
  const totalOutstanding = await getTotalOutstandingShares(companyId);

  return shareClasses.map((sc) => {
    const outstandingShares = sc.shareCertificates.reduce(
      (sum, c) => sum + c.quantity,
      0
    );

    // For fully diluted, convert preferred to common equivalent
    const conversionRatio =
      sc.type === "PREFERRED" ? Number(sc.conversionRatio) : 1;
    const fullyDilutedShares = Math.floor(outstandingShares * conversionRatio);

    return {
      shareClassId: sc.id,
      shareClassName: sc.name,
      shareClassType: sc.type,
      outstandingShares,
      fullyDilutedShares,
      outstandingPercent:
        totalOutstanding > 0 ? outstandingShares / totalOutstanding : 0,
      fullyDilutedPercent:
        fullyDiluted.total > 0 ? fullyDilutedShares / fullyDiluted.total : 0,
    };
  });
}

// ============================================
// VESTING CALCULATIONS
// ============================================

export function generateVestingPeriods(
  originalQuantity: number,
  schedule: {
    vestingStartDate: Date;
    cliffMonths: number;
    cliffPercentage: number | { toNumber(): number };
    totalPeriods: number;
    periodUnit: "MONTHLY" | "QUARTERLY" | "ANNUALLY";
  },
  terminationDate?: Date | null
): VestingPeriodData[] {
  const periods: VestingPeriodData[] = [];
  const vestingStart = startOfDay(new Date(schedule.vestingStartDate));
  const cliffPercent = Number(schedule.cliffPercentage);

  // Calculate cliff date and shares
  const cliffDate = addMonths(vestingStart, schedule.cliffMonths);
  const cliffShares = Math.floor(originalQuantity * cliffPercent);
  const remainingShares = originalQuantity - cliffShares;
  const remainingPeriods = schedule.totalPeriods - schedule.cliffMonths;
  const sharesPerPeriod =
    remainingPeriods > 0 ? Math.floor(remainingShares / remainingPeriods) : 0;

  // Handle termination before cliff
  if (terminationDate && isBefore(startOfDay(terminationDate), cliffDate)) {
    // If terminated on cliff date, cliff still vests
    if (!isSameDay(startOfDay(terminationDate), cliffDate)) {
      return []; // Terminated before cliff - no vesting
    }
  }

  // Cliff period (period 0)
  periods.push({
    periodNumber: 0,
    vestingDate: cliffDate,
    sharesVested: cliffShares,
    cumulativeVested: cliffShares,
  });

  // Monthly/quarterly/annual periods after cliff
  let cumulative = cliffShares;
  const periodMonths =
    schedule.periodUnit === "MONTHLY"
      ? 1
      : schedule.periodUnit === "QUARTERLY"
      ? 3
      : 12;

  for (let i = 1; i <= remainingPeriods; i++) {
    const periodDate = addMonths(cliffDate, i * periodMonths);

    // Check if terminated before this period
    if (terminationDate && isAfter(periodDate, startOfDay(terminationDate))) {
      break;
    }

    // Last period gets remainder to handle fractional rounding
    const isLastPeriod = i === remainingPeriods;
    const vested = isLastPeriod
      ? remainingShares - sharesPerPeriod * (remainingPeriods - 1)
      : sharesPerPeriod;

    cumulative += vested;

    periods.push({
      periodNumber: i,
      vestingDate: periodDate,
      sharesVested: vested,
      cumulativeVested: cumulative,
    });
  }

  return periods;
}

export async function getVestedQuantity(
  grantId: string,
  asOfDate: Date = new Date()
): Promise<number> {
  const grant = await prisma.optionGrant.findUnique({
    where: { id: grantId },
    include: { vestingSchedule: true },
  });

  if (!grant || !grant.vestingSchedule) return 0;

  const periods = generateVestingPeriods(
    grant.originalQuantity,
    {
      vestingStartDate: grant.vestingSchedule.vestingStartDate,
      cliffMonths: grant.vestingSchedule.cliffMonths,
      cliffPercentage: grant.vestingSchedule.cliffPercentage,
      totalPeriods: grant.vestingSchedule.totalPeriods,
      periodUnit: grant.vestingSchedule.periodUnit,
    },
    grant.terminationDate
  );

  // Find the last period that has vested as of the given date
  const asOf = startOfDay(asOfDate);
  let vested = 0;
  for (const period of periods) {
    if (!isAfter(startOfDay(period.vestingDate), asOf)) {
      vested = period.cumulativeVested;
    }
  }

  return vested;
}

export async function getExercisedQuantity(grantId: string): Promise<number> {
  const exercises = await prisma.optionExercise.findMany({
    where: { optionGrantId: grantId, status: { in: ["APPROVED", "COMPLETED"] } },
  });
  return exercises.reduce((sum, ex) => sum + ex.sharesExercised, 0);
}

export async function getExercisableQuantity(
  grantId: string,
  asOfDate: Date = new Date()
): Promise<number> {
  const vested = await getVestedQuantity(grantId, asOfDate);
  const exercised = await getExercisedQuantity(grantId);
  return Math.max(0, vested - exercised);
}

export function getVestingDescription(schedule: {
  cliffMonths: number;
  cliffPercentage: number | { toNumber(): number };
  totalPeriods: number;
  periodUnit: "MONTHLY" | "QUARTERLY" | "ANNUALLY";
}): string {
  const cliffPercent = Math.round(Number(schedule.cliffPercentage) * 100);
  const cliffYears = schedule.cliffMonths / 12;
  const totalYears = schedule.totalPeriods / 12;
  const periodName = schedule.periodUnit.toLowerCase();

  if (schedule.periodUnit === "MONTHLY") {
    return `1/${schedule.totalPeriods} ${periodName} vesting with a ${cliffYears} year cliff (${cliffPercent}%)`;
  }
  return `${totalYears}-year ${periodName} vesting with a ${cliffYears}-year cliff`;
}

// ============================================
// INTEREST CALCULATIONS (Convertible Notes)
// ============================================

export function calculateAccruedInterest(
  convertible: Pick<
    Convertible,
    "type" | "principal" | "interestRate" | "interestStartDate"
  >,
  asOfDate: Date = new Date()
): number {
  if (convertible.type !== "CONVERTIBLE_NOTE") return 0;
  if (!convertible.interestRate || !convertible.interestStartDate) return 0;

  const principal = Number(convertible.principal);
  const rate = Number(convertible.interestRate);
  const startDate = new Date(convertible.interestStartDate);
  const daysElapsed = differenceInDays(asOfDate, startDate);

  if (daysElapsed <= 0) return 0;

  // Simple interest: principal * rate * (days / 365)
  return principal * rate * (daysElapsed / 365);
}

export function getTotalConvertibleAmount(
  convertible: Pick<
    Convertible,
    "type" | "principal" | "interestRate" | "interestStartDate"
  >,
  asOfDate: Date = new Date()
): number {
  const principal = Number(convertible.principal);
  const accrued = calculateAccruedInterest(convertible, asOfDate);
  return principal + accrued;
}

// ============================================
// AGGREGATE METRICS
// ============================================

export async function getCapTableMetrics(companyId: string) {
  const [fullyDiluted, equityPlans, certificates, convertibles] =
    await Promise.all([
      getFullyDilutedBreakdown(companyId),
      prisma.equityPlan.findMany({ where: { companyId } }),
      prisma.shareCertificate.findMany({
        where: { companyId, status: "OUTSTANDING" },
      }),
      prisma.convertible.findMany({
        where: { companyId, status: "OUTSTANDING" },
      }),
    ]);

  const availableShares = equityPlans.reduce(
    (sum, p) => sum + p.availableShares,
    0
  );

  const amountRaised =
    certificates.reduce((sum, c) => sum + Number(c.cashPaid), 0) +
    convertibles.reduce((sum, c) => sum + Number(c.principal), 0);

  return {
    fullyDilutedShares: fullyDiluted.total,
    fullyDilutedBreakdown: fullyDiluted,
    availableShares,
    amountRaised,
  };
}
