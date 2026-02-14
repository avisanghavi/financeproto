"use server";

import { prisma } from "@/lib/prisma";
import { generateSecurityId } from "@/lib/security-id";
import { createVestingPeriodRecords } from "@/lib/vesting";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const optionGrantSchema = z.object({
  stakeholderId: z.string().min(1, "Stakeholder is required"),
  equityPlanId: z.string().min(1, "Equity plan is required"),
  originalQuantity: z.coerce.number().int().positive("Quantity must be positive"),
  exercisePrice: z.coerce.number().positive("Exercise price must be positive"),
  type: z.enum(["ISO", "NSO"]),
  grantDate: z.string().min(1, "Grant date is required"),
  boardApprovalDate: z.string().optional(),
  expirationDate: z.string().min(1, "Expiration date is required"),
  grantReason: z.string().optional(),
  status: z.enum(["ACTIVE", "PARTIALLY_EXERCISED", "FULLY_EXERCISED", "EXPIRED", "CANCELLED", "TERMINATED"]).default("ACTIVE"),
  // Vesting schedule
  vestingStartDate: z.string().min(1, "Vesting start date is required"),
  cliffMonths: z.coerce.number().int().min(0).default(12),
  cliffPercentage: z.coerce.number().min(0).max(1).default(0.25),
  totalPeriods: z.coerce.number().int().positive().default(48),
  periodUnit: z.enum(["MONTHLY", "QUARTERLY", "ANNUALLY"]).default("MONTHLY"),
  scheduleName: z.string().optional(),
});

export type OptionGrantFormState = {
  errors?: {
    stakeholderId?: string[];
    equityPlanId?: string[];
    originalQuantity?: string[];
    exercisePrice?: string[];
    type?: string[];
    grantDate?: string[];
    expirationDate?: string[];
    vestingStartDate?: string[];
    cliffMonths?: string[];
    totalPeriods?: string[];
    _form?: string[];
  };
  message?: string;
};

export async function createOptionGrant(
  prevState: OptionGrantFormState,
  formData: FormData
): Promise<OptionGrantFormState> {
  const company = await prisma.company.findFirst();
  if (!company) {
    return { errors: { _form: ["No company found"] } };
  }

  const validatedFields = optionGrantSchema.safeParse({
    stakeholderId: formData.get("stakeholderId"),
    equityPlanId: formData.get("equityPlanId"),
    originalQuantity: formData.get("originalQuantity"),
    exercisePrice: formData.get("exercisePrice"),
    type: formData.get("type"),
    grantDate: formData.get("grantDate"),
    boardApprovalDate: formData.get("boardApprovalDate"),
    expirationDate: formData.get("expirationDate"),
    grantReason: formData.get("grantReason"),
    status: formData.get("status") || "ACTIVE",
    vestingStartDate: formData.get("vestingStartDate"),
    cliffMonths: formData.get("cliffMonths"),
    cliffPercentage: parseFloat(formData.get("cliffPercentage") as string) || 0.25,
    totalPeriods: formData.get("totalPeriods"),
    periodUnit: formData.get("periodUnit"),
    scheduleName: formData.get("scheduleName"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  // Check equity plan has enough shares
  const equityPlan = await prisma.equityPlan.findUnique({
    where: { id: data.equityPlanId },
  });

  if (!equityPlan) {
    return { errors: { _form: ["Equity plan not found"] } };
  }

  if (equityPlan.availableShares < data.originalQuantity) {
    return {
      errors: {
        originalQuantity: [
          `Not enough shares in pool. Available: ${equityPlan.availableShares.toLocaleString()}`,
        ],
      },
    };
  }

  try {
    // Generate security ID
    const securityId = await generateSecurityId("ES", company.id);

    // Create grant with vesting schedule in a transaction
    const grant = await prisma.$transaction(async (tx) => {
      // Create the grant
      const newGrant = await tx.optionGrant.create({
        data: {
          companyId: company.id,
          securityId,
          stakeholderId: data.stakeholderId,
          equityPlanId: data.equityPlanId,
          originalQuantity: data.originalQuantity,
          exercisePrice: data.exercisePrice,
          type: data.type,
          grantDate: new Date(data.grantDate),
          boardApprovalDate: data.boardApprovalDate
            ? new Date(data.boardApprovalDate)
            : null,
          expirationDate: new Date(data.expirationDate),
          grantReason: data.grantReason || null,
          status: data.status,
        },
      });

      // Create vesting schedule
      const vestingSchedule = await tx.vestingSchedule.create({
        data: {
          optionGrantId: newGrant.id,
          scheduleName: data.scheduleName || null,
          vestingStartDate: new Date(data.vestingStartDate),
          cliffMonths: data.cliffMonths,
          cliffPercentage: data.cliffPercentage,
          totalPeriods: data.totalPeriods,
          periodUnit: data.periodUnit,
        },
      });

      // Decrement available shares in equity plan
      await tx.equityPlan.update({
        where: { id: data.equityPlanId },
        data: { availableShares: { decrement: data.originalQuantity } },
      });

      // Create default post-termination exercise periods
      await tx.postTerminationExercisePeriod.createMany({
        data: [
          { optionGrantId: newGrant.id, terminationType: "VOLUNTARY", duration: 90, durationUnit: "DAYS" },
          { optionGrantId: newGrant.id, terminationType: "INVOLUNTARY", duration: 90, durationUnit: "DAYS" },
          { optionGrantId: newGrant.id, terminationType: "FOR_CAUSE", duration: 0, durationUnit: "DAYS" },
          { optionGrantId: newGrant.id, terminationType: "DEATH", duration: 12, durationUnit: "MONTHS" },
          { optionGrantId: newGrant.id, terminationType: "DISABILITY", duration: 12, durationUnit: "MONTHS" },
          { optionGrantId: newGrant.id, terminationType: "RETIREMENT", duration: 3, durationUnit: "MONTHS" },
        ],
      });

      return { grant: newGrant, vestingSchedule };
    });

    // Create vesting periods outside transaction (uses Prisma client)
    await createVestingPeriodRecords(
      grant.vestingSchedule.id,
      data.originalQuantity,
      {
        vestingStartDate: new Date(data.vestingStartDate),
        cliffMonths: data.cliffMonths,
        cliffPercentage: data.cliffPercentage,
        totalPeriods: data.totalPeriods,
        periodUnit: data.periodUnit,
      }
    );

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: company.id,
        action: "CREATE",
        entityType: "OptionGrant",
        entityId: grant.grant.id,
        after: grant.grant as any,
      },
    });

    revalidatePath("/options");
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating option grant:", error);
    return { errors: { _form: ["Failed to create option grant"] } };
  }

  redirect("/options");
}

export async function exerciseOptions(
  grantId: string,
  formData: FormData
): Promise<{ error?: string }> {
  const grant = await prisma.optionGrant.findUnique({
    where: { id: grantId },
    include: {
      vestingSchedule: {
        include: { vestingPeriods: true },
      },
      exercises: {
        where: { status: { in: ["APPROVED", "COMPLETED"] } },
      },
      stakeholder: true,
      equityPlan: true,
    },
  });

  if (!grant) {
    return { error: "Grant not found" };
  }

  const sharesToExercise = parseInt(formData.get("sharesToExercise") as string, 10);
  const paymentMethod = formData.get("paymentMethod") as string;
  const fmvAtExercise = parseFloat(formData.get("fmvAtExercise") as string);

  if (!sharesToExercise || sharesToExercise <= 0) {
    return { error: "Invalid number of shares" };
  }

  // Calculate vested and exercisable
  const now = new Date();
  let vestedShares = 0;
  if (grant.vestingSchedule) {
    for (const period of grant.vestingSchedule.vestingPeriods) {
      if (new Date(period.vestingDate) <= now) {
        vestedShares = period.cumulativeVested;
      }
    }
  }

  const exercised = grant.exercises.reduce((sum, ex) => sum + ex.sharesExercised, 0);
  const exercisable = vestedShares - exercised;

  if (sharesToExercise > exercisable) {
    return { error: `Cannot exercise more than ${exercisable.toLocaleString()} shares` };
  }

  try {
    // Get common share class for the certificate
    const commonClass = await prisma.shareClass.findFirst({
      where: { companyId: grant.companyId, type: "COMMON" },
    });

    if (!commonClass) {
      return { error: "No common share class found" };
    }

    // Generate certificate security ID
    const certSecurityId = await generateSecurityId("CS", grant.companyId);

    const totalCost = sharesToExercise * Number(grant.exercisePrice);

    // Create certificate and exercise in transaction
    await prisma.$transaction(async (tx) => {
      // Create the share certificate
      const certificate = await tx.shareCertificate.create({
        data: {
          companyId: grant.companyId,
          securityId: certSecurityId,
          stakeholderId: grant.stakeholderId,
          shareClassId: commonClass.id,
          quantity: sharesToExercise,
          pricePerShare: grant.exercisePrice,
          cashPaid: totalCost,
          costBasis: totalCost,
          acquisitionDate: now,
          issueDate: now,
          status: "OUTSTANDING",
        },
      });

      // Create the exercise record
      await tx.optionExercise.create({
        data: {
          optionGrantId: grantId,
          shareCertificateId: certificate.id,
          sharesExercised: sharesToExercise,
          exercisePrice: grant.exercisePrice,
          totalCost,
          exerciseDate: now,
          fmvAtExercise,
          paymentMethod: paymentMethod as any,
          status: "COMPLETED",
          approvedAt: now,
        },
      });

      // Update grant status if fully exercised
      const newTotalExercised = exercised + sharesToExercise;
      const newStatus =
        newTotalExercised >= grant.originalQuantity - grant.expiredQuantity
          ? "FULLY_EXERCISED"
          : "PARTIALLY_EXERCISED";

      await tx.optionGrant.update({
        where: { id: grantId },
        data: { status: newStatus },
      });
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: grant.companyId,
        action: "EXERCISE",
        entityType: "OptionGrant",
        entityId: grantId,
        after: { sharesToExercise, paymentMethod, fmvAtExercise },
      },
    });

    revalidatePath("/options");
    revalidatePath(`/options/${grantId}`);
    revalidatePath("/certificates");
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error exercising options:", error);
    return { error: "Failed to exercise options" };
  }

  redirect(`/options/${grantId}`);
}
