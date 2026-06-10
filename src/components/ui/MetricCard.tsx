import { LucideIcon } from "lucide-react";
import { SparklineChart } from "./SparklineChart";
import { CHART_MAGENTA, CHART_TEAL } from "@/lib/theme";

export function MetricCard({
  label,
  value,
  change,
  icon: Icon,
  sparkData,
  accent = false,
}: {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  sparkData?: number[];
  accent?: boolean;
}) {
  const isPositive = change.includes("↑");
  const isNegative = change.includes("↓");

  return (
    <div
      className={`glass-card group min-w-[200px] shrink-0 p-4 transition-all duration-250 hover:-translate-y-1 sm:min-w-0 sm:p-5 ${
        accent ? "glass-card-accent" : ""
      }`}
    >
      <div className="relative z-[1] flex items-start justify-between gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-inset ${
            accent
              ? "bg-gradient-to-br from-accent/30 to-accent/10 text-accent-bright ring-1 ring-accent/30"
              : "bg-gradient-to-br from-white/8 to-white/3 text-accent-light ring-1 ring-white/8"
          }`}
        >
          <Icon size={18} strokeWidth={1.75} />
        </div>
        {sparkData && sparkData.length > 1 && (
          <div className="h-9 w-20 opacity-80 transition-opacity group-hover:opacity-100">
            <SparklineChart data={sparkData} color={accent ? CHART_TEAL : CHART_MAGENTA} />
          </div>
        )}
      </div>
      <p className="relative z-[1] mt-3 text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
      <p className={`relative z-[1] mt-1 text-2xl font-bold tracking-tight sm:text-3xl ${accent ? "text-accent-bright" : "text-primary"}`}>
        {value}
      </p>
      <p className={`relative z-[1] mt-1.5 text-xs font-semibold ${isPositive ? "text-success" : isNegative ? "text-attention" : "text-muted"}`}>
        {change} vs last month
      </p>
    </div>
  );
}
