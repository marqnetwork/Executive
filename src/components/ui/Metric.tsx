export function Metric({ label, value, accent = false, sub }: { label: string; value: string; accent?: boolean; sub?: string }) {
  return (
    <div className="glossy-card p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-sm text-glossy-muted">{label}</p>
      <p className={`mt-3 text-3xl font-semibold tracking-tight ${accent ? "text-accent-light" : ""}`}>{value}</p>
      {sub && <p className="mt-2 text-sm text-glossy-subtle">{sub}</p>}
    </div>
  );
}
