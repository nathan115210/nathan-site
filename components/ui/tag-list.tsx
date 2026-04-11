type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-text-primary/15 bg-bg-tertiary px-3 py-1 text-xs font-medium text-text-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
