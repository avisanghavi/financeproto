"use server";

import { prisma } from "@/lib/prisma";
import { generateSecurityId } from "@/lib/security-id";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const certificateSchema = z.object({
  stakeholderId: z.string().min(1, "Stakeholder is required"),
  shareClassId: z.string().min(1, "Share class is required"),
  quantity: z.coerce.number().int().positive("Quantity must be positive"),
  pricePerShare: z.coerce.number().positive("Price must be positive"),
  cashPaid: z.coerce.number().min(0, "Cash paid cannot be negative"),
  costBasis: z.coerce.number().min(0).optional(),
  acquisitionDate: z.string().min(1, "Acquisition date is required"),
  issueDate: z.string().optional(),
  originalIssueDate: z.string().optional(),
  status: z.enum(["OUTSTANDING", "CANCELLED", "TRANSFERRED", "REPURCHASED"]).default("OUTSTANDING"),
});

export type CertificateFormState = {
  errors?: {
    stakeholderId?: string[];
    shareClassId?: string[];
    quantity?: string[];
    pricePerShare?: string[];
    cashPaid?: string[];
    costBasis?: string[];
    acquisitionDate?: string[];
    issueDate?: string[];
    status?: string[];
    _form?: string[];
  };
  message?: string;
};

export async function createCertificate(
  prevState: CertificateFormState,
  formData: FormData
): Promise<CertificateFormState> {
  const company = await prisma.company.findFirst();
  if (!company) {
    return { errors: { _form: ["No company found"] } };
  }

  const validatedFields = certificateSchema.safeParse({
    stakeholderId: formData.get("stakeholderId"),
    shareClassId: formData.get("shareClassId"),
    quantity: formData.get("quantity"),
    pricePerShare: formData.get("pricePerShare"),
    cashPaid: formData.get("cashPaid"),
    costBasis: formData.get("costBasis") || formData.get("cashPaid"),
    acquisitionDate: formData.get("acquisitionDate"),
    issueDate: formData.get("issueDate"),
    originalIssueDate: formData.get("originalIssueDate"),
    status: formData.get("status") || "OUTSTANDING",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    // Generate security ID
    const securityId = await generateSecurityId("CS", company.id);

    // Create certificate
    const certificate = await prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId,
        stakeholderId: data.stakeholderId,
        shareClassId: data.shareClassId,
        quantity: data.quantity,
        pricePerShare: data.pricePerShare,
        cashPaid: data.cashPaid,
        costBasis: data.costBasis ?? data.cashPaid,
        acquisitionDate: new Date(data.acquisitionDate),
        issueDate: data.issueDate ? new Date(data.issueDate) : new Date(),
        originalIssueDate: data.originalIssueDate
          ? new Date(data.originalIssueDate)
          : null,
        status: data.status,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: company.id,
        action: "CREATE",
        entityType: "ShareCertificate",
        entityId: certificate.id,
        after: certificate as any,
      },
    });

    revalidatePath("/certificates");
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating certificate:", error);
    return { errors: { _form: ["Failed to create certificate"] } };
  }

  redirect("/certificates");
}

export async function updateCertificate(
  id: string,
  prevState: CertificateFormState,
  formData: FormData
): Promise<CertificateFormState> {
  const existing = await prisma.shareCertificate.findUnique({
    where: { id },
  });

  if (!existing) {
    return { errors: { _form: ["Certificate not found"] } };
  }

  const validatedFields = certificateSchema.safeParse({
    stakeholderId: formData.get("stakeholderId"),
    shareClassId: formData.get("shareClassId"),
    quantity: formData.get("quantity"),
    pricePerShare: formData.get("pricePerShare"),
    cashPaid: formData.get("cashPaid"),
    costBasis: formData.get("costBasis") || formData.get("cashPaid"),
    acquisitionDate: formData.get("acquisitionDate"),
    issueDate: formData.get("issueDate"),
    originalIssueDate: formData.get("originalIssueDate"),
    status: formData.get("status") || "OUTSTANDING",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    const certificate = await prisma.shareCertificate.update({
      where: { id },
      data: {
        stakeholderId: data.stakeholderId,
        shareClassId: data.shareClassId,
        quantity: data.quantity,
        pricePerShare: data.pricePerShare,
        cashPaid: data.cashPaid,
        costBasis: data.costBasis ?? data.cashPaid,
        acquisitionDate: new Date(data.acquisitionDate),
        issueDate: data.issueDate ? new Date(data.issueDate) : undefined,
        originalIssueDate: data.originalIssueDate
          ? new Date(data.originalIssueDate)
          : null,
        status: data.status,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: existing.companyId,
        action: "UPDATE",
        entityType: "ShareCertificate",
        entityId: certificate.id,
        before: existing as any,
        after: certificate as any,
      },
    });

    revalidatePath("/certificates");
    revalidatePath(`/certificates/${id}`);
    revalidatePath("/cap-table");
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating certificate:", error);
    return { errors: { _form: ["Failed to update certificate"] } };
  }

  redirect(`/certificates/${id}`);
}

export async function deleteCertificate(id: string) {
  const existing = await prisma.shareCertificate.findUnique({
    where: { id },
  });

  if (!existing) {
    throw new Error("Certificate not found");
  }

  // Soft delete by changing status to CANCELLED
  await prisma.shareCertificate.update({
    where: { id },
    data: { status: "CANCELLED" },
  });

  // Create audit log
  await prisma.auditLog.create({
    data: {
      companyId: existing.companyId,
      action: "DELETE",
      entityType: "ShareCertificate",
      entityId: id,
      before: existing as any,
    },
  });

  revalidatePath("/certificates");
  revalidatePath("/cap-table");
  revalidatePath("/");
}
