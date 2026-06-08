export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`glass-card p-5 sm:p-6 ${className}`}>{children}</section>;
}

/** @deprecated Use GlassCard */
export function Card(props: { children: React.ReactNode; className?: string }) {
  return <GlassCard {...props} />;
}
