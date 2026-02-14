import { cookies } from "next/headers";
import { prisma } from "./prisma";
import type { Stakeholder } from "../../prisma/generated/prisma";

export async function getStakeholderFromSession(): Promise<Stakeholder | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("stakeholder_session")?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await prisma.stakeholderSession.findUnique({
    where: { token: sessionToken },
    include: { stakeholder: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return session.stakeholder;
}

export async function requireStakeholder(): Promise<Stakeholder> {
  const stakeholder = await getStakeholderFromSession();
  if (!stakeholder) {
    throw new Error("Unauthorized");
  }
  return stakeholder;
}
