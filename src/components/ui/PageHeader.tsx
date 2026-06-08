"use client";

import { Bell, Calendar } from "lucide-react";

export function PageHeader({
  title,
  description,
  welcome,
  welcomeSubtitle,
  action,
  showToolbar = true,
}: {
  title?: string;
  description?: string;
  welcome?: string;
  welcomeSubtitle?: string;
  action?: React.ReactNode;
  showToolbar?: boolean;
}) {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          {welcome ? (
            <>
              <h1 className="font-serif text-2xl tracking-tight sm:text-3xl lg:text-4xl">{welcome}</h1>
              {welcomeSubtitle && <p className="mt-2 text-sm text-muted sm:text-base">{welcomeSubtitle}</p>}
            </>
          ) : (
            <>
              {title && <h1 className="font-serif text-2xl tracking-tight sm:text-3xl lg:text-4xl">{title}</h1>}
              {description && <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{description}</p>}
            </>
          )}
        </div>

        {(showToolbar || action) && (
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {showToolbar && (
              <>
                <button type="button" className="btn-ghost flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  June 2026
                </button>
                <button type="button" aria-label="Notifications" className="btn-ghost !p-2.5">
                  <Bell size={18} />
                </button>
              </>
            )}
            {action}
          </div>
        )}
      </div>
    </header>
  );
}
