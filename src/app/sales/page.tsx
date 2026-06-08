"use client";

import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  funnelConversions,
  funnelStages,
  healthScores,
  lostOpportunities,
  marketingSources,
  revenueTrend,
  salesInsights,
} from "@/data/mockData";
import { DollarSign, Users } from "lucide-react";

const funnelRevenue = 247500;

export default function SalesPage() {
  const trend = revenueTrend.slice(-6).map((r) => r.revenue);
  const spark = (d: number) => trend.map((v) => Math.round(v / d));
  const insightTexts = salesInsights.map((s) => s.text);

  return (
    <AppShell>
      <PageHeader
        title="Revenue"
        description="Track lead movement from first inquiry to closed sale."
      />

      <div className="grid-kpi mb-6 sm:mb-8">
        {funnelStages.map((stage) => (
          <MetricCard
            key={stage.stage}
            label={stage.stage}
            value={String(stage.count)}
            change={stage.stage !== "Leads" ? `${stage.conversion}% conv.` : "↑ 8%"}
            icon={stage.stage === "Sales" ? DollarSign : Users}
            sparkData={spark(3000 + stage.count * 100)}
          />
        ))}
        <MetricCard label="Revenue" value={`$${Math.round(funnelRevenue / 1000)}K`} change="↑ 12%" icon={DollarSign} sparkData={trend} accent />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-6 sm:mb-8">
        <GlassCard className="lg:col-span-2">
          <SectionHeader title="Funnel Visualization" subtitle="Pipeline flow this month" />
          <div className="space-y-2">
            {funnelStages.map((stage, idx) => (
              <div key={stage.stage}>
                <div
                  className="glossy-funnel-stage mx-auto rounded-xl py-3 text-center transition-all"
                  style={{ width: `${100 - idx * 14}%`, minWidth: "45%" }}
                >
                  <p className="text-xs font-medium opacity-80">{stage.stage}</p>
                  <p className="text-xl font-semibold">{stage.count}</p>
                </div>
                {idx < funnelStages.length - 1 && <p className="py-0.5 text-center text-[10px] text-muted">↓</p>}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Funnel Health" subtitle={`${healthScores.funnel}/100`} />
          <div className="space-y-4">
            {funnelConversions.map((c) => (
              <div key={c.from}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">{c.from} → {c.to}</span>
                  <strong className={c.rate < 50 ? "text-warning" : "text-success"}>{c.rate}%</strong>
                </div>
                <div className="progress-track mt-1.5">
                  <div className={`progress-fill ${c.rate < 50 ? "bg-warning" : "bg-success"}`} style={{ width: `${c.rate}%` }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6 sm:mb-8">
        <GlassCard>
          <SectionHeader title="Lead Source Performance" />
          <div className="space-y-2">
            {marketingSources.map((s) => (
              <div key={s.source} className="list-row">
                <div>
                  <p className="font-medium">{s.source}</p>
                  <p className="text-xs text-muted">{s.leads} leads · {s.sales} sales</p>
                </div>
                <span className="font-semibold text-gold-light">${Math.round(s.revenue / 1000)}K</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Lost Opportunities" subtitle="Recovery focus areas" />
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-inset p-4">
              <p className="text-xs text-muted">Lost Proposals</p>
              <p className="mt-1 text-2xl font-semibold text-attention">{lostOpportunities.lostProposals}</p>
            </div>
            <div className="glass-inset p-4">
              <p className="text-xs text-muted">Lost Revenue</p>
              <p className="mt-1 text-2xl font-semibold text-gold-light">${Math.round(lostOpportunities.lostRevenue / 1000)}K</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Top Reasons</p>
            <ul className="mt-2 space-y-1.5">
              {lostOpportunities.topReasons.map((r) => (
                <li key={r} className="glass-inset px-3 py-2 text-sm text-muted">{r}</li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <InsightCard insights={insightTexts} title="Revenue Insights" ctaLabel="View Growth Dashboard" ctaHref="/marketing" />
      </GlassCard>
    </AppShell>
  );
}
