import { skillGroups } from "@/data/skills";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Grouped expertise instead of a badge wall."
      description="The point is not to list every tool. It is to show the areas where I can contribute confidently and move quickly."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <p className="eyebrow">{group.title}</p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
