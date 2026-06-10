export function KpiCard({
  label,
  value,
  change,
  accent = false,
}: {
  label: string;
  value: string;
  change: string;
  accent?: boolean;
}) {
  return (
    <div className="glossy-card p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-sm text-glossy-muted">{label}</p>
      <p className={`mt-3 text-3xl font-semibold tracking-tight ${accent ? "text-accent-light" : ""}`}>
        {value}
      </p>
      <p className="mt-2 text-sm text-glossy-success">{change} vs last month</p>
    </div>
  );
}
