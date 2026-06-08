const styles = {
  "On Track": "badge badge-success",
  Attention: "badge badge-warning",
  Delayed: "badge badge-attention",
};

export function StatusBadge({ status }: { status: keyof typeof styles }) {
  return <span className={styles[status]}>{status}</span>;
}
