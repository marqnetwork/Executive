export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-12 text-muted">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
