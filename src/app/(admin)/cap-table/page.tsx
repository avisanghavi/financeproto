import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";
import {
  getCapTableMetrics,
  getOwnershipByStakeholder,
  getOwnershipByShareClass,
} from "@/lib/calculations";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { CapTableTabs } from "./cap-table-tabs";
import { TrendingUp, DollarSign, Award } from "lucide-react";

async function getCapTableData() {
  const company = await prisma.company.findFirst();
  if (!company) return null;

  const [metrics, stakeholderOwnership, classOwnership] = await Promise.all([
    getCapTableMetrics(company.id),
    getOwnershipByStakeholder(company.id),
    getOwnershipByShareClass(company.id),
  ]);

  return {
    company,
    metrics,
    stakeholderOwnership,
    classOwnership,
  };
}

export default async function CapTablePage() {
  const data = await getCapTableData();

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">
          No company found. Please run the database seed.
        </p>
      </div>
    );
  }

  const { company, metrics, stakeholderOwnership, classOwnership } = data;

  // Prepare chart data
  const stakeholderChartData = stakeholderOwnership
    .filter((s) => s.fullyDilutedShares > 0)
    .map((s) => ({
      name: s.stakeholderName,
      value: s.fullyDilutedShares,
      percent: s.fullyDilutedPercent,
    }));

  const classChartData = classOwnership
    .filter((c) => c.outstandingShares > 0)
    .map((c) => ({
      name: c.shareClassName,
      value: c.outstandingShares,
      percent: c.outstandingPercent,
      color: c.shareClassType === "COMMON" ? "#3b82f6" : "#22c55e",
    }));

  // Add option pool and convertibles to class chart
  if (metrics.fullyDilutedBreakdown.allOutstandingOptions > 0) {
    classChartData.push({
      name: "Outstanding Options",
      value: metrics.fullyDilutedBreakdown.allOutstandingOptions,
      percent:
        metrics.fullyDilutedBreakdown.allOutstandingOptions /
        metrics.fullyDilutedShares,
      color: "#f97316",
    });
  }

  if (metrics.fullyDilutedBreakdown.availableOptionPool > 0) {
    classChartData.push({
      name: "Available Pool",
      value: metrics.fullyDilutedBreakdown.availableOptionPool,
      percent:
        metrics.fullyDilutedBreakdown.availableOptionPool /
        metrics.fullyDilutedShares,
      color: "#94a3b8",
    });
  }

  if (metrics.fullyDilutedBreakdown.convertibleShares > 0) {
    classChartData.push({
      name: "Convertibles",
      value: metrics.fullyDilutedBreakdown.convertibleShares,
      percent:
        metrics.fullyDilutedBreakdown.convertibleShares /
        metrics.fullyDilutedShares,
      color: "#a855f7",
    });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cap Table</h1>
        <p className="text-muted-foreground">
          {company.name} - Capitalization Overview
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fully Diluted Shares</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(metrics.fullyDilutedShares)}
            </div>
            <p className="text-xs text-muted-foreground">
              Including all options and convertibles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount Raised</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(metrics.amountRaised)}
            </div>
            <p className="text-xs text-muted-foreground">
              From equity and convertible instruments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Option Pool</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(metrics.availableShares)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatPercent(metrics.availableShares / metrics.fullyDilutedShares)} of
              fully diluted
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cap Table Views */}
      <CapTableTabs
        stakeholderOwnership={stakeholderOwnership}
        classOwnership={classOwnership}
        stakeholderChartData={stakeholderChartData}
        classChartData={classChartData}
        fullyDilutedShares={metrics.fullyDilutedShares}
      />
    </div>
  );
}
