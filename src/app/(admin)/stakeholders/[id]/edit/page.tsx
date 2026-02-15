import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { StakeholderForm } from "../../stakeholder-form";

export const dynamic = "force-dynamic";

async function getStakeholder(id: string) {
  return prisma.stakeholder.findUnique({
    where: { id },
  });
}

export default async function EditStakeholderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stakeholder = await getStakeholder(id);

  if (!stakeholder) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/stakeholders/${id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Stakeholder</h1>
          <p className="text-muted-foreground">Update stakeholder information</p>
        </div>
      </div>

      <StakeholderForm stakeholder={stakeholder} />
    </div>
  );
}
