import { prisma } from "@/lib/prisma";
import { getStakeholderFromSession } from "@/lib/stakeholder-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatNumber, formatDate } from "@/lib/utils";
import { getVestingProgress } from "@/lib/vesting";
import { PlayCircle, Clock, CheckCircle, History } from "lucide-react";

async function getExerciseData(stakeholderId: string) {
  const [optionGrants, exercises] = await Promise.all([
    prisma.optionGrant.findMany({
      where: {
        stakeholderId,
        status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] },
      },
      include: {
        company: true,
        vestingSchedule: true,
      },
      orderBy: { securityId: "asc" },
    }),
    prisma.optionExercise.findMany({
      where: {
        optionGrant: { stakeholderId },
      },
      include: {
        optionGrant: true,
        shareCertificate: true,
      },
      orderBy: { exerciseDate: "desc" },
    }),
  ]);

  // Get vesting progress for each grant
  const grantsWithProgress = await Promise.all(
    optionGrants.map(async (grant) => {
      const progress = await getVestingProgress(grant.id);
      return { ...grant, progress };
    })
  );

  // Split exercises by status
  const pendingExercises = exercises.filter((e) => e.status === "PENDING");
  const completedExercises = exercises.filter((e) =>
    ["APPROVED", "COMPLETED"].includes(e.status)
  );

  // Filter grants that have exercisable options
  const exercisableGrants = grantsWithProgress.filter(
    (g) => g.progress.exercisableShares > 0
  );

  return {
    exercisableGrants,
    pendingExercises,
    completedExercises,
  };
}

export default async function ExercisesPage() {
  const stakeholder = await getStakeholderFromSession();
  if (!stakeholder) {
    redirect("/auth/stakeholder/login");
  }

  const { exercisableGrants, pendingExercises, completedExercises } =
    await getExerciseData(stakeholder.id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Exercises</h1>
        <p className="text-muted-foreground">
          Exercise your vested stock options
        </p>
      </div>

      {/* Pending Exercises */}
      {pendingExercises.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              Pending Exercises
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grant</TableHead>
                  <TableHead className="text-right">Shares</TableHead>
                  <TableHead className="text-right">Exercise Cost</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingExercises.map((exercise) => (
                  <TableRow key={exercise.id}>
                    <TableCell className="font-medium">
                      {exercise.optionGrant.securityId}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(exercise.sharesExercised)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(Number(exercise.totalCost))}
                    </TableCell>
                    <TableCell>
                      <Badge variant="warning">Pending Approval</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Available to Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-green-500" />
            Available to Exercise
          </CardTitle>
        </CardHeader>
        <CardContent>
          {exercisableGrants.length === 0 ? (
            <p className="text-muted-foreground py-4 text-center">
              No options available to exercise at this time.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grant</TableHead>
                  <TableHead className="text-right">Exercisable</TableHead>
                  <TableHead className="text-right">Exercise Price</TableHead>
                  <TableHead className="text-right">Estimated Cost</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exercisableGrants.map((grant) => (
                  <TableRow key={grant.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{grant.securityId}</p>
                        <p className="text-sm text-muted-foreground">
                          {grant.company.name}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono text-green-600 font-medium">
                      {formatNumber(grant.progress.exercisableShares)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(Number(grant.exercisePrice))}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(
                        grant.progress.exercisableShares *
                          Number(grant.exercisePrice)
                      )}
                    </TableCell>
                    <TableCell>
                      <Link href={`/exercises/${grant.id}`}>
                        <Button size="sm">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Exercise
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Exercise History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5 text-blue-500" />
            Exercise History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {completedExercises.length === 0 ? (
            <p className="text-muted-foreground py-4 text-center">
              No exercise history yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate</TableHead>
                  <TableHead>From Grant</TableHead>
                  <TableHead className="text-right">Shares</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Cash Paid</TableHead>
                  <TableHead>Payment Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedExercises.map((exercise) => (
                  <TableRow key={exercise.id}>
                    <TableCell>
                      <Link
                        href={`/portfolio/certificate/${exercise.shareCertificate.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {exercise.shareCertificate.securityId}
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium">
                      {exercise.optionGrant.securityId}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(exercise.sharesExercised)}
                    </TableCell>
                    <TableCell>{formatDate(exercise.exerciseDate)}</TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(Number(exercise.totalCost))}
                    </TableCell>
                    <TableCell className="capitalize">
                      {exercise.paymentMethod.toLowerCase().replace("_", " ")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
