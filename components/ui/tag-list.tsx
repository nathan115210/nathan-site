type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border-strong/12 bg-surface-elevated/75 px-3 py-1.5 text-sm text-text-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
