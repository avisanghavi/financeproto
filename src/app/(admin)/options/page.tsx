import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatNumber, formatDate, formatPercent } from "@/lib/utils";
import { Plus, Award } from "lucide-react";
import { VestingProgressBar } from "@/components/vesting-progress-bar";
import { getVestingProgress } from "@/lib/vesting";
import { getVestingDescription } from "@/lib/calculations";

async function getOptionGrants() {
  const company = await prisma.company.findFirst();
  if (!company) return [];

  const grants = await prisma.optionGrant.findMany({
    where: { companyId: company.id },
    include: {
      stakeholder: true,
      equityPlan: true,
      vestingSchedule: true,
      exercises: {
        where: { status: { in: ["APPROVED", "COMPLETED"] } },
      },
    },
    orderBy: { securityId: "asc" },
  });

  // Get vesting progress for each grant
  const grantsWithProgress = await Promise.all(
    grants.map(async (grant) => {
      const progress = await getVestingProgress(grant.id);
      return { ...grant, progress };
    })
  );

  return grantsWithProgress;
}

function getStatusVariant(status: string) {
  switch (status) {
    case "ACTIVE":
      return "active";
    case "PARTIALLY_EXERCISED":
      return "exercised";
    case "FULLY_EXERCISED":
      return "exercised";
    case "EXPIRED":
      return "expired";
    case "CANCELLED":
    case "TERMINATED":
      return "cancelled";
    default:
      return "secondary";
  }
}

export default async function OptionsPage() {
  const grants = await getOptionGrants();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Option Grants</h1>
          <p className="text-muted-foreground">
            Manage stock option grants and vesting schedules
          </p>
        </div>
        <Link href="/options/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Grant Options
          </Button>
        </Link>
      </div>

      {/* Table */}
      {grants.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Award className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No option grants yet</h3>
          <p className="text-muted-foreground mb-4">
            Grant your first stock options to get started.
          </p>
          <Link href="/options/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Grant Options
            </Button>
          </Link>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Security ID</TableHead>
                <TableHead>Optionholder</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Original</TableHead>
                <TableHead className="text-right">Exercised</TableHead>
                <TableHead>Vesting Progress</TableHead>
                <TableHead className="text-right">Exercise Price</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Grant Date</TableHead>
                <TableHead>Schedule</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grants.map((grant) => {
                const exercised = grant.progress.exercisedShares;
                const vestingDesc = grant.vestingSchedule
                  ? getVestingDescription({
                      cliffMonths: grant.vestingSchedule.cliffMonths,
                      cliffPercentage: grant.vestingSchedule.cliffPercentage,
                      totalPeriods: grant.vestingSchedule.totalPeriods,
                      periodUnit: grant.vestingSchedule.periodUnit,
                    })
                  : "No schedule";

                return (
                  <TableRow key={grant.id}>
                    <TableCell>
                      <Link
                        href={`/options/${grant.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {grant.securityId}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{grant.stakeholder.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {grant.stakeholder.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(grant.status)}>
                        {grant.status.toLowerCase().replace("_", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(grant.originalQuantity)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(exercised)}
                    </TableCell>
                    <TableCell className="min-w-[200px]">
                      <VestingProgressBar
                        total={grant.progress.totalShares}
                        vested={grant.progress.vestedShares}
                        exercised={grant.progress.exercisedShares}
                        showLegend={false}
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {formatPercent(grant.progress.vestedPercent)} vested
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(Number(grant.exercisePrice))}
                    </TableCell>
                    <TableCell>
                      <Badge variant={grant.type === "ISO" ? "iso" : "nso"}>
                        {grant.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(grant.grantDate)}</TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground truncate max-w-[150px] block">
                        {grant.vestingSchedule
                          ? `${grant.vestingSchedule.totalPeriods / 12}yr / ${grant.vestingSchedule.cliffMonths}mo cliff`
                          : "No schedule"}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
