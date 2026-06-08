"use client";

import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { healthScores, marketingRecommendations, marketingSources, revenueTrend } from "@/data/mockData";
import { DollarSign, Megaphone, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const COLORS = ["#d4af37", "#2dd4a0", "#fbbf24", "#818cf8", "#fb7185", "#a78bfa"];
const CHART_GOLD = "#d4af37";

export default function MarketingPage() {
  const totalSpend = marketingSources.reduce((sum, s) => sum + s.spend, 0);
  const totalLeads = marketingSources.reduce((sum, s) => sum + s.leads, 0);
  const totalConsultations = marketingSources.reduce((sum, s) => sum + s.consultations, 0);
  const totalRevenue = marketingSources.reduce((sum, s) => sum + s.revenue, 0);
  const roi = totalSpend > 0 ? (totalRevenue / totalSpend).toFixed(1) : "0";
  const costPerLead = totalLeads > 0 ? Math.round(totalSpend / totalLeads) : 0;
  const trend = revenueTrend.slice(-6).map((r) => r.revenue);
  const spark = (d: number) => trend.map((v) => Math.round(v / d));

  const leadDistribution = marketingSources.map((s) => ({ name: s.source, value: s.leads }));
  const roiData = marketingSources.map((s) => ({
    source: s.source,
    spend: s.spend,
    revenue: s.revenue,
    roi: s.spend > 0 ? Math.round(s.revenue / s.spend) : 0,
  }));

  const growthInsights = marketingRecommendations.map((r) => r.text);

  return (
    <AppShell>
      <PageHeader
        title="Growth"
        description="Understand which marketing investments are creating real revenue."
      />

      <div className="grid-kpi mb-6 sm:mb-8">
        <MetricCard label="Marketing Spend" value={`$${totalSpend.toLocaleString()}`} change="↑ 4%" icon={DollarSign} sparkData={spark(8000)} />
        <MetricCard label="Leads" value={String(totalLeads)} change="↑ 8%" icon={Users} sparkData={spark(2000)} />
        <MetricCard label="Cost Per Lead" value={`$${costPerLead}`} change="↓ 3%" icon={Target} sparkData={spark(10000)} />
        <MetricCard label="Consultations" value={String(totalConsultations)} change="↑ 5%" icon={Megaphone} sparkData={spark(3500)} />
        <MetricCard label="Revenue" value={`$${totalRevenue.toLocaleString()}`} change="↑ 12%" icon={TrendingUp} sparkData={trend} accent />
        <MetricCard label="ROI" value={`${roi}x`} change="↑ 6%" icon={Zap} sparkData={spark(5000)} />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-12 xl:gap-6 sm:mb-8">
        <GlassCard className="xl:col-span-4">
          <InsightCard insights={growthInsights} title="Growth Insights" ctaLabel="View Recommendations" ctaHref="/marketing" />
        </GlassCard>

        <GlassCard className="xl:col-span-5">
          <SectionHeader title="Revenue By Source" subtitle="Channel performance" />
          <div className="h-[280px] min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%" minHeight={200}>
              <BarChart data={marketingSources}>
                <XAxis dataKey="source" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} width={44} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]} />
                <Bar dataKey="revenue" fill={CHART_GOLD} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="xl:col-span-3">
          <SectionHeader title="Marketing Health" subtitle={`Score: ${healthScores.marketing}/100`} />
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leadDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={2}>
                  {leadDistribution.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {leadDistribution.map((d, i) => (
              <span key={d.name} className="flex items-center gap-1 text-[10px] text-muted">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                {d.name} ({d.value})
              </span>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6">
        <GlassCard>
          <SectionHeader title="ROI Analysis" />
          <div className="table-wrap">
            <table className="table-exec min-w-[480px]">
              <thead>
                <tr>
                  <th className="p-3 text-muted">Source</th>
                  <th className="p-3 text-muted">Spend</th>
                  <th className="p-3 text-muted">Revenue</th>
                  <th className="p-3 text-muted">ROI</th>
                </tr>
              </thead>
              <tbody>
                {roiData.map((r) => (
                  <tr key={r.source}>
                    <td className="p-3 font-medium">{r.source}</td>
                    <td className="p-3 text-muted">${r.spend.toLocaleString()}</td>
                    <td className="p-3 text-muted">${r.revenue.toLocaleString()}</td>
                    <td className="p-3 font-semibold text-gold-light">{r.roi}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Source Conversion" />
          <div className="space-y-3">
            {marketingSources.map((s) => (
              <div key={s.source} className="list-row">
                <div>
                  <p className="font-medium">{s.source}</p>
                  <p className="text-xs text-muted">{s.leads} leads · {s.consultations} consults · {s.sales} sales</p>
                </div>
                <span className="badge badge-gold">{s.sales > 0 ? `${Math.round((s.sales / s.leads) * 100)}%` : "—"}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
