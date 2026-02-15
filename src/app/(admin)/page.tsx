import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getCapTableMetrics } from "@/lib/calculations";

export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import Link from "next/link";
import {
  FileText,
  Award,
  Landmark,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

async function getDashboardData() {
  const company = await prisma.company.findFirst();
  if (!company) {
    return null;
  }

  const [metrics, certificateCount, optionCount, convertibleCount, stakeholderCount] =
    await Promise.all([
      getCapTableMetrics(company.id),
      prisma.shareCertificate.count({ where: { companyId: company.id, status: "OUTSTANDING" } }),
      prisma.optionGrant.count({ where: { companyId: company.id, status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] } } }),
      prisma.convertible.count({ where: { companyId: company.id, status: "OUTSTANDING" } }),
      prisma.stakeholder.count({ where: { companyId: company.id } }),
    ]);

  return {
    company,
    metrics,
    certificateCount,
    optionCount,
    convertibleCount,
    stakeholderCount,
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  if (!data) {
    redirect("/settings");
  }

  const { company, metrics, certificateCount, optionCount, convertibleCount, stakeholderCount } = data;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
        <p className="text-muted-foreground">
          Incorporated in {company.incorporationState} on{" "}
          {new Date(company.incorporationDate).toLocaleDateString()}
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
              Authorized: {formatNumber(company.authorizedShares)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount Raised</CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(metrics.amountRaised)}
            </div>
            <p className="text-xs text-muted-foreground">
              From equity and convertibles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Option Pool Available</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(metrics.availableShares)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatPercent(metrics.availableShares / metrics.fullyDilutedShares)} of fully diluted
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ownership Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Fully Diluted Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>Common Stock</span>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {formatNumber(metrics.fullyDilutedBreakdown.outstandingCommon)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPercent(
                    metrics.fullyDilutedBreakdown.outstandingCommon /
                      metrics.fullyDilutedShares
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>Preferred (as-converted)</span>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {formatNumber(
                    metrics.fullyDilutedBreakdown.outstandingPreferredAsConverted
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPercent(
                    metrics.fullyDilutedBreakdown.outstandingPreferredAsConverted /
                      metrics.fullyDilutedShares
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span>Outstanding Options</span>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {formatNumber(metrics.fullyDilutedBreakdown.allOutstandingOptions)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPercent(
                    metrics.fullyDilutedBreakdown.allOutstandingOptions /
                      metrics.fullyDilutedShares
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <span>Available Option Pool</span>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {formatNumber(metrics.fullyDilutedBreakdown.availableOptionPool)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPercent(
                    metrics.fullyDilutedBreakdown.availableOptionPool /
                      metrics.fullyDilutedShares
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Convertibles (estimated)</span>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {formatNumber(metrics.fullyDilutedBreakdown.convertibleShares)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatPercent(
                    metrics.fullyDilutedBreakdown.convertibleShares /
                      metrics.fullyDilutedShares
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/certificates">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Share Certificates</CardTitle>
              <FileText className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{certificateCount}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/options">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Option Grants</CardTitle>
              <Award className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{optionCount}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/convertibles">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Convertibles</CardTitle>
              <Landmark className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{convertibleCount}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/stakeholders">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stakeholders</CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stakeholderCount}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
