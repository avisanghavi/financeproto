import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { StakeholderForm } from "../stakeholder-form";

export const dynamic = "force-dynamic";

export default function NewStakeholderPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/stakeholders">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Stakeholder</h1>
          <p className="text-muted-foreground">
            Add a new founder, investor, employee, or advisor
          </p>
        </div>
      </div>

      <StakeholderForm />
    </div>
  );
}
