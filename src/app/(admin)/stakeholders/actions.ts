"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const stakeholderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  type: z.enum(["FOUNDER", "EMPLOYEE", "INVESTOR", "ADVISOR", "BOARD_MEMBER", "CONSULTANT"]),
  title: z.string().optional(),
});

export type StakeholderFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    type?: string[];
    title?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function createStakeholder(
  prevState: StakeholderFormState,
  formData: FormData
): Promise<StakeholderFormState> {
  const company = await prisma.company.findFirst();
  if (!company) {
    return { errors: { _form: ["No company found. Please create a company first."] } };
  }

  const validatedFields = stakeholderSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    type: formData.get("type"),
    title: formData.get("title") || undefined,
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, type, title } = validatedFields.data;

  try {
    // Check if stakeholder with this email already exists
    const existing = await prisma.stakeholder.findUnique({
      where: {
        companyId_email: {
          companyId: company.id,
          email: email.toLowerCase(),
        },
      },
    });

    if (existing) {
      return { errors: { email: ["A stakeholder with this email already exists"] } };
    }

    await prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name,
        email: email.toLowerCase(),
        type,
        title: title || null,
      },
    });
  } catch (error) {
    console.error("Error creating stakeholder:", error);
    return { errors: { _form: ["Failed to create stakeholder"] } };
  }

  revalidatePath("/stakeholders");
  redirect("/stakeholders");
}

export async function updateStakeholder(
  prevState: StakeholderFormState,
  formData: FormData
): Promise<StakeholderFormState> {
  const id = formData.get("id") as string;
  
  const validatedFields = stakeholderSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    type: formData.get("type"),
    title: formData.get("title") || undefined,
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, type, title } = validatedFields.data;

  try {
    const stakeholder = await prisma.stakeholder.findUnique({
      where: { id },
    });

    if (!stakeholder) {
      return { errors: { _form: ["Stakeholder not found"] } };
    }

    // Check if email is being changed and if new email already exists
    if (email.toLowerCase() !== stakeholder.email.toLowerCase()) {
      const existing = await prisma.stakeholder.findUnique({
        where: {
          companyId_email: {
            companyId: stakeholder.companyId,
            email: email.toLowerCase(),
          },
        },
      });

      if (existing) {
        return { errors: { email: ["A stakeholder with this email already exists"] } };
      }
    }

    await prisma.stakeholder.update({
      where: { id },
      data: {
        name,
        email: email.toLowerCase(),
        type,
        title: title || null,
      },
    });
  } catch (error) {
    console.error("Error updating stakeholder:", error);
    return { errors: { _form: ["Failed to update stakeholder"] } };
  }

  revalidatePath("/stakeholders");
  revalidatePath(`/stakeholders/${id}`);
  redirect("/stakeholders");
}

export async function deleteStakeholder(id: string): Promise<{ error?: string }> {
  try {
    // Check if stakeholder has any securities
    const stakeholder = await prisma.stakeholder.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            shareCertificates: true,
            optionGrants: true,
            convertibles: true,
          },
        },
      },
    });

    if (!stakeholder) {
      return { error: "Stakeholder not found" };
    }

    const totalSecurities =
      stakeholder._count.shareCertificates +
      stakeholder._count.optionGrants +
      stakeholder._count.convertibles;

    if (totalSecurities > 0) {
      return {
        error: `Cannot delete stakeholder with existing securities (${totalSecurities} total)`,
      };
    }

    await prisma.stakeholder.delete({
      where: { id },
    });

    revalidatePath("/stakeholders");
    return {};
  } catch (error) {
    console.error("Error deleting stakeholder:", error);
    return { error: "Failed to delete stakeholder" };
  }
}
