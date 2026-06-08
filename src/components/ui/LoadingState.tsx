export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-16">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
