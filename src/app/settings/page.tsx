"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyProfile, notificationSettings, teamMembers } from "@/data/mockData";
import { Building2, Bell, Users, Save } from "lucide-react";

type SettingsTab = "company" | "users" | "notifications";

export default function SettingsPage() {
  const [tab, setTab] = useState<SettingsTab>("company");
  const [company, setCompany] = useState(companyProfile);
  const [notifications, setNotifications] = useState(notificationSettings);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  return (
    <AppShell>
      <PageHeader
        title="Settings"
        description="Manage company profile, users, roles, and notification preferences."
      />

      <div className="tabs-scroll mb-6">
        <TabButton active={tab === "company"} onClick={() => setTab("company")} icon={Building2} label="Company Profile" />
        <TabButton active={tab === "users"} onClick={() => setTab("users")} icon={Users} label="User Management" />
        <TabButton active={tab === "notifications"} onClick={() => setTab("notifications")} icon={Bell} label="Notifications" />
      </div>

      {saved && <div className="alert-success mb-4 px-4 py-3 text-sm">Settings saved successfully.</div>}

      {tab === "company" && (
        <GlassCard>
          <SectionHeader title="Company Profile" />
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/60 font-serif text-2xl text-navy shadow-gold">
              TC
            </div>
            <div>
              <p className="text-sm text-muted">Company Logo</p>
              <button className="mt-2 text-sm text-gold-light hover:underline">Upload Logo</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Company Name" value={company.name} onChange={(v) => setCompany({ ...company, name: v })} />
            <Field label="Tagline" value={company.tagline} onChange={(v) => setCompany({ ...company, tagline: v })} />
            <Field label="Address" value={company.address} onChange={(v) => setCompany({ ...company, address: v })} className="sm:col-span-2" />
            <Field label="Phone" value={company.phone} onChange={(v) => setCompany({ ...company, phone: v })} />
            <Field label="Email" value={company.email} onChange={(v) => setCompany({ ...company, email: v })} />
          </div>
          <div className="mt-6 border-t border-glassBorder pt-6">
            <SectionHeader title="Brand Colors" subtitle="Executive palette" />
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Navy", color: "#0a0e17" },
                { name: "Gold", color: "#c9a227" },
                { name: "Success", color: "#34d399" },
                { name: "Chart Blue", color: "#6366f1" },
              ].map((c) => (
                <div key={c.name} className="text-center">
                  <div className="h-12 w-12 rounded-xl border border-glassBorder shadow-card" style={{ background: c.color }} />
                  <p className="mt-2 text-xs text-muted">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
          <SaveButton onClick={handleSave} />
        </GlassCard>
      )}

      {tab === "users" && (
        <GlassCard>
          <SectionHeader
            title="User Management"
            action={<button className="btn-gold text-sm">Add User</button>}
          />
          <div className="space-y-2">
            {teamMembers.map((m) => (
              <div key={m.id} className="list-row flex-wrap gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-muted">{m.email}</p>
                </div>
                <select defaultValue={m.role} className="input-glass w-auto py-1.5 text-sm">
                  <option value="Owner">Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Designer">Designer</option>
                  <option value="Operations">Operations</option>
                </select>
                <span className={`badge ${m.status === "Active" ? "badge-success" : "badge-warning"}`}>{m.status}</span>
                <button className="text-sm text-gold-light hover:underline">Edit</button>
              </div>
            ))}
          </div>
          <div className="glass-inset mt-6 p-5">
            <p className="mb-3 text-sm font-medium">Role Permissions</p>
            <div className="grid grid-cols-1 gap-2 text-xs text-muted sm:grid-cols-2">
              <p><strong className="text-primary">Owner:</strong> Full access — all dashboards, users, reports</p>
              <p><strong className="text-primary">Manager:</strong> Marketing, Sales, Projects, Team</p>
              <p><strong className="text-primary">Designer:</strong> Own performance & assigned work</p>
              <p><strong className="text-primary">Operations:</strong> Projects, installations, orders</p>
            </div>
          </div>
          <SaveButton onClick={handleSave} />
        </GlassCard>
      )}

      {tab === "notifications" && (
        <GlassCard>
          <SectionHeader title="Notification Settings" />
          <div className="space-y-3">
            {notifications.map((n) => (
              <div key={n.id} className="list-row">
                <span className="text-sm">{n.label}</span>
                <button
                  onClick={() => toggleNotification(n.id)}
                  className={`glossy-toggle ${n.enabled ? "glossy-toggle-on" : "glossy-toggle-off"}`}
                >
                  <span className="glossy-toggle-knob" style={{ left: n.enabled ? "1.25rem" : "2px" }} />
                </button>
              </div>
            ))}
          </div>
          <SaveButton onClick={handleSave} />
        </GlassCard>
      )}
    </AppShell>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ComponentType<{ size?: number }>; label: string }) {
  return (
    <button onClick={onClick} className={`btn-tab flex shrink-0 items-center gap-2 whitespace-nowrap text-xs sm:text-sm ${active ? "btn-tab-active" : ""}`}>
      <Icon size={16} />
      {label}
    </button>
  );
}

function Field({ label, value, onChange, className = "" }: { label: string; value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm text-muted">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="input-glass" />
    </div>
  );
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="btn-gold mt-6 flex items-center gap-2 text-sm">
      <Save size={16} />
      Save Changes
    </button>
  );
}
