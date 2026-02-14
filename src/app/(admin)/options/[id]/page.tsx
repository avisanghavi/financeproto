import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatNumber, formatDate, formatPercent } from "@/lib/utils";
import { getVestingDescription } from "@/lib/calculations";
import { getVestingProgress, getVestingPeriodsWithStatus } from "@/lib/vesting";
import { VestingProgressBar } from "@/components/vesting-progress-bar";
import {
  ArrowLeft,
  Edit,
  User,
  Building2,
  Calendar,
  Receipt,
  Clock,
  PlayCircle,
} from "lucide-react";

async function getOptionGrant(id: string) {
  const grant = await prisma.optionGrant.findUnique({
    where: { id },
    include: {
      stakeholder: true,
      equityPlan: true,
      company: true,
      vestingSchedule: {
        include: {
          vestingPeriods: {
            orderBy: { periodNumber: "asc" },
          },
        },
      },
      exercises: {
        include: {
          shareCertificate: true,
        },
        orderBy: { exerciseDate: "desc" },
      },
      exercisePeriods: true,
    },
  });
  return grant;
}

export default async function OptionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const grant = await getOptionGrant(id);

  if (!grant) {
    notFound();
  }

  const progress = await getVestingProgress(grant.id);
  const vestingPeriods = await getVestingPeriodsWithStatus(grant.id);
  const exercised = grant.exercises.reduce((sum, ex) => sum + ex.sharesExercised, 0);
  const remaining = grant.originalQuantity - exercised - grant.expiredQuantity;

  const vestingDesc = grant.vestingSchedule
    ? getVestingDescription({
        cliffMonths: grant.vestingSchedule.cliffMonths,
        cliffPercentage: grant.vestingSchedule.cliffPercentage,
        totalPeriods: grant.vestingSchedule.totalPeriods,
        periodUnit: grant.vestingSchedule.periodUnit,
      })
    : "No vesting schedule";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/options">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {grant.securityId}
              </h1>
              <Badge
                variant={
                  grant.status === "ACTIVE" || grant.status === "PARTIALLY_EXERCISED"
                    ? "active"
                    : "secondary"
                }
              >
                {grant.status.toLowerCase().replace("_", " ")}
              </Badge>
              <Badge variant={grant.type === "ISO" ? "iso" : "nso"}>
                {grant.type}
              </Badge>
            </div>
            <p className="text-muted-foreground">Stock Option Grant</p>
          </div>
        </div>
        <div className="flex gap-2">
          {progress.exercisableShares > 0 && (
            <Link href={`/options/${grant.id}/exercise`}>
              <Button>
                <PlayCircle className="mr-2 h-4 w-4" />
                Exercise Options
              </Button>
            </Link>
          )}
          <Link href={`/options/${grant.id}/edit`}>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="exercise-periods">Exercise Periods</TabsTrigger>
          <TabsTrigger value="exercises">Exercises ({grant.exercises.length})</TabsTrigger>
          <TabsTrigger value="vesting">Vesting Schedule</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Optionholder Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Option Grant Holder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Name</label>
                  <p className="font-medium">
                    <Link
                      href={`/stakeholders/${grant.stakeholder.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {grant.stakeholder.name}
                    </Link>
                  </p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <p className="font-medium">{grant.stakeholder.email}</p>
                </div>
                {grant.grantReason && (
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Grant Reason
                    </label>
                    <p className="font-medium">{grant.grantReason}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quantities Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5" />
                  Quantities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Original</label>
                    <p className="font-medium font-mono">
                      {formatNumber(grant.originalQuantity)}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Exercised</label>
                    <p className="font-medium font-mono">{formatNumber(exercised)}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Remaining</label>
                    <p className="font-medium font-mono">{formatNumber(remaining)}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Expired</label>
                    <p className="font-medium font-mono">
                      {formatNumber(grant.expiredQuantity)}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-muted-foreground">
                      Exercise Price
                    </label>
                    <p className="font-medium font-mono">
                      {formatCurrency(Number(grant.exercisePrice))}
                    </p>
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
                  <p className="font-medium">{grant.company.name}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Equity Plan</label>
                  <p className="font-medium">{grant.equityPlan.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Grant Date</label>
                    <p className="font-medium">{formatDate(grant.grantDate)}</p>
                  </div>
                  {grant.boardApprovalDate && (
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Board Approval
                      </label>
                      <p className="font-medium">
                        {formatDate(grant.boardApprovalDate)}
                      </p>
                    </div>
                  )}
                  {grant.terminationDate && (
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Terminated
                      </label>
                      <p className="font-medium text-red-600">
                        {formatDate(grant.terminationDate)}
                      </p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Expiration Date
                    </label>
                    <p className="font-medium">{formatDate(grant.expirationDate)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vesting Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Vesting Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <VestingProgressBar
                  total={progress.totalShares}
                  vested={progress.vestedShares}
                  exercised={progress.exercisedShares}
                />
                <div className="text-sm">
                  <p>
                    <span className="font-medium">
                      {formatNumber(progress.vestedShares)}
                    </span>{" "}
                    of{" "}
                    <span className="font-medium">
                      {formatNumber(progress.totalShares)}
                    </span>{" "}
                    options vested ({formatPercent(progress.vestedPercent)})
                  </p>
                  {progress.exercisableShares > 0 && (
                    <p className="text-green-600 mt-1">
                      <span className="font-medium">
                        {formatNumber(progress.exercisableShares)}
                      </span>{" "}
                      options available to exercise
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{vestingDesc}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Exercise Periods Tab */}
        <TabsContent value="exercise-periods">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Post-Termination Exercise Periods
              </CardTitle>
            </CardHeader>
            <CardContent>
              {grant.exercisePeriods.length === 0 ? (
                <p className="text-muted-foreground">
                  No exercise periods configured
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Termination Type</TableHead>
                      <TableHead>Exercise Window</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {grant.exercisePeriods.map((period) => (
                      <TableRow key={period.id}>
                        <TableCell className="capitalize">
                          {period.terminationType.toLowerCase().replace("_", " ")}
                        </TableCell>
                        <TableCell>
                          {period.duration === 0
                            ? "Immediate expiration"
                            : `${period.duration} ${period.durationUnit.toLowerCase()}`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exercises Tab */}
        <TabsContent value="exercises">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Exercise History</CardTitle>
              {progress.exercisableShares > 0 && (
                <Link href={`/options/${grant.id}/exercise`}>
                  <Button size="sm">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Exercise Options
                  </Button>
                </Link>
              )}
            </CardHeader>
            <CardContent>
              {grant.exercises.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    No exercises performed yet
                  </p>
                  {progress.exercisableShares > 0 && (
                    <Link href={`/options/${grant.id}/exercise`}>
                      <Button>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Exercise Options
                      </Button>
                    </Link>
                  )}
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Certificate</TableHead>
                      <TableHead className="text-right">Shares</TableHead>
                      <TableHead className="text-right">Exercise Price</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Total Cost</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {grant.exercises.map((exercise) => (
                      <TableRow key={exercise.id}>
                        <TableCell>
                          <Link
                            href={`/certificates/${exercise.shareCertificate.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            {exercise.shareCertificate.securityId}
                          </Link>
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {formatNumber(exercise.sharesExercised)}
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          {formatCurrency(Number(exercise.exercisePrice))}
                        </TableCell>
                        <TableCell>{formatDate(exercise.exerciseDate)}</TableCell>
                        <TableCell className="text-right font-mono">
                          {formatCurrency(Number(exercise.totalCost))}
                        </TableCell>
                        <TableCell className="capitalize">
                          {exercise.paymentMethod.toLowerCase().replace("_", " ")}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              exercise.status === "COMPLETED"
                                ? "success"
                                : exercise.status === "PENDING"
                                ? "warning"
                                : "secondary"
                            }
                          >
                            {exercise.status.toLowerCase()}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vesting Schedule Tab */}
        <TabsContent value="vesting" className="space-y-6">
          {grant.vestingSchedule ? (
            <>
              {/* Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {grant.vestingSchedule.scheduleName && (
                      <div>
                        <label className="text-sm text-muted-foreground">Name</label>
                        <p className="font-medium">
                          {grant.vestingSchedule.scheduleName}
                        </p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Vesting Start
                      </label>
                      <p className="font-medium">
                        {formatDate(grant.vestingSchedule.vestingStartDate)}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Cliff</label>
                      <p className="font-medium">
                        {grant.vestingSchedule.cliffMonths} months (
                        {formatPercent(Number(grant.vestingSchedule.cliffPercentage))})
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Total Periods
                      </label>
                      <p className="font-medium">
                        {grant.vestingSchedule.totalPeriods}{" "}
                        {grant.vestingSchedule.periodUnit.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{vestingDesc}</p>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Vesting Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <VestingProgressBar
                    total={progress.totalShares}
                    vested={progress.vestedShares}
                    exercised={progress.exercisedShares}
                  />
                </CardContent>
              </Card>

              {/* Period Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Vesting Periods</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Period</TableHead>
                        <TableHead>Vesting Date</TableHead>
                        <TableHead className="text-right">Options Vested</TableHead>
                        <TableHead className="text-right">Cumulative</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vestingPeriods.map((period) => (
                        <TableRow key={period.periodNumber}>
                          <TableCell>
                            {period.periodNumber === 0 ? "Cliff" : period.periodNumber}
                          </TableCell>
                          <TableCell>{formatDate(period.vestingDate)}</TableCell>
                          <TableCell className="text-right font-mono">
                            {formatNumber(period.sharesVested)}
                          </TableCell>
                          <TableCell className="text-right font-mono">
                            {formatNumber(period.cumulativeVested)}
                          </TableCell>
                          <TableCell>
                            {period.isVested ? (
                              <Badge variant="success">Vested</Badge>
                            ) : (
                              <Badge variant="secondary">Pending</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  No vesting schedule configured for this grant
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
