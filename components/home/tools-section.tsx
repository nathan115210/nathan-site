import { tools } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

export function ToolsSection() {
  return (
    <SectionShell
      id="tools"
      eyebrow="Core Skills"
      title="My core skills span modern web development, mobile app development, and product-focused engineering practices."
      description="Structured across frontend and backend web development, React Native, native iOS with SwiftUI, and the engineering practices that support scalable, reliable software."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((group) => (
            <Card key={group.title} className="rounded-[2rem] p-8">
              <p className="eyebrow">{group.title}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-text-secondary">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Card className="rounded-[2rem] p-8">
          <p className="eyebrow">Full skill map</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl text-text-primary">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}
