import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { getVestingProgress } from "@/lib/vesting";
import { ArrowLeft } from "lucide-react";
import { ExerciseForm } from "./exercise-form";

export const dynamic = "force-dynamic";

async function getGrantForExercise(id: string) {
  const grant = await prisma.optionGrant.findUnique({
    where: { id },
    include: {
      stakeholder: true,
      company: true,
    },
  });

  if (!grant) return null;

  const progress = await getVestingProgress(grant.id);

  return { grant, progress };
}

export default async function ExerciseOptionsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getGrantForExercise(id);

  if (!data) {
    notFound();
  }

  const { grant, progress } = data;

  if (progress.exercisableShares <= 0) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/options/${id}`}>
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
            <Link href={`/options/${id}`} className="mt-4 inline-block">
              <Button variant="outline">Back to Grant Details</Button>
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
        <Link href={`/options/${id}`}>
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
              <label className="text-sm text-muted-foreground">Optionholder</label>
              <p className="font-medium">{grant.stakeholder.name}</p>
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
      <ExerciseForm
        grantId={grant.id}
        exercisableShares={progress.exercisableShares}
        exercisePrice={Number(grant.exercisePrice)}
      />
    </div>
  );
}
