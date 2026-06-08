import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function InsightCard({
  insights,
  title = "AI Business Advisor",
  ctaLabel = "View All Insights",
  ctaHref = "/marketing",
}: {
  insights: string[];
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15">
          <Sparkles size={16} className="text-gold-light" />
        </div>
        <h3 className="font-serif text-lg sm:text-xl">{title}</h3>
      </div>
      <ul className="flex-1 space-y-3">
        {insights.map((text, i) => (
          <li key={i} className="glass-inset flex gap-3 px-4 py-3 text-sm text-secondary shadow-inset">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {text}
          </li>
        ))}
      </ul>
      <Link href={ctaHref} className="btn-gold mt-5 inline-flex w-fit items-center gap-2 text-sm">
        {ctaLabel}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
