"use server";

import { prisma } from "@/lib/prisma";
import { generateSecurityId } from "@/lib/security-id";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const convertibleSchema = z.object({
  stakeholderId: z.string().min(1, "Stakeholder is required"),
  type: z.enum(["SAFE", "CONVERTIBLE_NOTE"]),
  principal: z.coerce.number().positive("Principal must be positive"),
  interestRate: z.coerce.number().min(0).max(1).optional().nullable(),
  interestStartDate: z.string().optional().nullable(),
  valuationCap: z.coerce.number().positive().optional().nullable(),
  valuationCapType: z.enum(["PRE_MONEY", "POST_MONEY"]).optional().nullable(),
  discount: z.coerce.number().min(0).max(1).optional().nullable(),
  convertsToClassId: z.string().optional().nullable(),
  liquidityPriority: z.coerce.number().int().positive().optional().nullable(),
  cashoutMultiplier: z.coerce.number().positive().optional().nullable(),
  issueDate: z.string().min(1, "Issue date is required"),
  boardApprovalDate: z.string().optional().nullable(),
  conversionPriceBasis: z.array(z.string()).optional().default([]),
  status: z.enum(["OUTSTANDING", "CONVERTED", "CANCELLED", "REPAID"]).default("OUTSTANDING"),
});

export type ConvertibleFormState = {
  errors?: {
    stakeholderId?: string[];
    type?: string[];
    principal?: string[];
    interestRate?: string[];
    valuationCap?: string[];
    issueDate?: string[];
    _form?: string[];
  };
  message?: string;
};

export async function createConvertible(
  prevState: ConvertibleFormState,
  formData: FormData
): Promise<ConvertibleFormState> {
  const company = await prisma.company.findFirst();
  if (!company) {
    return { errors: { _form: ["No company found"] } };
  }

  const type = formData.get("type") as string;
  const conversionPriceBasis = formData.getAll("conversionPriceBasis") as string[];

  const validatedFields = convertibleSchema.safeParse({
    stakeholderId: formData.get("stakeholderId"),
    type,
    principal: formData.get("principal"),
    interestRate:
      type === "CONVERTIBLE_NOTE"
        ? parseFloat(formData.get("interestRate") as string) / 100 || null
        : null,
    interestStartDate:
      type === "CONVERTIBLE_NOTE" ? formData.get("interestStartDate") : null,
    valuationCap: formData.get("valuationCap") || null,
    valuationCapType: formData.get("valuationCapType") || null,
    discount: formData.get("discount")
      ? parseFloat(formData.get("discount") as string) / 100
      : null,
    convertsToClassId: formData.get("convertsToClassId") || null,
    liquidityPriority: formData.get("liquidityPriority") || null,
    cashoutMultiplier: formData.get("cashoutMultiplier") || null,
    issueDate: formData.get("issueDate"),
    boardApprovalDate: formData.get("boardApprovalDate") || null,
    conversionPriceBasis,
    status: formData.get("status") || "OUTSTANDING",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    // Generate security ID based on type
    const prefix = data.type === "SAFE" ? "SAFE" : "CN";
    const securityId = await generateSecurityId(prefix, company.id);

    // Create convertible
    const convertible = await prisma.convertible.create({
      data: {
        companyId: company.id,
        securityId,
        stakeholderId: data.stakeholderId,
        type: data.type,
        principal: data.principal,
        interestRate: data.interestRate,
        interestStartDate: data.interestStartDate
          ? new Date(data.interestStartDate)
          : null,
        valuationCap: data.valuationCap,
        valuationCapType: data.valuationCapType,
        discount: data.discount,
        convertsToClassId: data.convertsToClassId,
        liquidityPriority: data.liquidityPriority,
        cashoutMultiplier: data.cashoutMultiplier,
        issueDate: new Date(data.issueDate),
        boardApprovalDate: data.boardApprovalDate
          ? new Date(data.boardApprovalDate)
          : null,
        conversionPriceBasis: data.conversionPriceBasis,
        status: data.status,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: company.id,
        action: "CREATE",
        entityType: "Convertible",
        entityId: convertible.id,
        after: convertible as any,
      },
    });

    revalidatePath("/convertibles");
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating convertible:", error);
    return { errors: { _form: ["Failed to create convertible"] } };
  }

  redirect("/convertibles");
}

export async function updateConvertible(
  id: string,
  prevState: ConvertibleFormState,
  formData: FormData
): Promise<ConvertibleFormState> {
  const existing = await prisma.convertible.findUnique({
    where: { id },
  });

  if (!existing) {
    return { errors: { _form: ["Convertible not found"] } };
  }

  const type = formData.get("type") as string;
  const conversionPriceBasis = formData.getAll("conversionPriceBasis") as string[];

  const validatedFields = convertibleSchema.safeParse({
    stakeholderId: formData.get("stakeholderId"),
    type,
    principal: formData.get("principal"),
    interestRate:
      type === "CONVERTIBLE_NOTE"
        ? parseFloat(formData.get("interestRate") as string) / 100 || null
        : null,
    interestStartDate:
      type === "CONVERTIBLE_NOTE" ? formData.get("interestStartDate") : null,
    valuationCap: formData.get("valuationCap") || null,
    valuationCapType: formData.get("valuationCapType") || null,
    discount: formData.get("discount")
      ? parseFloat(formData.get("discount") as string) / 100
      : null,
    convertsToClassId: formData.get("convertsToClassId") || null,
    liquidityPriority: formData.get("liquidityPriority") || null,
    cashoutMultiplier: formData.get("cashoutMultiplier") || null,
    issueDate: formData.get("issueDate"),
    boardApprovalDate: formData.get("boardApprovalDate") || null,
    conversionPriceBasis,
    status: formData.get("status") || "OUTSTANDING",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    const convertible = await prisma.convertible.update({
      where: { id },
      data: {
        stakeholderId: data.stakeholderId,
        type: data.type,
        principal: data.principal,
        interestRate: data.interestRate,
        interestStartDate: data.interestStartDate
          ? new Date(data.interestStartDate)
          : null,
        valuationCap: data.valuationCap,
        valuationCapType: data.valuationCapType,
        discount: data.discount,
        convertsToClassId: data.convertsToClassId,
        liquidityPriority: data.liquidityPriority,
        cashoutMultiplier: data.cashoutMultiplier,
        issueDate: new Date(data.issueDate),
        boardApprovalDate: data.boardApprovalDate
          ? new Date(data.boardApprovalDate)
          : null,
        conversionPriceBasis: data.conversionPriceBasis,
        status: data.status,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: existing.companyId,
        action: "UPDATE",
        entityType: "Convertible",
        entityId: convertible.id,
        before: existing as any,
        after: convertible as any,
      },
    });

    revalidatePath("/convertibles");
    revalidatePath(`/convertibles/${id}`);
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating convertible:", error);
    return { errors: { _form: ["Failed to update convertible"] } };
  }

  redirect(`/convertibles/${id}`);
}
