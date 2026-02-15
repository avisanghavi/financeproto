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
import { formatNumber } from "@/lib/utils";
import { Plus, Users } from "lucide-react";

async function getStakeholders() {
  const company = await prisma.company.findFirst();
  if (!company) return [];

  return prisma.stakeholder.findMany({
    where: { companyId: company.id },
    include: {
      _count: {
        select: {
          shareCertificates: { where: { status: "OUTSTANDING" } },
          optionGrants: { where: { status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] } } },
          convertibles: { where: { status: "OUTSTANDING" } },
        },
      },
    },
    orderBy: { name: "asc" },
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

export default async function StakeholdersPage() {
  const stakeholders = await getStakeholders();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stakeholders</h1>
          <p className="text-muted-foreground">
            Manage founders, investors, employees, and advisors
          </p>
        </div>
        <Link href="/stakeholders/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Stakeholder
          </Button>
        </Link>
      </div>

      {/* Table */}
      {stakeholders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Users className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No stakeholders yet</h3>
          <p className="text-muted-foreground mb-4">
            Add your first stakeholder to get started.
          </p>
          <Link href="/stakeholders/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Stakeholder
            </Button>
          </Link>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Certificates</TableHead>
                <TableHead className="text-right">Options</TableHead>
                <TableHead className="text-right">Convertibles</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stakeholders.map((stakeholder) => (
                <TableRow key={stakeholder.id}>
                  <TableCell>
                    <Link
                      href={`/stakeholders/${stakeholder.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {stakeholder.name}
                    </Link>
                  </TableCell>
                  <TableCell>{stakeholder.email}</TableCell>
                  <TableCell>
                    <Badge variant={getTypeVariant(stakeholder.type)}>
                      {stakeholder.type.toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>{stakeholder.title || "-"}</TableCell>
                  <TableCell className="text-right">
                    {stakeholder._count.shareCertificates > 0 ? (
                      <Badge variant="secondary">
                        {stakeholder._count.shareCertificates}
                      </Badge>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {stakeholder._count.optionGrants > 0 ? (
                      <Badge variant="secondary">
                        {stakeholder._count.optionGrants}
                      </Badge>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {stakeholder._count.convertibles > 0 ? (
                      <Badge variant="secondary">
                        {stakeholder._count.convertibles}
                      </Badge>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
