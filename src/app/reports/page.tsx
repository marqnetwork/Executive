"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  funnelStages,
  marketingSources,
  pipelineKpis,
  projects,
  teamMembers,
} from "@/data/mockData";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

type ReportType = "sales" | "marketing" | "projects" | "team";

const reportTabs: { id: ReportType; label: string }[] = [
  { id: "sales", label: "Sales Report" },
  { id: "marketing", label: "Marketing Report" },
  { id: "projects", label: "Project Report" },
  { id: "team", label: "Team Report" },
];

export default function ReportsPage() {
  const [active, setActive] = useState<ReportType>("sales");
  const [exportMsg, setExportMsg] = useState("");

  const handleExport = (format: string) => {
    setExportMsg(`${format} export prepared — download would begin in production.`);
    setTimeout(() => setExportMsg(""), 3000);
  };

  return (
    <AppShell>
      <PageHeader
        title="Reports"
        description="Generate and export business reports across all modules."
        action={
          <div className="flex flex-wrap gap-2">
            <ExportButton icon={FileText} label="PDF" onClick={() => handleExport("PDF")} />
            <ExportButton icon={FileSpreadsheet} label="Excel" onClick={() => handleExport("Excel")} />
            <ExportButton icon={Download} label="CSV" onClick={() => handleExport("CSV")} />
          </div>
        }
      />

      {exportMsg && <div className="alert-success mb-4 px-4 py-3 text-sm">{exportMsg}</div>}

      <div className="tabs-scroll mb-6">
        {reportTabs.map((tab) => (
          <button key={tab.id} onClick={() => setActive(tab.id)} className={`btn-tab shrink-0 whitespace-nowrap ${active === tab.id ? "btn-tab-active" : ""}`}>
            {tab.label}
          </button>
        ))}
      </div>

      {active === "sales" && (
        <GlassCard>
          <ReportHeader title="Sales Report" period="June 2026" />
          <div className="grid-summary-3 mb-6">
            <SummaryBox label="Total Leads" value="126" />
            <SummaryBox label="Sales Closed" value="19" />
            <SummaryBox label="Revenue" value="$247,500" accent />
          </div>
          <div className="space-y-2">
            {funnelStages.map((s) => (
              <div key={s.stage} className="list-row">
                <span className="font-medium">{s.stage}</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted">{s.count} count</span>
                  <span className="badge badge-gold">{s.conversion}%</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {active === "marketing" && (
        <GlassCard>
          <ReportHeader title="Marketing Report" period="June 2026" />
          <div className="grid-summary-3 mb-6">
            <SummaryBox label="Total Spend" value="$13,200" />
            <SummaryBox label="Total Leads" value="126" />
            <SummaryBox label="Revenue Generated" value="$336,000" accent />
          </div>
          <div className="space-y-2">
            {marketingSources.map((s) => (
              <div key={s.source} className="list-row">
                <div>
                  <p className="font-medium">{s.source}</p>
                  <p className="text-xs text-muted">${s.spend.toLocaleString()} spend · {s.leads} leads</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gold-light">${s.revenue.toLocaleString()}</p>
                  <p className="text-xs text-muted">{s.spend > 0 ? `${Math.round(s.revenue / s.spend)}x ROI` : "—"}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {active === "projects" && (
        <GlassCard>
          <ReportHeader title="Project Report" period="June 2026" />
          <div className="grid-summary-4 mb-6">
            <SummaryBox label="Active Projects" value={String(pipelineKpis.activeProjects)} />
            <SummaryBox label="Pipeline Value" value={`$${Math.round(pipelineKpis.pipelineValue / 1000)}K`} accent />
            <SummaryBox label="Delayed" value={String(pipelineKpis.delayed)} />
            <SummaryBox label="Completed" value={String(pipelineKpis.completed)} />
          </div>
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.id} className="list-row">
                <div>
                  <p className="font-medium">{p.client}</p>
                  <p className="text-xs text-muted">{p.type} · {p.designer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge badge-gold">{p.stage}</span>
                  <span className="font-medium">{p.valueDisplay}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {active === "team" && (
        <GlassCard>
          <ReportHeader title="Team Report" period="June 2026" />
          <div className="grid-summary-3 mb-6">
            <SummaryBox label="Team Members" value={String(teamMembers.length)} />
            <SummaryBox label="Total Revenue" value="$208K" accent />
            <SummaryBox label="Avg Close Rate" value="42%" />
          </div>
          <div className="space-y-2">
            {teamMembers.map((m) => (
              <div key={m.id} className="list-row">
                <div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-muted">{m.role}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-gold-light">{m.revenue > 0 ? `$${Math.round(m.revenue / 1000)}K` : "—"}</p>
                  <p className="text-muted">{m.closeRate > 0 ? `${m.closeRate}% close` : `${m.activeProjects} projects`}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}
    </AppShell>
  );
}

function ReportHeader({ title, period }: { title: string; period: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2 border-b border-glassBorder pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-serif text-xl">{title}</h3>
        <p className="text-sm text-muted">The Tailored Closet · {period}</p>
      </div>
      <p className="text-xs text-muted">Generated {new Date().toLocaleDateString()}</p>
    </div>
  );
}

function SummaryBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="glass-inset p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className={`mt-1 text-2xl font-semibold ${accent ? "text-gold-light" : ""}`}>{value}</p>
    </div>
  );
}

function ExportButton({ icon: Icon, label, onClick }: { icon: React.ComponentType<{ size?: number }>; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="btn-ghost text-sm">
      <Icon size={16} />
      {label}
    </button>
  );
}
