"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  businessHealthBreakdown,
  commandInsights,
  designers,
  getProjectsNeedingAttention,
  getTopOpportunities,
  getTopPerformer,
  healthScores,
  kpis,
  marketingSnapshotMetrics,
  marketingSources,
  revenueForecast,
  revenueTrend,
} from "@/data/mockData";
import {
  Activity,
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileText,
  Percent,
  Users,
} from "lucide-react";
import { CHART_MAGENTA, CHART_TEAL } from "@/lib/theme";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function OverviewPage() {
  const trend = revenueTrend.slice(-6).map((r) => r.revenue);
  const spark = (divisor: number) => trend.map((v) => Math.round(v / divisor));

  const revenueKpi = kpis.find((k) => k.label.includes("Revenue"));
  const leadsKpi = kpis.find((k) => k.label.includes("Leads"));
  const proposalsKpi = kpis.find((k) => k.label.includes("Proposals"));
  const salesKpi = kpis.find((k) => k.label.includes("Sales Closed"));
  const closeKpi = kpis.find((k) => k.label.includes("Close Rate"));

  const commandMetrics = [
    { label: "Revenue", value: revenueKpi?.value ?? "$247,500", change: revenueKpi?.change ?? "↑ 12%", icon: DollarSign, sparkData: trend, accent: true },
    { label: "Leads Generated", value: leadsKpi?.value ?? "126", change: leadsKpi?.change ?? "↑ 8%", icon: Users, sparkData: spark(2000) },
    { label: "Proposals", value: proposalsKpi?.value ?? "41", change: proposalsKpi?.change ?? "↑ 3%", icon: FileText, sparkData: spark(6000) },
    { label: "Sales Closed", value: salesKpi?.value ?? "19", change: salesKpi?.change ?? "↑ 7%", icon: CheckCircle, sparkData: spark(13000) },
    { label: "Close Rate", value: closeKpi?.value ?? "46%", change: closeKpi?.change ?? "↑ 4%", icon: Percent, sparkData: spark(5000) },
    { label: "Business Health", value: `${healthScores.business}/100`, change: "↑ 2pts", icon: Activity, sparkData: spark(3000) },
  ];

  const opportunities = getTopOpportunities();
  const attentionProjects = getProjectsNeedingAttention();
  const topPerformer = getTopPerformer();
  const topSource = [...marketingSources].sort((a, b) => b.revenue - a.revenue)[0];
  const currentRevenue = revenueTrend[5].revenue;

  return (
    <AppShell>
      <PageHeader
        welcome="Welcome back 👋"
        welcomeSubtitle="Here's your business overview for June 2026"
      />

      {/* KPI Command Strip */}
      <div className="grid-kpi mb-6 sm:mb-8">
        {commandMetrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      {/* Main Intelligence Row */}
      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-12 xl:gap-6 sm:mb-8">
        <GlassCard className="xl:col-span-4">
          <InsightCard insights={commandInsights} ctaHref="/marketing" />
        </GlassCard>

        <GlassCard className="xl:col-span-5">
          <SectionHeader
            title="Revenue Overview"
            subtitle="Monthly performance & forecast"
            action={
              <select className="input-glass w-auto py-1.5 text-xs">
                <option>Last 6 months</option>
                <option>Last 12 months</option>
              </select>
            }
          />
          <div className="mb-4 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Current Month</p>
              <p className="text-3xl font-semibold text-accent-light sm:text-4xl">
                ${currentRevenue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Forecast</p>
              <p className="text-xl font-semibold text-success">${revenueForecast.toLocaleString()}</p>
            </div>
          </div>
          <div className="h-[220px] min-h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%" minHeight={180}>
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CHART_TEAL} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={CHART_TEAL} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} width={48} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]} />
                <Area type="monotone" dataKey="revenue" stroke={CHART_TEAL} strokeWidth={2.5} fill="url(#revenueGrad)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="xl:col-span-3">
          <SectionHeader title="Business Health" subtitle="Performance breakdown" />
          <div className="h-[200px] min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%" minHeight={160}>
              <RadarChart data={businessHealthBreakdown} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="area" tick={{ fill: "rgba(240,237,232,0.5)", fontSize: 10 }} />
                <Radar dataKey="score" stroke={CHART_TEAL} fill={CHART_TEAL} fillOpacity={0.2} strokeWidth={2} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {businessHealthBreakdown.map((item) => (
              <div key={item.area} className="glass-inset px-3 py-2 text-center">
                <p className="text-[10px] uppercase tracking-wide text-muted">{item.area}</p>
                <p className="text-lg font-semibold text-accent-light">{item.score}</p>
              </div>
            ))}
          </div>
          <Link href="/reports" className="btn-ghost mt-4 flex w-full items-center justify-center gap-2 text-sm">
            View Full Report
            <ArrowRight size={14} />
          </Link>
        </GlassCard>
      </div>

      {/* Bottom Operational Row */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <GlassCard>
          <SectionHeader title="Top Opportunities" subtitle="High-value pipeline" />
          <div className="space-y-2">
            {opportunities.map((p) => (
              <div key={p.id} className="list-row">
                <div className="min-w-0">
                  <p className="truncate font-medium">{p.client}</p>
                  <p className="text-xs text-muted">{p.type}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-semibold text-accent-light">{p.valueDisplay}</p>
                  <span className="badge badge-accent mt-1">{p.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Projects Needing Attention" subtitle={`${attentionProjects.length} flagged`} />
          <div className="space-y-2">
            {attentionProjects.map((p) => (
              <div key={p.id} className="list-row">
                <div className="min-w-0">
                  <p className="truncate font-medium">{p.client}</p>
                  <p className="text-xs text-muted">{p.stage}</p>
                </div>
                <StatusBadge status={p.status} />
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Team Performance" subtitle="Top performer this month" />
          {topPerformer && (
            <div className="flex flex-col items-center py-2 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={CHART_TEAL}
                    strokeWidth="8"
                    strokeDasharray={`${topPerformer.closeRate * 2.64} 264`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xl font-semibold text-accent-light">{topPerformer.closeRate}%</span>
              </div>
              <p className="mt-3 font-medium">{topPerformer.name}</p>
              <p className="text-sm text-muted">{topPerformer.sales} deals closed · ${Math.round(topPerformer.revenue / 1000)}K revenue</p>
            </div>
          )}
          <div className="mt-4 space-y-2 border-t border-glassBorder pt-4">
            {designers.slice(0, 3).map((d, i) => (
              <div key={d.name} className="flex items-center justify-between text-sm">
                <span className="text-muted">{i + 1}. {d.name}</span>
                <span className="font-medium text-accent-light">{d.revenue}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Marketing Snapshot" subtitle={`Top channel: ${topSource.source}`} />
          <div className="space-y-3">
            <div className="glass-inset flex items-center justify-between px-4 py-3">
              <span className="text-sm text-muted">Digital Channel Leads</span>
              <span className="font-semibold">{marketingSnapshotMetrics.digitalLeads}</span>
            </div>
            <div className="glass-inset flex items-center justify-between px-4 py-3">
              <span className="text-sm text-muted">Google Ads Leads</span>
              <span className="font-semibold text-accent-light">{marketingSnapshotMetrics.googleAdsLeads}</span>
            </div>
            <div className="glass-inset flex items-center justify-between px-4 py-3">
              <span className="text-sm text-muted">Lead-to-Consultation</span>
              <span className="font-semibold text-success">{marketingSnapshotMetrics.consultationRate}%</span>
            </div>
            <div className="glass-inset flex items-center justify-between px-4 py-3">
              <span className="text-sm text-muted">Social Leads</span>
              <span className="font-semibold">{marketingSnapshotMetrics.socialLeads}</span>
            </div>
          </div>
          <div className="mt-3 h-16 opacity-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketingSources.slice(0, 4).map((s) => ({ name: s.source.slice(0, 3), leads: s.leads }))}>
                <Line type="monotone" dataKey="leads" stroke={CHART_MAGENTA} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
