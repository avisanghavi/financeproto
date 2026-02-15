import { prisma } from "@/lib/prisma";
import { getStakeholderFromSession } from "@/lib/stakeholder-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { getVestingProgress } from "@/lib/vesting";
import { calculateAccruedInterest, getTotalConvertibleAmount } from "@/lib/calculations";
import { VestingProgressBar } from "@/components/vesting-progress-bar";

export const dynamic = "force-dynamic";
import { FileText, Award, Landmark, Building2 } from "lucide-react";

async function getPortfolioData(stakeholderId: string) {
  const [stakeholder, certificates, optionGrants, convertibles] = await Promise.all([
    prisma.stakeholder.findUnique({
      where: { id: stakeholderId },
      include: { company: true },
    }),
    prisma.shareCertificate.findMany({
      where: { stakeholderId, status: "OUTSTANDING" },
      include: { shareClass: true },
      orderBy: { securityId: "asc" },
    }),
    prisma.optionGrant.findMany({
      where: {
        stakeholderId,
        status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] },
      },
      include: {
        equityPlan: true,
        vestingSchedule: true,
      },
      orderBy: { securityId: "asc" },
    }),
    prisma.convertible.findMany({
      where: { stakeholderId, status: "OUTSTANDING" },
      orderBy: { securityId: "asc" },
    }),
  ]);

  // Get vesting progress for each grant
  const grantsWithProgress = await Promise.all(
    optionGrants.map(async (grant) => {
      const progress = await getVestingProgress(grant.id);
      return { ...grant, progress };
    })
  );

  // Calculate totals
  const totalShares = certificates.reduce((sum, c) => sum + c.quantity, 0);
  const totalOptions = optionGrants.reduce(
    (sum, g) => sum + g.originalQuantity - g.expiredQuantity,
    0
  );
  const totalVestedOptions = grantsWithProgress.reduce(
    (sum, g) => sum + g.progress.vestedShares,
    0
  );
  const totalExercisedOptions = grantsWithProgress.reduce(
    (sum, g) => sum + g.progress.exercisedShares,
    0
  );
  const totalConvertiblePrincipal = convertibles.reduce(
    (sum, c) => sum + Number(c.principal),
    0
  );

  return {
    stakeholder,
    certificates,
    optionGrants: grantsWithProgress,
    convertibles,
    totals: {
      shares: totalShares,
      options: totalOptions,
      vestedOptions: totalVestedOptions,
      exercisedOptions: totalExercisedOptions,
      convertiblePrincipal: totalConvertiblePrincipal,
    },
  };
}

export default async function PortfolioPage() {
  const stakeholder = await getStakeholderFromSession();
  if (!stakeholder) {
    redirect("/auth/stakeholder/login");
  }

  const data = await getPortfolioData(stakeholder.id);

  if (!data.stakeholder) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Unable to load portfolio data.</p>
      </div>
    );
  }

  const { certificates, optionGrants, convertibles, totals } = data;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {data.stakeholder.company.name}
          </h1>
          <p className="text-muted-foreground">Your equity holdings</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Shares */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Share Certificates</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(totals.shares)}
            </div>
            <p className="text-xs text-muted-foreground">
              {certificates.length} certificate{certificates.length !== 1 ? "s" : ""}
            </p>
          </CardContent>
        </Card>

        {/* Options */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stock Options</CardTitle>
            <Award className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(totals.options)}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatNumber(totals.vestedOptions)} vested,{" "}
              {formatNumber(totals.vestedOptions - totals.exercisedOptions)} exercisable
            </p>
          </CardContent>
        </Card>

        {/* Convertibles */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Convertibles</CardTitle>
            <Landmark className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totals.convertiblePrincipal)}
            </div>
            <p className="text-xs text-muted-foreground">
              {convertibles.length} instrument{convertibles.length !== 1 ? "s" : ""}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Options Overview (if any) */}
      {optionGrants.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Options Vesting Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <VestingProgressBar
              total={totals.options}
              vested={totals.vestedOptions}
              exercised={totals.exercisedOptions}
            />
          </CardContent>
        </Card>
      )}

      {/* Holdings */}
      <div className="space-y-6">
        {/* Share Certificates */}
        {certificates.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Share Certificates</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <Link key={cert.id} href={`/portfolio/certificate/${cert.id}`}>
                  <Card className="hover:bg-muted/50 transition-colors cursor-pointer security-common">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-mono text-lg font-bold">
                            {formatNumber(cert.quantity)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {cert.shareClass.name}
                          </p>
                        </div>
                        <Badge
                          variant={
                            cert.shareClass.type === "COMMON" ? "common" : "preferred"
                          }
                        >
                          {cert.shareClass.type.toLowerCase()}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {cert.securityId}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Option Grants */}
        {optionGrants.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Option Grants</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {optionGrants.map((grant) => (
                <Link key={grant.id} href={`/portfolio/option/${grant.id}`}>
                  <Card className="hover:bg-muted/50 transition-colors cursor-pointer security-options">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-mono text-lg font-bold">
                            {formatNumber(grant.originalQuantity)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            @ {formatCurrency(Number(grant.exercisePrice))}
                          </p>
                        </div>
                        <Badge variant={grant.type === "ISO" ? "iso" : "nso"}>
                          {grant.type}
                        </Badge>
                      </div>
                      <div className="mt-3">
                        <VestingProgressBar
                          total={grant.progress.totalShares}
                          vested={grant.progress.vestedShares}
                          exercised={grant.progress.exercisedShares}
                          showLegend={false}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatPercent(grant.progress.vestedPercent)} vested
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {grant.securityId}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Convertibles */}
        {convertibles.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Convertibles</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {convertibles.map((conv) => {
                const totalAmount = getTotalConvertibleAmount(conv);
                return (
                  <Link key={conv.id} href={`/portfolio/convertible/${conv.id}`}>
                    <Card className="hover:bg-muted/50 transition-colors cursor-pointer security-convertible">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-mono text-lg font-bold">
                              {formatCurrency(totalAmount)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {conv.type === "SAFE" ? "SAFE" : "Convertible Note"}
                            </p>
                          </div>
                          <Badge variant="convertible">
                            {conv.type === "SAFE" ? "SAFE" : "CN"}
                          </Badge>
                        </div>
                        {conv.valuationCap && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Cap: {formatCurrency(Number(conv.valuationCap))}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {conv.securityId}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {certificates.length === 0 &&
          optionGrants.length === 0 &&
          convertibles.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  You don&apos;t have any equity holdings yet.
                </p>
              </CardContent>
            </Card>
          )}
      </div>
    </div>
  );
}
