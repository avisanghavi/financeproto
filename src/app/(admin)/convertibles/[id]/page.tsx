import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatDate, formatPercent } from "@/lib/utils";
import { calculateAccruedInterest, getTotalConvertibleAmount } from "@/lib/calculations";
import { ArrowLeft, Edit, User, Building2, DollarSign, FileText } from "lucide-react";

async function getConvertible(id: string) {
  const convertible = await prisma.convertible.findUnique({
    where: { id },
    include: {
      stakeholder: true,
      company: true,
      convertsToClass: true,
    },
  });
  return convertible;
}

export default async function ConvertibleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const convertible = await getConvertible(id);

  if (!convertible) {
    notFound();
  }

  const accruedInterest = calculateAccruedInterest(convertible);
  const totalAmount = getTotalConvertibleAmount(convertible);
  const isSafe = convertible.type === "SAFE";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/convertibles">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {convertible.securityId}
              </h1>
              <Badge variant="convertible">
                {isSafe ? "SAFE" : "Convertible Note"}
              </Badge>
              <Badge
                variant={
                  convertible.status === "OUTSTANDING" ? "outstanding" : "secondary"
                }
              >
                {convertible.status.toLowerCase()}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {isSafe ? "Simple Agreement for Future Equity" : "Convertible Note"}
            </p>
          </div>
        </div>
        <Link href={`/convertibles/${convertible.id}/edit`}>
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Holder Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Convertible Holder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <p className="font-medium">
                <Link
                  href={`/stakeholders/${convertible.stakeholder.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {convertible.stakeholder.name}
                </Link>
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <p className="font-medium">{convertible.stakeholder.email}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Type</label>
              <p className="font-medium capitalize">
                {convertible.stakeholder.type.toLowerCase().replace("_", " ")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Issuer Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Issuer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Company</label>
              <p className="font-medium">{convertible.company.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Issue Date</label>
                <p className="font-medium">{formatDate(convertible.issueDate)}</p>
              </div>
              {convertible.boardApprovalDate && (
                <div>
                  <label className="text-sm text-muted-foreground">
                    Board Approval
                  </label>
                  <p className="font-medium">
                    {formatDate(convertible.boardApprovalDate)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Value Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Value
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Principal Amount</label>
              <p className="font-medium font-mono text-lg">
                {formatCurrency(Number(convertible.principal))}
              </p>
            </div>

            {!isSafe && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Interest Rate
                    </label>
                    <p className="font-medium font-mono">
                      {convertible.interestRate
                        ? formatPercent(Number(convertible.interestRate))
                        : "-"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Interest Start
                    </label>
                    <p className="font-medium">
                      {convertible.interestStartDate
                        ? formatDate(convertible.interestStartDate)
                        : "-"}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Accrued Interest
                  </label>
                  <p className="font-medium font-mono">
                    {formatCurrency(accruedInterest)}
                  </p>
                </div>
              </>
            )}

            <div className="border-t pt-4">
              <label className="text-sm text-muted-foreground">Total Amount</label>
              <p className="font-bold font-mono text-xl">
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terms Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Valuation Cap</label>
                <p className="font-medium font-mono">
                  {convertible.valuationCap ? (
                    formatCurrency(Number(convertible.valuationCap))
                  ) : (
                    <span className="text-red-500">No Cap</span>
                  )}
                </p>
              </div>
              {convertible.valuationCap && (
                <div>
                  <label className="text-sm text-muted-foreground">Cap Type</label>
                  <p className="font-medium capitalize">
                    {convertible.valuationCapType
                      ?.toLowerCase()
                      .replace("_", "-") || "-"}
                  </p>
                </div>
              )}
              <div>
                <label className="text-sm text-muted-foreground">Discount</label>
                <p className="font-medium">
                  {convertible.discount ? (
                    formatPercent(Number(convertible.discount))
                  ) : (
                    <span className="text-red-500">None entered</span>
                  )}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Liquidity Priority
                </label>
                <p className="font-medium">
                  {convertible.liquidityPriority || (
                    <span className="text-red-500">None entered</span>
                  )}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Converts To
                </label>
                <p className="font-medium">
                  {convertible.convertsToClass?.name || (
                    <span className="text-red-500">None entered</span>
                  )}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Cashout Multiplier
                </label>
                <p className="font-medium">
                  {convertible.cashoutMultiplier ? (
                    `${Number(convertible.cashoutMultiplier)}x`
                  ) : (
                    <span className="text-red-500">None entered</span>
                  )}
                </p>
              </div>
            </div>

            {convertible.conversionPriceBasis &&
              convertible.conversionPriceBasis.length > 0 && (
                <div>
                  <label className="text-sm text-muted-foreground">
                    Conversion Price Basis
                  </label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {convertible.conversionPriceBasis.map((basis) => (
                      <Badge key={basis} variant="secondary">
                        {basis.toLowerCase().replace("_", " ")}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
