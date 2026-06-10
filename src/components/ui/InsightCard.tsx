import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function InsightCard({
  insights,
  ctaHref,
  ctaLabel = "View Insights",
  title = "AI Command Insights",
}: {
  insights: string[];
  ctaHref: string;
  ctaLabel?: string;
  title?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
          <Sparkles size={16} className="text-accent-light" />
        </div>
        <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
      </div>
      <ul className="space-y-3">
        {insights.map((insight) => (
          <li key={insight} className="flex items-start gap-2 text-sm text-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {insight}
          </li>
        ))}
      </ul>
      <Link href={ctaHref} className="btn-primary mt-5 inline-flex w-fit items-center gap-2 text-sm">
        {ctaLabel}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
