import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatNumber, formatDate } from "@/lib/utils";
import { Plus, FileText } from "lucide-react";

async function getCertificates() {
  const company = await prisma.company.findFirst();
  if (!company) return [];

  return prisma.shareCertificate.findMany({
    where: { companyId: company.id },
    include: {
      stakeholder: true,
      shareClass: true,
    },
    orderBy: { securityId: "asc" },
  });
}

function getStatusVariant(status: string) {
  switch (status) {
    case "OUTSTANDING":
      return "outstanding";
    case "CANCELLED":
      return "cancelled";
    case "TRANSFERRED":
      return "secondary";
    case "REPURCHASED":
      return "warning";
    default:
      return "secondary";
  }
}

function getClassVariant(type: string) {
  return type === "COMMON" ? "common" : "preferred";
}

export default async function CertificatesPage() {
  const certificates = await getCertificates();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Share Certificates</h1>
          <p className="text-muted-foreground">
            Manage share certificates issued to stakeholders
          </p>
        </div>
        <Link href="/certificates/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Issue Certificate
          </Button>
        </Link>
      </div>

      {/* Table */}
      {certificates.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No certificates yet</h3>
          <p className="text-muted-foreground mb-4">
            Issue your first share certificate to get started.
          </p>
          <Link href="/certificates/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Issue Certificate
            </Button>
          </Link>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Security ID</TableHead>
                <TableHead>Stakeholder</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Share Class</TableHead>
                <TableHead className="text-right">Shares</TableHead>
                <TableHead className="text-right">Price/Share</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead>Issue Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell>
                    <Link
                      href={`/certificates/${cert.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {cert.securityId}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{cert.stakeholder.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {cert.stakeholder.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(cert.status)}>
                      {cert.status.toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getClassVariant(cert.shareClass.type)}>
                      {cert.shareClass.name}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {formatNumber(cert.quantity)}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(Number(cert.pricePerShare))}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(cert.quantity * Number(cert.pricePerShare))}
                  </TableCell>
                  <TableCell>{formatDate(cert.issueDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
