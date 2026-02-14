"use client";

import { cn } from "@/lib/utils";

interface VestingProgressBarProps {
  total: number;
  vested: number;
  exercised: number;
  showLegend?: boolean;
  className?: string;
}

export function VestingProgressBar({
  total,
  vested,
  exercised,
  showLegend = true,
  className,
}: VestingProgressBarProps) {
  const unvested = total - vested;
  const exercisable = vested - exercised;

  const exercisedPercent = total > 0 ? (exercised / total) * 100 : 0;
  const exercisablePercent = total > 0 ? (exercisable / total) * 100 : 0;
  const unvestedPercent = total > 0 ? (unvested / total) * 100 : 0;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="h-3 rounded-full overflow-hidden bg-gray-200 flex">
        {exercisedPercent > 0 && (
          <div
            className="bg-blue-500 transition-all"
            style={{ width: `${exercisedPercent}%` }}
            title={`Exercised: ${exercised.toLocaleString()}`}
          />
        )}
        {exercisablePercent > 0 && (
          <div
            className="bg-green-500 transition-all"
            style={{ width: `${exercisablePercent}%` }}
            title={`Exercisable: ${exercisable.toLocaleString()}`}
          />
        )}
        {unvestedPercent > 0 && (
          <div
            className="bg-gray-300 transition-all"
            style={{ width: `${unvestedPercent}%` }}
            title={`Unvested: ${unvested.toLocaleString()}`}
          />
        )}
      </div>
      {showLegend && (
        <div className="flex gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Exercised ({exercised.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span>Vested ({exercisable.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span>Unvested ({unvested.toLocaleString()})</span>
          </div>
        </div>
      )}
    </div>
  );
}
