import { prisma } from "@/lib/prisma";
import { getStakeholderFromSession } from "@/lib/stakeholder-auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { getVestingProgress } from "@/lib/vesting";
import { ArrowLeft } from "lucide-react";
import { PortalExerciseForm } from "./portal-exercise-form";

export const dynamic = "force-dynamic";

async function getGrantForExercise(grantId: string, stakeholderId: string) {
  const grant = await prisma.optionGrant.findFirst({
    where: {
      id: grantId,
      stakeholderId, // Ensure stakeholder owns this grant
    },
    include: {
      company: true,
    },
  });

  if (!grant) return null;

  const progress = await getVestingProgress(grant.id);

  return { grant, progress };
}

export default async function PortalExercisePage({
  params,
}: {
  params: Promise<{ grantId: string }>;
}) {
  const stakeholder = await getStakeholderFromSession();
  if (!stakeholder) {
    redirect("/auth/stakeholder/login");
  }

  const { grantId } = await params;
  const data = await getGrantForExercise(grantId, stakeholder.id);

  if (!data) {
    notFound();
  }

  const { grant, progress } = data;

  if (progress.exercisableShares <= 0) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/exercises">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Exercise Options</h1>
            <p className="text-muted-foreground">{grant.securityId}</p>
          </div>
        </div>

        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              No options available to exercise at this time.
            </p>
            <Link href="/exercises" className="mt-4 inline-block">
              <Button variant="outline">Back to Exercises</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/exercises">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Exercise Options</h1>
          <p className="text-muted-foreground">{grant.securityId}</p>
        </div>
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Exercise Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Company</label>
              <p className="font-medium">{grant.company.name}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Grant</label>
              <p className="font-medium">{grant.securityId}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">
                Available to Exercise
              </label>
              <p className="font-medium text-green-600 font-mono">
                {formatNumber(progress.exercisableShares)}
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Exercise Price</label>
              <p className="font-medium font-mono">
                {formatCurrency(Number(grant.exercisePrice))}
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Total Vested</label>
              <p className="font-medium font-mono">
                {formatNumber(progress.vestedShares)}
              </p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Already Exercised</label>
              <p className="font-medium font-mono">
                {formatNumber(progress.exercisedShares)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise Form */}
      <PortalExerciseForm
        grantId={grant.id}
        exercisableShares={progress.exercisableShares}
        exercisePrice={Number(grant.exercisePrice)}
      />
    </div>
  );
}
