"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { formatNumber, formatPercent } from "@/lib/utils";

interface ChartDataItem {
  name: string;
  value: number;
  percent: number;
  color?: string;
}

interface OwnershipChartProps {
  data: ChartDataItem[];
  title?: string;
}

const COLORS = [
  "#3b82f6", // blue
  "#22c55e", // green
  "#f97316", // orange
  "#a855f7", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#eab308", // yellow
  "#64748b", // slate
  "#ef4444", // red
  "#06b6d4", // cyan
];

export function OwnershipChart({ data, title }: OwnershipChartProps) {
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || COLORS[index % COLORS.length],
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-white border rounded-lg shadow-lg p-3">
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatNumber(item.value)} shares
          </p>
          <p className="text-sm font-medium">{formatPercent(item.percent)}</p>
        </div>
      );
    }
    return null;
  };

  if (data.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <div className="h-[300px]">
      {title && <h4 className="text-sm font-medium text-center mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value: string) => (
              <span className="text-sm">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
