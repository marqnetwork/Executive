export function HealthScore({ score, label, size = "md" }: { score: number; label: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "text-3xl", md: "text-5xl", lg: "text-6xl" };
  const color = score >= 80 ? "text-glossy-success" : score >= 60 ? "text-glossy-warning" : "text-glossy-attention";

  return (
    <div className="glossy-health p-6 text-center">
      <p className="text-sm text-glossy-muted">{label}</p>
      <p className={`mt-3 font-semibold ${sizeClasses[size]} ${color}`}>{score}</p>
      <p className="text-glossy-subtle">out of 100</p>
    </div>
  );
}
