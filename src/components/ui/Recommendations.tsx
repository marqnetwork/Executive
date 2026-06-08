const colorMap = {
  success: "text-glossy-success",
  warning: "text-glossy-warning",
  attention: "text-glossy-attention",
  info: "text-glossy-muted",
};

export function Recommendations({ items, title = "Recommendations" }: { items: { text: string; type: keyof typeof colorMap }[]; title?: string }) {
  return (
    <div className="space-y-4 text-sm">
      {title && <h3 className="font-serif text-xl">{title}</h3>}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className={`glossy-inset px-4 py-3 ${colorMap[item.type]}`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
