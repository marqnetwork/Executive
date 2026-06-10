"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { CHART_TEAL } from "@/lib/theme";

export function SparklineChart({
  data,
  color = CHART_TEAL,
  height = 36,
}: {
  data: number[];
  color?: string;
  height?: number;
}) {
  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <div className="w-full drop-shadow-[0_0_6px_rgba(0,242,234,0.4)]" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
