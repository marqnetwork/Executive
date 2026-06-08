"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { ProjectDrawer } from "@/components/projects/ProjectDrawer";
import { GlassCard } from "@/components/ui/GlassCard";
import { InsightCard } from "@/components/ui/InsightCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  kanbanColumns,
  pipelineInsights,
  pipelineKpis,
  projectStages,
  projects,
  Project,
  revenueTrend,
} from "@/data/mockData";
import { AlertTriangle, Calendar, CheckCircle, Clock, DollarSign, FolderKanban } from "lucide-react";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const trend = revenueTrend.slice(-6).map((r) => r.revenue);
  const spark = (d: number) => trend.map((v) => Math.round(v / d));

  const delayed = projects.filter((p) => p.status === "Delayed" || p.status === "Attention");
  const upcoming = projects
    .filter((p) => p.installDate && p.stage !== "Completed")
    .sort((a, b) => (a.installDate ?? "").localeCompare(b.installDate ?? ""));

  return (
    <AppShell>
      <PageHeader
        title="Projects & Operations"
        description="Pipeline visibility, kanban workflow, and installation scheduling."
      />

      <div className="grid-kpi mb-6 sm:mb-8">
        <MetricCard label="Active Projects" value={String(pipelineKpis.activeProjects)} change="↑ 3%" icon={FolderKanban} sparkData={spark(4000)} />
        <MetricCard label="Pipeline Value" value={`$${Math.round(pipelineKpis.pipelineValue / 1000)}K`} change="↑ 9%" icon={DollarSign} sparkData={trend} accent />
        <MetricCard label="Installations" value={String(pipelineKpis.installations)} change="↑ 2%" icon={Calendar} sparkData={spark(12000)} />
        <MetricCard label="Completed" value={String(pipelineKpis.completed)} change="↑ 11%" icon={CheckCircle} sparkData={spark(11000)} />
        <MetricCard label="Delayed" value={String(pipelineKpis.delayed)} change="Needs attention" icon={AlertTriangle} sparkData={spark(15000)} />
        <MetricCard label="Avg Project Value" value={`$${pipelineKpis.avgProjectValue.toLocaleString()}`} change="↑ 5%" icon={Clock} sparkData={spark(9000)} />
      </div>

      <GlassCard className="mb-6">
        <SectionHeader title="Stage Overview" subtitle="Projects by pipeline stage" />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-3">
          {projectStages.map((stage) => (
            <div key={stage.stage} className="glass-inset p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-muted">{stage.stage}</p>
              <p className="text-xl font-semibold">{stage.count}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mb-6">
        <SectionHeader title="Kanban Board" subtitle="Drag-free pipeline view" />
        <div className="flex gap-4 overflow-x-auto pb-2">
          {kanbanColumns.map((col) => {
            const colProjects = projects.filter((p) => p.stage === col.id);
            return (
              <div key={col.id} className="w-56 shrink-0">
                <div className="glass-inset mb-3 px-3 py-2">
                  <p className="text-sm font-medium">{col.title}</p>
                  <p className="text-[10px] text-muted">{col.subtitle}</p>
                  <p className="mt-1 text-[10px] text-muted">{colProjects.length} projects</p>
                </div>
                <div className="space-y-2">
                  {colProjects.map((project) => (
                    <button key={project.id} onClick={() => setSelected(project)} className="glossy-kanban-card w-full p-3 text-left">
                      <p className="font-medium">{project.client}</p>
                      <p className="mt-0.5 text-[10px] text-muted">{project.type}</p>
                      <div className="mt-2 flex items-center justify-between text-[10px]">
                        <span className="text-muted">{project.designer}</span>
                        <span className="font-semibold text-gold-light">{project.valueDisplay}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <StatusBadge status={project.status} />
                        {project.installDate && <span className="text-muted">{project.installDate}</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-6">
        <GlassCard>
          <SectionHeader title="Delayed Projects" />
          <div className="space-y-2">
            {delayed.map((p) => (
              <button key={p.id} onClick={() => setSelected(p)} className="list-row w-full text-left">
                <div>
                  <p className="font-medium">{p.client}</p>
                  <p className="text-xs text-muted">{p.stage} · {p.designer}</p>
                </div>
                <StatusBadge status={p.status} />
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Upcoming Installations" />
          <div className="space-y-2">
            {upcoming.map((p) => (
              <button key={p.id} onClick={() => setSelected(p)} className="list-row w-full text-left">
                <div>
                  <p className="font-medium">{p.client}</p>
                  <p className="text-xs text-muted">{p.type}</p>
                </div>
                <span className="font-semibold text-gold-light">{p.installDate}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <InsightCard
            insights={pipelineInsights.map((i) => i.text)}
            title="Pipeline Insights"
            ctaLabel="View Reports"
            ctaHref="/reports"
          />
        </GlassCard>
      </div>

      {selected && <ProjectDrawer project={selected} onClose={() => setSelected(null)} />}
    </AppShell>
  );
}
