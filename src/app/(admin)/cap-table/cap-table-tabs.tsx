"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OwnershipChart } from "@/components/charts/ownership-chart";
import { formatNumber, formatPercent, formatCurrency } from "@/lib/utils";
import { ChevronDown, ChevronRight, Users, Layers } from "lucide-react";
import type { StakeholderOwnership, ShareClassOwnership } from "@/lib/calculations";

interface CapTableTabsProps {
  stakeholderOwnership: StakeholderOwnership[];
  classOwnership: ShareClassOwnership[];
  stakeholderChartData: Array<{ name: string; value: number; percent: number }>;
  classChartData: Array<{ name: string; value: number; percent: number; color?: string }>;
  fullyDilutedShares: number;
}

export function CapTableTabs({
  stakeholderOwnership,
  classOwnership,
  stakeholderChartData,
  classChartData,
  fullyDilutedShares,
}: CapTableTabsProps) {
  const [expandedStakeholders, setExpandedStakeholders] = useState<Set<string>>(
    new Set()
  );
  const [expandedClasses, setExpandedClasses] = useState<Set<string>>(new Set());

  const toggleStakeholder = (id: string) => {
    const newExpanded = new Set(expandedStakeholders);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedStakeholders(newExpanded);
  };

  const toggleClass = (id: string) => {
    const newExpanded = new Set(expandedClasses);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedClasses(newExpanded);
  };

  const getTypeVariant = (type: string) => {
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
  };

  // Sort stakeholders by fully diluted shares descending
  const sortedStakeholders = [...stakeholderOwnership].sort(
    (a, b) => b.fullyDilutedShares - a.fullyDilutedShares
  );

  // Sort classes by outstanding shares descending
  const sortedClasses = [...classOwnership].sort(
    (a, b) => b.outstandingShares - a.outstandingShares
  );

  return (
    <Tabs defaultValue="stakeholder">
      <TabsList className="mb-4">
        <TabsTrigger value="stakeholder" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          By Stakeholder
        </TabsTrigger>
        <TabsTrigger value="class" className="flex items-center gap-2">
          <Layers className="h-4 w-4" />
          By Share Class
        </TabsTrigger>
      </TabsList>

      {/* By Stakeholder View */}
      <TabsContent value="stakeholder" className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ownership Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <OwnershipChart
                data={stakeholderChartData}
                title="Fully Diluted Ownership"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Capital Invested</CardTitle>
            </CardHeader>
            <CardContent>
              <OwnershipChart
                data={stakeholderOwnership
                  .filter((s) => s.totalInvested > 0)
                  .map((s) => ({
                    name: s.stakeholderName,
                    value: s.totalInvested,
                    percent:
                      s.totalInvested /
                      stakeholderOwnership.reduce(
                        (sum, x) => sum + x.totalInvested,
                        0
                      ),
                  }))}
                title="Investment by Stakeholder"
              />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stakeholder Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30px]"></TableHead>
                  <TableHead>Stakeholder</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Outstanding</TableHead>
                  <TableHead className="text-right">Fully Diluted</TableHead>
                  <TableHead className="text-right">Outstanding %</TableHead>
                  <TableHead className="text-right">Fully Diluted %</TableHead>
                  <TableHead className="text-right">Invested</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedStakeholders.map((stakeholder) => (
                  <TableRow
                    key={stakeholder.stakeholderId}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => toggleStakeholder(stakeholder.stakeholderId)}
                  >
                    <TableCell>
                      {expandedStakeholders.has(stakeholder.stakeholderId) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/stakeholders/${stakeholder.stakeholderId}`}
                        className="font-medium text-blue-600 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {stakeholder.stakeholderName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getTypeVariant(stakeholder.stakeholderType)}>
                        {stakeholder.stakeholderType.toLowerCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(stakeholder.outstandingShares)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(stakeholder.fullyDilutedShares)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatPercent(stakeholder.outstandingPercent)}
                    </TableCell>
                    <TableCell className="text-right font-mono font-medium">
                      {formatPercent(stakeholder.fullyDilutedPercent)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(stakeholder.totalInvested)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {/* By Share Class View */}
      <TabsContent value="class" className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ownership by Security Type</CardTitle>
            </CardHeader>
            <CardContent>
              <OwnershipChart data={classChartData} title="Fully Diluted Breakdown" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Share Class Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sortedClasses.map((cls) => (
                <div
                  key={cls.shareClassId}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        cls.shareClassType === "COMMON"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    />
                    <span className="font-medium">{cls.shareClassName}</span>
                    <Badge
                      variant={
                        cls.shareClassType === "COMMON" ? "common" : "preferred"
                      }
                    >
                      {cls.shareClassType.toLowerCase()}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-mono">
                      {formatNumber(cls.outstandingShares)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatPercent(cls.outstandingPercent)}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Share Class Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30px]"></TableHead>
                  <TableHead>Share Class</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Outstanding</TableHead>
                  <TableHead className="text-right">Fully Diluted</TableHead>
                  <TableHead className="text-right">Outstanding %</TableHead>
                  <TableHead className="text-right">Fully Diluted %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedClasses.map((cls) => (
                  <TableRow
                    key={cls.shareClassId}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => toggleClass(cls.shareClassId)}
                  >
                    <TableCell>
                      {expandedClasses.has(cls.shareClassId) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">
                      {cls.shareClassName}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          cls.shareClassType === "COMMON" ? "common" : "preferred"
                        }
                      >
                        {cls.shareClassType.toLowerCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(cls.outstandingShares)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatNumber(cls.fullyDilutedShares)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatPercent(cls.outstandingPercent)}
                    </TableCell>
                    <TableCell className="text-right font-mono font-medium">
                      {formatPercent(cls.fullyDilutedPercent)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
