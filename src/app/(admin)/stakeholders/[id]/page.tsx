import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatDate } from "@/lib/utils";
import { ArrowLeft, Edit, User, FileText, Award, Landmark } from "lucide-react";

export const dynamic = "force-dynamic";

async function getStakeholder(id: string) {
  return prisma.stakeholder.findUnique({
    where: { id },
    include: {
      company: true,
      shareCertificates: {
        include: { shareClass: true },
        orderBy: { issueDate: "desc" },
      },
      optionGrants: {
        include: { equityPlan: true },
        orderBy: { grantDate: "desc" },
      },
      convertibles: {
        orderBy: { issueDate: "desc" },
      },
    },
  });
}

function getTypeVariant(type: string) {
  switch (type) {
    case "FOUNDER":
      return "common";
    case "INVESTOR":
      return "preferred";
    case "EMPLOYEE":
      return "options";
    case "ADVISOR":
      return "convertible";
    default:
      return "secondary";
  }
}

export default async function StakeholderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stakeholder = await getStakeholder(id);

  if (!stakeholder) {
    notFound();
  }

  const totalShares = stakeholder.shareCertificates
    .filter((c) => c.status === "OUTSTANDING")
    .reduce((sum, c) => sum + c.quantity, 0);

  const totalOptions = stakeholder.optionGrants
    .filter((g) => ["ACTIVE", "PARTIALLY_EXERCISED"].includes(g.status))
    .reduce((sum, g) => sum + g.originalQuantity, 0);

  const totalConvertiblePrincipal = stakeholder.convertibles
    .filter((c) => c.status === "OUTSTANDING")
    .reduce((sum, c) => sum + Number(c.principal), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/stakeholders">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {stakeholder.name}
              </h1>
              <Badge variant={getTypeVariant(stakeholder.type)}>
                {stakeholder.type.toLowerCase()}
              </Badge>
            </div>
            <p className="text-muted-foreground">{stakeholder.email}</p>
          </div>
        </div>
        <Link href={`/stakeholders/${id}/edit`}>
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Title</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stakeholder.title || "—"}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Shares</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalShares)}</div>
            <p className="text-xs text-muted-foreground">
              {stakeholder.shareCertificates.filter((c) => c.status === "OUTSTANDING").length} certificates
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Options</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalOptions)}</div>
            <p className="text-xs text-muted-foreground">
              {stakeholder.optionGrants.filter((g) => ["ACTIVE", "PARTIALLY_EXERCISED"].includes(g.status)).length} grants
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Convertibles</CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalConvertiblePrincipal)}
            </div>
            <p className="text-xs text-muted-foreground">
              {stakeholder.convertibles.filter((c) => c.status === "OUTSTANDING").length} instruments
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Share Certificates */}
      {stakeholder.shareCertificates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Share Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stakeholder.shareCertificates.map((cert) => (
                <Link
                  key={cert.id}
                  href={`/certificates/${cert.id}`}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                >
                  <div>
                    <div className="font-medium">{cert.securityId}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.shareClass.name} • {formatDate(cert.issueDate)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatNumber(cert.quantity)} shares</div>
                    <Badge variant={cert.status === "OUTSTANDING" ? "default" : "secondary"}>
                      {cert.status.toLowerCase()}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Option Grants */}
      {stakeholder.optionGrants.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Option Grants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stakeholder.optionGrants.map((grant) => (
                <Link
                  key={grant.id}
                  href={`/options/${grant.id}`}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                >
                  <div>
                    <div className="font-medium">{grant.securityId}</div>
                    <div className="text-sm text-muted-foreground">
                      {grant.equityPlan.name} • {grant.type} • {formatDate(grant.grantDate)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {formatNumber(grant.originalQuantity)} options
                    </div>
                    <div className="text-sm text-muted-foreground">
                      @ {formatCurrency(Number(grant.exercisePrice))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Convertibles */}
      {stakeholder.convertibles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>SAFEs & Convertibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stakeholder.convertibles.map((conv) => (
                <Link
                  key={conv.id}
                  href={`/convertibles/${conv.id}`}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                >
                  <div>
                    <div className="font-medium">{conv.securityId}</div>
                    <div className="text-sm text-muted-foreground">
                      {conv.type} • {formatDate(conv.issueDate)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      {formatCurrency(Number(conv.principal))}
                    </div>
                    {conv.valuationCap && (
                      <div className="text-sm text-muted-foreground">
                        Cap: {formatCurrency(Number(conv.valuationCap))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
