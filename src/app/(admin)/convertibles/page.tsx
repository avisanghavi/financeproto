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
import { formatCurrency, formatDate, formatPercent } from "@/lib/utils";
import { calculateAccruedInterest, getTotalConvertibleAmount } from "@/lib/calculations";
import { Plus, Landmark } from "lucide-react";

async function getConvertibles() {
  const company = await prisma.company.findFirst();
  if (!company) return [];

  const convertibles = await prisma.convertible.findMany({
    where: { companyId: company.id },
    include: {
      stakeholder: true,
      convertsToClass: true,
    },
    orderBy: { securityId: "asc" },
  });

  // Calculate accrued interest for each
  return convertibles.map((conv) => ({
    ...conv,
    accruedInterest: calculateAccruedInterest(conv),
    totalAmount: getTotalConvertibleAmount(conv),
  }));
}

function getStatusVariant(status: string) {
  switch (status) {
    case "OUTSTANDING":
      return "outstanding";
    case "CONVERTED":
      return "success";
    case "CANCELLED":
      return "cancelled";
    case "REPAID":
      return "info";
    default:
      return "secondary";
  }
}

export default async function ConvertiblesPage() {
  const convertibles = await getConvertibles();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Convertibles</h1>
          <p className="text-muted-foreground">
            Manage SAFEs and convertible notes
          </p>
        </div>
        <Link href="/convertibles/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Issue Convertible
          </Button>
        </Link>
      </div>

      {/* Table */}
      {convertibles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Landmark className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No convertibles yet</h3>
          <p className="text-muted-foreground mb-4">
            Issue your first SAFE or convertible note to get started.
          </p>
          <Link href="/convertibles/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Issue Convertible
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
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Principal</TableHead>
                <TableHead className="text-right">Interest Rate</TableHead>
                <TableHead className="text-right">Accrued Interest</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
                <TableHead>Issue Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {convertibles.map((conv) => (
                <TableRow key={conv.id}>
                  <TableCell>
                    <Link
                      href={`/convertibles/${conv.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {conv.securityId}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{conv.stakeholder.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {conv.stakeholder.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="convertible">
                      {conv.type === "SAFE" ? "SAFE" : "Convertible Note"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(conv.status)}>
                      {conv.status.toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(Number(conv.principal))}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {conv.type === "CONVERTIBLE_NOTE" && conv.interestRate
                      ? formatPercent(Number(conv.interestRate))
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {conv.type === "CONVERTIBLE_NOTE"
                      ? formatCurrency(conv.accruedInterest)
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right font-mono font-medium">
                    {formatCurrency(conv.totalAmount)}
                  </TableCell>
                  <TableCell>{formatDate(conv.issueDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
