"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { healthScores, revenueTrend, successionMetrics, teamMembers, TeamMember } from "@/data/mockData";
import { AlertCircle, DollarSign, Percent, Target, Users, X } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CHART_TEAL } from "@/lib/theme";

const designers = teamMembers.filter((m) => m.role === "Designer");
const totalRevenue = designers.reduce((s, m) => s + m.revenue, 0);
const avgCloseRate = Math.round(designers.reduce((s, m) => s + m.closeRate, 0) / designers.length);
const totalProjects = designers.reduce((s, m) => s + m.activeProjects, 0);

export default function TeamPage() {
  const [profile, setProfile] = useState<TeamMember | null>(null);
  const leaderboard = [...designers].sort((a, b) => b.revenue - a.revenue);
  const revenueChart = leaderboard.map((d) => ({ name: d.name.split(" ")[0], revenue: d.revenue }));
  const trend = revenueTrend.slice(-6).map((r) => r.revenue);
  const spark = (d: number) => trend.map((v) => Math.round(v / d));

  return (
    <AppShell>
      <PageHeader
        title="People"
        description="Performance tracking, capacity management, and business independence."
      />

      <div className="grid-kpi mb-6 sm:mb-8">
        <MetricCard label="Team Members" value={String(teamMembers.length)} change="Active" icon={Users} sparkData={spark(5000)} />
        <MetricCard label="Designers" value={String(designers.length)} change="↑ 0%" icon={Target} sparkData={spark(6000)} />
        <MetricCard label="Revenue" value={`$${Math.round(totalRevenue / 1000)}K`} change="↑ 12%" icon={DollarSign} sparkData={trend} accent />
        <MetricCard label="Projects" value={String(totalProjects)} change="↑ 4%" icon={Target} sparkData={spark(8000)} />
        <MetricCard label="Close Rate" value={`${avgCloseRate}%`} change="↑ 3%" icon={Percent} sparkData={spark(7000)} />
        <MetricCard label="Team Health" value={`${healthScores.team}/100`} change="↑ 2pts" icon={Users} sparkData={spark(3500)} />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6 sm:mb-8">
        <GlassCard>
          <SectionHeader title="Leaderboard" subtitle="Revenue rankings" />
          <div className="space-y-3">
            {leaderboard.map((member, idx) => (
              <div key={member.id} className="list-row !py-3">
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${idx === 0 ? "bg-accent/20 text-accent-light" : "glass-inset"}`}>
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-muted">{member.closeRate}% close · {member.activeProjects} projects</p>
                  </div>
                </div>
                <p className="font-semibold text-accent-light">${Math.round(member.revenue / 1000)}K</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Revenue Rankings" />
          <div className="h-[240px] min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%" minHeight={200}>
              <BarChart data={revenueChart}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} width={44} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]} />
                <Bar dataKey="revenue" fill={CHART_TEAL} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mb-6">
        <SectionHeader title="Capacity Management" subtitle="Designer & operations workload" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {teamMembers.filter((m) => m.role === "Designer" || m.role === "Operations").map((m) => (
            <div key={m.id} className="glass-inset p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{m.name}</span>
                <span className={m.capacity > 85 ? "text-attention" : m.capacity > 70 ? "text-warning" : "text-success"}>
                  {m.capacity}%
                </span>
              </div>
              <div className="progress-track mt-2">
                <div className={`progress-fill ${m.capacity > 85 ? "bg-attention" : m.capacity > 70 ? "bg-warning" : "bg-success"}`} style={{ width: `${m.capacity}%` }} />
              </div>
              <p className="mt-1 text-xs text-muted">{m.activeProjects} active projects</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mb-6">
        <SectionHeader title="Coaching Alerts" />
        <div className="space-y-2">
          {teamMembers.filter((m) => m.coachingAlert).map((m) => (
            <div key={m.id} className="flex items-start gap-3 rounded-xl border border-warning/20 bg-warning/5 px-4 py-3 text-sm">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-warning" />
              <div>
                <p className="font-medium">{m.name}</p>
                <p className="text-muted">{m.coachingAlert}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mb-6">
        <SectionHeader title="Succession Tracker" subtitle="Business independence from owner involvement" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="glass-inset p-4">
            <p className="text-xs text-muted">Revenue Without Owner</p>
            <p className="mt-1 text-2xl font-semibold text-accent-light">${Math.round(successionMetrics.revenueWithoutOwner / 1000)}K</p>
            <p className="text-xs text-muted">{successionMetrics.revenueWithoutOwnerPct}% of total</p>
          </div>
          <div className="glass-inset p-4">
            <p className="text-xs text-muted">Projects Without Owner</p>
            <p className="mt-1 text-2xl font-semibold">{successionMetrics.projectsWithoutOwner}</p>
            <p className="text-xs text-muted">{successionMetrics.projectsWithoutOwnerPct}% of active</p>
          </div>
          <div className="glass-inset p-4">
            <p className="text-xs text-muted">Designer Autonomy</p>
            <p className="mt-1 text-2xl font-semibold text-success">{successionMetrics.designerAutonomy}%</p>
          </div>
          <div className="glass-health p-4">
            <p className="text-xs text-muted">Independence Score</p>
            <p className="mt-1 text-3xl font-semibold text-accent-light">{successionMetrics.businessIndependenceScore}</p>
            <p className="text-xs text-muted">out of 100</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <SectionHeader title="Team Directory" />
        <div className="space-y-2">
          {teamMembers.map((m) => (
            <div key={m.id} className="list-row">
              <div>
                <p className="font-medium">{m.name}</p>
                <p className="text-xs text-muted">{m.role} · {m.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`badge ${m.status === "Active" ? "badge-success" : "badge-warning"}`}>{m.status}</span>
                <button onClick={() => setProfile(m)} className="text-sm text-accent-light hover:underline">Profile</button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {profile && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="glossy-overlay absolute inset-0" onClick={() => setProfile(null)} />
          <aside className="glossy-drawer relative z-10 h-full w-full max-w-md overflow-y-auto">
            <div className="border-b border-glassBorder p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{profile.name}</h3>
                  <p className="mt-1 text-muted">{profile.role}</p>
                </div>
                <button onClick={() => setProfile(null)} className="btn-ghost !p-2"><X size={20} /></button>
              </div>
            </div>
            <div className="space-y-6 p-6 text-sm">
              <section>
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Contact</h4>
                <p className="mt-2 text-muted">{profile.email}</p>
                <p className="text-muted">{profile.phone}</p>
              </section>
              {profile.role === "Designer" && (
                <section>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Performance</h4>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="glass-inset p-3"><p className="text-muted">Revenue</p><p className="font-semibold text-accent-light">${Math.round(profile.revenue / 1000)}K</p></div>
                    <div className="glass-inset p-3"><p className="text-muted">Close Rate</p><p className="font-semibold">{profile.closeRate}%</p></div>
                    <div className="glass-inset p-3"><p className="text-muted">Projects</p><p className="font-semibold">{profile.activeProjects}</p></div>
                    <div className="glass-inset p-3"><p className="text-muted">Capacity</p><p className="font-semibold">{profile.capacity}%</p></div>
                  </div>
                </section>
              )}
              {profile.coachingAlert && (
                <section className="rounded-xl border border-warning/20 bg-warning/5 p-4">
                  <h4 className="text-xs font-medium uppercase text-warning">Coaching Note</h4>
                  <p className="mt-2 text-muted">{profile.coachingAlert}</p>
                </section>
              )}
            </div>
          </aside>
        </div>
      )}
    </AppShell>
  );
}
