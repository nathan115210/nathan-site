import { Card } from "@/components/ui/card";

type CaseStudySectionProps = {
  title: string;
  body?: string;
  items?: string[];
};

export function CaseStudySection({
  title,
  body,
  items,
}: CaseStudySectionProps) {
  return (
    <Card>
      <p className="eyebrow">Case study</p>
      <h2 className="mt-4 text-3xl text-text-primary">{title}</h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-text-secondary">{body}</p>
      ) : null}
      {items?.length ? (
        <ul className="mt-5 space-y-3 text-text-secondary">
          {items.map((item) => (
            <li
              key={item}
              className="border-l border-accent-primary/25 pl-4 leading-7"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
