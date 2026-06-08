"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  FolderKanban,
  Settings2,
  Users,
  Lightbulb,
  FileBarChart,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  { href: "/overview", label: "Command Center", icon: LayoutDashboard },
  { href: "/marketing", label: "Growth", icon: TrendingUp },
  { href: "/sales", label: "Revenue", icon: DollarSign },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/projects", label: "Operations", icon: Settings2, matchPaths: ["/projects"] },
  { href: "/team", label: "People", icon: Users, matchPaths: ["/team"] },
  { href: "/marketing", label: "Insights", icon: Lightbulb, matchPaths: ["/marketing"] },
  { href: "/reports", label: "Reports", icon: FileBarChart },
  { href: "/settings", label: "Settings", icon: Settings },
];

function isActive(pathname: string, href: string, matchPaths?: string[]) {
  const paths = matchPaths ?? [href];
  return paths.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <aside
      className={`exec-sidebar fixed inset-y-0 left-0 z-40 flex h-screen w-[260px] shrink-0 flex-col px-4 py-6 transition-transform duration-300 ease-in-out sm:w-[272px] lg:static lg:z-auto lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="mb-8 flex items-start justify-between px-1">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">The Tailored Closet</p>
          <h1 className="mt-1 font-serif text-xl text-gold-light">Executive BI</h1>
        </div>
        <button type="button" aria-label="Close menu" onClick={onClose} className="btn-ghost !p-2 lg:hidden">
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href, item.matchPaths);
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`exec-nav-item ${active ? "exec-nav-active" : ""}`}
            >
              <Icon size={17} strokeWidth={active ? 2.25 : 1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="glass-inset mt-4 p-3 shadow-inset ring-1 ring-gold/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-gold/10 text-sm font-semibold text-gold-light ring-1 ring-gold/25">
            KT
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Karen Thompson</p>
            <p className="text-xs text-muted">Owner</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
