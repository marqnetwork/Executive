"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

const CHART_GOLD = "#d4af37";

export function SparklineChart({
  data,
  color = CHART_GOLD,
  height = 36,
}: {
  data: number[];
  color?: string;
  height?: number;
}) {
  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <div className="w-full drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]" style={{ height }}>
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
