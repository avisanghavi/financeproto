import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string | null | undefined): string {
  if (amount === null || amount === undefined) return "$0.00";
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
}

export function formatNumber(num: number | string | null | undefined): string {
  if (num === null || num === undefined) return "0";
  const n = typeof num === "string" ? parseFloat(num) : num;
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatPercent(num: number | string | null | undefined, decimals = 2): string {
  if (num === null || num === undefined) return "0%";
  const n = typeof num === "string" ? parseFloat(num) : num;
  return `${(n * 100).toFixed(decimals)}%`;
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return "-";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatShortDate(date: Date | string | null | undefined): string {
  if (!date) return "-";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
}

/**
 * Serializes Prisma objects for passing to Client Components.
 * Converts Decimal objects to numbers and Date objects to ISO strings.
 */
export function serialize<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, value) => {
      // Handle Decimal objects (they have a toNumber method)
      if (value !== null && typeof value === "object" && typeof value.toNumber === "function") {
        return value.toNumber();
      }
      return value;
    })
  );
}
