"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Bell, Menu, Search, Settings } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="exec-app-bg flex min-h-screen">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="glossy-overlay fixed inset-0 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="exec-topbar sticky top-0 z-20 flex items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="btn-ghost !p-2.5 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 ring-1 ring-accent/25">
              <span className="text-xs font-bold text-accent-bright">TC</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">Executive BI</span>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button type="button" className="btn-primary hidden text-sm sm:inline-flex">
              Export Report
            </button>
            <button type="button" aria-label="Notifications" className="btn-ghost relative !p-2.5">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-magenta shadow-magenta" />
            </button>
            <button type="button" aria-label="Settings" className="btn-ghost hidden !p-2.5 sm:inline-flex">
              <Settings size={18} />
            </button>
            <div className="hidden items-center gap-2 rounded-full border border-glassBorder bg-black/30 px-3 py-1.5 sm:flex">
              <Search size={15} className="text-muted" />
              <input
                type="search"
                placeholder="Search..."
                className="w-28 bg-transparent text-sm outline-none placeholder:text-muted lg:w-40"
              />
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1680px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
