"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// ============================================
// COMPANY ACTIONS
// ============================================

const companySchema = z.object({
  name: z.string().min(1, "Company name is required"),
  legalName: z.string().optional(),
  incorporationDate: z.string().min(1, "Incorporation date is required"),
  incorporationState: z.string().min(1, "Incorporation state is required"),
  authorizedShares: z.coerce.number().int().positive("Authorized shares must be positive"),
  parValue: z.coerce.number().positive("Par value must be positive"),
});

export type CompanyFormState = {
  errors?: {
    name?: string[];
    legalName?: string[];
    incorporationDate?: string[];
    incorporationState?: string[];
    authorizedShares?: string[];
    parValue?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function createCompany(
  prevState: CompanyFormState,
  formData: FormData
): Promise<CompanyFormState> {
  const validatedFields = companySchema.safeParse({
    name: formData.get("name"),
    legalName: formData.get("legalName") || undefined,
    incorporationDate: formData.get("incorporationDate"),
    incorporationState: formData.get("incorporationState"),
    authorizedShares: formData.get("authorizedShares"),
    parValue: formData.get("parValue"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Check if company already exists
    const existing = await prisma.company.findFirst();
    if (existing) {
      return {
        errors: {
          _form: ["A company already exists. Please edit the existing company."],
        },
      };
    }

    await prisma.company.create({
      data: {
        name: validatedFields.data.name,
        legalName: validatedFields.data.legalName || null,
        incorporationDate: new Date(validatedFields.data.incorporationDate),
        incorporationState: validatedFields.data.incorporationState,
        authorizedShares: validatedFields.data.authorizedShares,
        parValue: validatedFields.data.parValue,
      },
    });

    revalidatePath("/settings");
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating company:", error);
    return {
      errors: {
        _form: ["Failed to create company. Please try again."],
      },
    };
  }

  return { success: true };
}

export async function updateCompany(
  prevState: CompanyFormState,
  formData: FormData
): Promise<CompanyFormState> {
  const id = formData.get("id") as string;
  
  const validatedFields = companySchema.safeParse({
    name: formData.get("name"),
    legalName: formData.get("legalName") || undefined,
    incorporationDate: formData.get("incorporationDate"),
    incorporationState: formData.get("incorporationState"),
    authorizedShares: formData.get("authorizedShares"),
    parValue: formData.get("parValue"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.company.update({
      where: { id },
      data: {
        name: validatedFields.data.name,
        legalName: validatedFields.data.legalName || null,
        incorporationDate: new Date(validatedFields.data.incorporationDate),
        incorporationState: validatedFields.data.incorporationState,
        authorizedShares: validatedFields.data.authorizedShares,
        parValue: validatedFields.data.parValue,
      },
    });

    revalidatePath("/settings");
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating company:", error);
    return {
      errors: {
        _form: ["Failed to update company. Please try again."],
      },
    };
  }

  return { success: true };
}

// ============================================
// SHARE CLASS ACTIONS
// ============================================

const shareClassSchema = z.object({
  name: z.string().min(1, "Share class name is required"),
  type: z.enum(["COMMON", "PREFERRED"]),
  authorizedShares: z.coerce.number().int().positive("Authorized shares must be positive"),
  pricePerShare: z.coerce.number().positive("Price per share must be positive"),
  conversionRatio: z.coerce.number().positive().optional(),
  liquidationPreference: z.coerce.number().optional(),
  liquidationMultiple: z.coerce.number().optional(),
  participatingPreferred: z.coerce.boolean().optional(),
  seniority: z.coerce.number().int().optional(),
});

export type ShareClassFormState = {
  errors?: {
    name?: string[];
    type?: string[];
    authorizedShares?: string[];
    pricePerShare?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function createShareClass(
  prevState: ShareClassFormState,
  formData: FormData
): Promise<ShareClassFormState> {
  const companyId = formData.get("companyId") as string;
  
  const validatedFields = shareClassSchema.safeParse({
    name: formData.get("name"),
    type: formData.get("type"),
    authorizedShares: formData.get("authorizedShares"),
    pricePerShare: formData.get("pricePerShare"),
    conversionRatio: formData.get("conversionRatio") || undefined,
    liquidationPreference: formData.get("liquidationPreference") || undefined,
    liquidationMultiple: formData.get("liquidationMultiple") || undefined,
    participatingPreferred: formData.get("participatingPreferred") === "true",
    seniority: formData.get("seniority") || undefined,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.shareClass.create({
      data: {
        companyId,
        name: validatedFields.data.name,
        type: validatedFields.data.type,
        authorizedShares: validatedFields.data.authorizedShares,
        pricePerShare: validatedFields.data.pricePerShare,
        conversionRatio: validatedFields.data.conversionRatio ?? 1,
        liquidationPreference: validatedFields.data.liquidationPreference,
        liquidationMultiple: validatedFields.data.liquidationMultiple,
        participatingPreferred: validatedFields.data.participatingPreferred ?? false,
        seniority: validatedFields.data.seniority ?? 0,
      },
    });

    revalidatePath("/settings");
  } catch (error) {
    console.error("Error creating share class:", error);
    return {
      errors: {
        _form: ["Failed to create share class. Please try again."],
      },
    };
  }

  return { success: true };
}

export async function deleteShareClass(id: string): Promise<{ error?: string }> {
  try {
    // Check if there are any certificates using this share class
    const certificateCount = await prisma.shareCertificate.count({
      where: { shareClassId: id },
    });

    if (certificateCount > 0) {
      return {
        error: `Cannot delete share class. It has ${certificateCount} certificate(s) associated with it.`,
      };
    }

    await prisma.shareClass.delete({
      where: { id },
    });

    revalidatePath("/settings");
    return {};
  } catch (error) {
    console.error("Error deleting share class:", error);
    return { error: "Failed to delete share class." };
  }
}

// ============================================
// EQUITY PLAN ACTIONS
// ============================================

const equityPlanSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  totalPoolSize: z.coerce.number().int().positive("Pool size must be positive"),
  boardApprovalDate: z.string().min(1, "Board approval date is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
});

export type EquityPlanFormState = {
  errors?: {
    name?: string[];
    totalPoolSize?: string[];
    boardApprovalDate?: string[];
    expirationDate?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function createEquityPlan(
  prevState: EquityPlanFormState,
  formData: FormData
): Promise<EquityPlanFormState> {
  const companyId = formData.get("companyId") as string;
  
  const validatedFields = equityPlanSchema.safeParse({
    name: formData.get("name"),
    totalPoolSize: formData.get("totalPoolSize"),
    boardApprovalDate: formData.get("boardApprovalDate"),
    expirationDate: formData.get("expirationDate"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.equityPlan.create({
      data: {
        companyId,
        name: validatedFields.data.name,
        totalPoolSize: validatedFields.data.totalPoolSize,
        availableShares: validatedFields.data.totalPoolSize, // Initially all shares are available
        boardApprovalDate: new Date(validatedFields.data.boardApprovalDate),
        expirationDate: new Date(validatedFields.data.expirationDate),
      },
    });

    revalidatePath("/settings");
  } catch (error) {
    console.error("Error creating equity plan:", error);
    return {
      errors: {
        _form: ["Failed to create equity plan. Please try again."],
      },
    };
  }

  return { success: true };
}

export async function deleteEquityPlan(id: string): Promise<{ error?: string }> {
  try {
    // Check if there are any grants using this plan
    const grantCount = await prisma.optionGrant.count({
      where: { equityPlanId: id },
    });

    if (grantCount > 0) {
      return {
        error: `Cannot delete equity plan. It has ${grantCount} grant(s) associated with it.`,
      };
    }

    await prisma.equityPlan.delete({
      where: { id },
    });

    revalidatePath("/settings");
    return {};
  } catch (error) {
    console.error("Error deleting equity plan:", error);
    return { error: "Failed to delete equity plan." };
  }
}
