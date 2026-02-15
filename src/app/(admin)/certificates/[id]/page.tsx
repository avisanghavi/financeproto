import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatDate } from "@/lib/utils";
import { ArrowLeft, Edit, FileText, User, Building2, Receipt } from "lucide-react";

export const dynamic = "force-dynamic";

async function getCertificate(id: string) {
  const cert = await prisma.shareCertificate.findUnique({
    where: { id },
    include: {
      stakeholder: true,
      shareClass: true,
      company: true,
      optionExercise: {
        include: {
          optionGrant: true,
        },
      },
    },
  });
  return cert;
}

export default async function CertificateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const certificate = await getCertificate(id);

  if (!certificate) {
    notFound();
  }

  const transactionValue = certificate.quantity * Number(certificate.pricePerShare);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/certificates">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {certificate.securityId}
              </h1>
              <Badge
                variant={
                  certificate.status === "OUTSTANDING" ? "outstanding" : "secondary"
                }
              >
                {certificate.status.toLowerCase()}
              </Badge>
              <Badge
                variant={
                  certificate.shareClass.type === "COMMON" ? "common" : "preferred"
                }
              >
                {certificate.shareClass.name}
              </Badge>
            </div>
            <p className="text-muted-foreground">Share Certificate</p>
          </div>
        </div>
        <Link href={`/certificates/${certificate.id}/edit`}>
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Shareholder Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Shareholder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <p className="font-medium">
                <Link
                  href={`/stakeholders/${certificate.stakeholder.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {certificate.stakeholder.name}
                </Link>
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <p className="font-medium">{certificate.stakeholder.email}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Type</label>
              <p className="font-medium capitalize">
                {certificate.stakeholder.type.toLowerCase().replace("_", " ")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Certificate Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Certificate Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Share Class</label>
                <p className="font-medium">{certificate.shareClass.name}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Quantity</label>
                <p className="font-medium font-mono">
                  {formatNumber(certificate.quantity)}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Price/Share</label>
                <p className="font-medium font-mono">
                  {formatCurrency(Number(certificate.pricePerShare))}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Cash Paid</label>
                <p className="font-medium font-mono">
                  {formatCurrency(Number(certificate.cashPaid))}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Cost Basis</label>
                <p className="font-medium font-mono">
                  {formatCurrency(Number(certificate.costBasis))}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Transaction Value
                </label>
                <p className="font-medium font-mono">
                  {formatCurrency(transactionValue)}
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Acquisition Date
                </label>
                <p className="font-medium">{formatDate(certificate.acquisitionDate)}</p>
              </div>
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
              <p className="font-medium">{certificate.company.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Issue Date</label>
                <p className="font-medium">{formatDate(certificate.issueDate)}</p>
              </div>
              {certificate.originalIssueDate && (
                <div>
                  <label className="text-sm text-muted-foreground">
                    Original Issue Date
                  </label>
                  <p className="font-medium">
                    {formatDate(certificate.originalIssueDate)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Exercise Record (if applicable) */}
        {certificate.optionExercise && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Exercise Record
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">
                  Exercised From
                </label>
                <p className="font-medium">
                  <Link
                    href={`/options/${certificate.optionExercise.optionGrant.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {certificate.optionExercise.optionGrant.securityId}
                  </Link>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">
                    Exercise Date
                  </label>
                  <p className="font-medium">
                    {formatDate(certificate.optionExercise.exerciseDate)}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Shares Exercised
                  </label>
                  <p className="font-medium font-mono">
                    {formatNumber(certificate.optionExercise.sharesExercised)}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Exercise Price
                  </label>
                  <p className="font-medium font-mono">
                    {formatCurrency(Number(certificate.optionExercise.exercisePrice))}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    FMV at Exercise
                  </label>
                  <p className="font-medium font-mono">
                    {formatCurrency(Number(certificate.optionExercise.fmvAtExercise))}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Total Cost</label>
                  <p className="font-medium font-mono">
                    {formatCurrency(Number(certificate.optionExercise.totalCost))}
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Payment Method
                  </label>
                  <p className="font-medium capitalize">
                    {certificate.optionExercise.paymentMethod
                      .toLowerCase()
                      .replace("_", " ")}
                  </p>
                </div>
              </div>
              {certificate.optionExercise.approver && (
                <div>
                  <label className="text-sm text-muted-foreground">Approved By</label>
                  <p className="font-medium">{certificate.optionExercise.approver}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Documents Section */}
      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <FileText className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">Certificate Image</p>
                <p className="text-sm text-muted-foreground">
                  {certificate.certificateImageUrl ? (
                    <a
                      href={certificate.certificateImageUrl}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      View document
                    </a>
                  ) : (
                    "Not uploaded"
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <FileText className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">Option Agreement</p>
                <p className="text-sm text-muted-foreground">
                  {certificate.optionAgreementUrl ? (
                    <a
                      href={certificate.optionAgreementUrl}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      View document
                    </a>
                  ) : (
                    "Not uploaded"
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <FileText className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">Exercise Agreement</p>
                <p className="text-sm text-muted-foreground">
                  {certificate.exerciseAgreementUrl ? (
                    <a
                      href={certificate.exerciseAgreementUrl}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      View document
                    </a>
                  ) : (
                    "Not uploaded"
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
