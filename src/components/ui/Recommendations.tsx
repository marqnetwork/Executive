export function Recommendations({
  items,
  title,
}: {
  items: string[];
  title?: string;
}) {
  return (
    <div className="space-y-3">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
