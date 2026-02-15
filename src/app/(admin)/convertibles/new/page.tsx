import { prisma } from "@/lib/prisma";
import { serialize } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ConvertibleForm } from "../convertible-form";

export const dynamic = "force-dynamic";

async function getFormData() {
  const company = await prisma.company.findFirst();
  if (!company) return null;

  const [stakeholders, shareClasses] = await Promise.all([
    prisma.stakeholder.findMany({
      where: { companyId: company.id },
      orderBy: { name: "asc" },
    }),
    prisma.shareClass.findMany({
      where: { companyId: company.id },
      orderBy: { name: "asc" },
    }),
  ]);

  return { stakeholders, shareClasses };
}

export default async function NewConvertiblePage() {
  const data = await getFormData();

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No company found. Please run the database seed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/convertibles">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Issue Convertible</h1>
          <p className="text-muted-foreground">
            Create a new SAFE or convertible note
          </p>
        </div>
      </div>

      <ConvertibleForm
        stakeholders={serialize(data.stakeholders)}
        shareClasses={serialize(data.shareClasses)}
      />
    </div>
  );
}
