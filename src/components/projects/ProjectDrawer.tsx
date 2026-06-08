"use client";

import { Project } from "@/data/mockData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { X } from "lucide-react";

export function ProjectDrawer({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="glossy-overlay absolute inset-0" onClick={onClose} />
      <aside className="glossy-drawer relative z-10 h-full w-full max-w-md overflow-y-auto">
        <div className="border-b border-glassBorder p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-2xl">{project.client}</h3>
              <p className="mt-1 text-muted">{project.type}</p>
            </div>
            <button onClick={onClose} className="btn-ghost !p-2"><X size={20} /></button>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-sm text-muted">{project.stage}</span>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <section>
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Client Info</h4>
            <div className="mt-3 space-y-1 text-sm text-muted">
              <p>{project.email}</p>
              <p>{project.phone}</p>
              <p>{project.address}</p>
            </div>
          </section>

          <section>
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Project Details</h4>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="glass-inset p-3"><p className="text-muted">Value</p><p className="font-semibold text-gold-light">{project.valueDisplay}</p></div>
              <div className="glass-inset p-3"><p className="text-muted">Designer</p><p className="font-semibold">{project.designer}</p></div>
              {project.installDate && (
                <div className="glass-inset p-3"><p className="text-muted">Install</p><p className="font-semibold">{project.installDate}</p></div>
              )}
            </div>
          </section>

          <section>
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Timeline</h4>
            <div className="mt-3 space-y-2">
              {project.timeline.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="w-14 shrink-0 text-muted">{item.date}</span>
                  <span>{item.event}</span>
                </div>
              ))}
            </div>
          </section>

          {project.notes.length > 0 && (
            <section>
              <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Notes</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {project.notes.map((note, i) => (
                  <li key={i} className="glass-inset px-3 py-2">{note}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">Assigned Team</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.team.map((member) => (
                <span key={member} className="badge badge-success">{member}</span>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}
