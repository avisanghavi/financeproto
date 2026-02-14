import { prisma } from "./prisma";

export type SecurityIdPrefix = "CS" | "ES" | "SAFE" | "CN";

/**
 * Generates a unique security ID with the given prefix.
 * Format: PREFIX-XX (e.g., CS-01, ES-12, SAFE-03, CN-01)
 */
export async function generateSecurityId(
  prefix: SecurityIdPrefix,
  companyId: string
): Promise<string> {
  let maxNumber = 0;

  switch (prefix) {
    case "CS": {
      const lastCert = await prisma.shareCertificate.findFirst({
        where: { companyId },
        orderBy: { securityId: "desc" },
        select: { securityId: true },
      });
      if (lastCert) {
        const num = parseInt(lastCert.securityId.replace("CS-", ""), 10);
        if (!isNaN(num)) maxNumber = num;
      }
      break;
    }
    case "ES": {
      const lastGrant = await prisma.optionGrant.findFirst({
        where: { companyId },
        orderBy: { securityId: "desc" },
        select: { securityId: true },
      });
      if (lastGrant) {
        const num = parseInt(lastGrant.securityId.replace("ES-", ""), 10);
        if (!isNaN(num)) maxNumber = num;
      }
      break;
    }
    case "SAFE": {
      const lastSafe = await prisma.convertible.findFirst({
        where: { companyId, type: "SAFE" },
        orderBy: { securityId: "desc" },
        select: { securityId: true },
      });
      if (lastSafe) {
        const num = parseInt(lastSafe.securityId.replace("SAFE-", ""), 10);
        if (!isNaN(num)) maxNumber = num;
      }
      break;
    }
    case "CN": {
      const lastCN = await prisma.convertible.findFirst({
        where: { companyId, type: "CONVERTIBLE_NOTE" },
        orderBy: { securityId: "desc" },
        select: { securityId: true },
      });
      if (lastCN) {
        const num = parseInt(lastCN.securityId.replace("CN-", ""), 10);
        if (!isNaN(num)) maxNumber = num;
      }
      break;
    }
  }

  const nextNumber = maxNumber + 1;
  return `${prefix}-${nextNumber.toString().padStart(2, "0")}`;
}

/**
 * Parses a security ID and returns the prefix and number.
 */
export function parseSecurityId(securityId: string): {
  prefix: SecurityIdPrefix;
  number: number;
} | null {
  const match = securityId.match(/^(CS|ES|SAFE|CN)-(\d+)$/);
  if (!match) return null;
  return {
    prefix: match[1] as SecurityIdPrefix,
    number: parseInt(match[2], 10),
  };
}
