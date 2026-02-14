import { z } from "zod";

// Share Certificate validation
export const shareCertificateSchema = z.object({
  stakeholderId: z.string().min(1, "Stakeholder is required"),
  shareClassId: z.string().min(1, "Share class is required"),
  quantity: z.coerce
    .number()
    .int("Quantity must be a whole number")
    .positive("Quantity must be positive"),
  pricePerShare: z.coerce.number().positive("Price must be positive"),
  cashPaid: z.coerce.number().min(0, "Cash paid cannot be negative"),
  costBasis: z.coerce.number().min(0).optional(),
  acquisitionDate: z.string().min(1, "Acquisition date is required"),
  issueDate: z.string().optional(),
  originalIssueDate: z.string().optional(),
  status: z
    .enum(["OUTSTANDING", "CANCELLED", "TRANSFERRED", "REPURCHASED"])
    .default("OUTSTANDING"),
});

// Option Grant validation
export const optionGrantSchema = z.object({
  stakeholderId: z.string().min(1, "Stakeholder is required"),
  equityPlanId: z.string().min(1, "Equity plan is required"),
  originalQuantity: z.coerce
    .number()
    .int("Quantity must be a whole number")
    .positive("Quantity must be positive"),
  exercisePrice: z.coerce.number().positive("Exercise price must be positive"),
  type: z.enum(["ISO", "NSO"]),
  grantDate: z.string().min(1, "Grant date is required"),
  boardApprovalDate: z.string().optional(),
  expirationDate: z.string().min(1, "Expiration date is required"),
  grantReason: z.string().optional(),
  status: z
    .enum([
      "ACTIVE",
      "PARTIALLY_EXERCISED",
      "FULLY_EXERCISED",
      "EXPIRED",
      "CANCELLED",
      "TERMINATED",
    ])
    .default("ACTIVE"),
  // Vesting schedule
  vestingStartDate: z.string().min(1, "Vesting start date is required"),
  cliffMonths: z.coerce.number().int().min(0).default(12),
  cliffPercentage: z.coerce.number().min(0).max(1).default(0.25),
  totalPeriods: z.coerce.number().int().positive().default(48),
  periodUnit: z.enum(["MONTHLY", "QUARTERLY", "ANNUALLY"]).default("MONTHLY"),
  scheduleName: z.string().optional(),
});

// Exercise validation
export const exerciseSchema = z.object({
  grantId: z.string().min(1, "Grant is required"),
  sharesToExercise: z.coerce
    .number()
    .int("Shares must be a whole number")
    .positive("Must exercise at least 1 share"),
  paymentMethod: z.enum(["CASH", "CASHLESS", "MIXED", "PROMISSORY_NOTE"]),
  fmvAtExercise: z.coerce.number().positive("FMV must be positive").optional(),
});

// Convertible validation
export const convertibleSchema = z.object({
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
  status: z
    .enum(["OUTSTANDING", "CONVERTED", "CANCELLED", "REPAID"])
    .default("OUTSTANDING"),
});

// Stakeholder validation
export const stakeholderSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Invalid email address"),
  type: z.enum([
    "FOUNDER",
    "EMPLOYEE",
    "INVESTOR",
    "ADVISOR",
    "BOARD_MEMBER",
    "CONSULTANT",
  ]),
  title: z.string().max(255).optional(),
});

// Share Class validation
export const shareClassSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  type: z.enum(["COMMON", "PREFERRED"]),
  authorizedShares: z.coerce
    .number()
    .int("Shares must be a whole number")
    .positive("Must have positive shares"),
  pricePerShare: z.coerce.number().positive("Price must be positive"),
  conversionRatio: z.coerce.number().positive().default(1),
  liquidationPreference: z.coerce.number().positive().optional().nullable(),
  liquidationMultiple: z.coerce.number().positive().optional().nullable(),
  participatingPreferred: z.boolean().default(false),
  seniority: z.coerce.number().int().positive().default(1),
});

// Equity Plan validation
export const equityPlanSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  totalPoolSize: z.coerce
    .number()
    .int("Pool size must be a whole number")
    .positive("Pool size must be positive"),
  boardApprovalDate: z.string().min(1, "Board approval date is required"),
  expirationDate: z.string().optional(),
});

// Helper function to validate exercise against available shares
export function validateExerciseQuantity(
  sharesToExercise: number,
  exercisableShares: number
): string | null {
  if (sharesToExercise <= 0) {
    return "Must exercise at least 1 share";
  }
  if (!Number.isInteger(sharesToExercise)) {
    return "Shares must be a whole number";
  }
  if (sharesToExercise > exercisableShares) {
    return `Cannot exercise more than ${exercisableShares.toLocaleString()} shares`;
  }
  return null;
}

// Helper function to validate equity plan pool
export function validateEquityPlanPool(
  grantQuantity: number,
  availableShares: number
): string | null {
  if (grantQuantity > availableShares) {
    return `Not enough shares in pool. Available: ${availableShares.toLocaleString()}`;
  }
  return null;
}
