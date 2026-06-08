import { Inbox } from "lucide-react";

export function EmptyState({
  title = "No data available",
  description = "There is nothing to display for this period.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
        <Inbox size={22} className="text-muted" />
      </div>
      <p className="font-medium text-secondary">{title}</p>
      <p className="mt-1 max-w-xs text-sm text-muted">{description}</p>
    </div>
  );
}
