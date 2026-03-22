import { experience } from "@/data/experience";
import { services } from "@/data/services";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const experienceByCompany = experience.reduce<
    Array<{ company: string; items: (typeof experience)[number][] }>
  >((groups, item) => {
    const existingGroup = groups.find(
      (group) => group.company === item.company,
    );
    if (existingGroup) {
      existingGroup.items.push(item);
      return groups;
    }

    groups.push({ company: item.company, items: [item] });
    return groups;
  }, []);

  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="8+ years of experience building modern, maintainable software products."
      description="Driven by continuous learning, I focus on building better products through collaboration, code quality, and pragmatic problem-solving across web and mobile."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[2rem] p-8">
          <p className="eyebrow">How I work</p>
          <h3 className="mt-4 text-3xl text-text-primary">
            Product-focused engineering with a strong quality mindset.
          </h3>
          <ul className="mt-6 space-y-4 text-base leading-7 text-text-secondary">
            <li>
              Continuous learning shapes how I refine both the product and the
              implementation.
            </li>
            <li>
              Collaborative development helps me align technical decisions with
              real product needs.
            </li>
            <li>
              Clean code, optimization, and maintainability are part of
              delivery, not afterthoughts.
            </li>
            <li>I prefer proactive problem-solving over reactive cleanup.</li>
          </ul>
        </Card>
        <Card className="rounded-[2rem] p-8 section-frame relative overflow-hidden sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,162,96,0.16),transparent_60%)]" />
          <p className="eyebrow">Core skills</p>
          <h3 className="mt-4 text-3xl text-text-primary">
            Web and mobile capabilities that translate well across product
            needs.
          </h3>

          <div className="mt-6 space-y-4">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="relative space-y-3 px-5 py-5 rounded-[1.5rem] bg-bg-secondary/80"
              >
                <p className="font-medium text-text-primary">{service.title}</p>
                <p className=" text-sm text-text-secondary">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(211,162,96,0.16),transparent_60%)]" />
        </Card>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <div>
          <h3 className="mt-3 text-3xl text-text-primary">Experience</h3>
        </div>
        {experienceByCompany.map((group) => (
          <Card key={group.company} className="rounded-[2rem] p-8">
            <p className="eyebrow">{group.company}</p>
            <div
              className={`mt-6 space-y-6 ${
                group.items.length > 1
                  ? "border-l border-accent-primary/25 pl-5"
                  : ""
              }`}
            >
              {group.items.map((item) => (
                <article
                  key={`${item.role}-${item.period}`}
                  className="relative"
                >
                  {group.items.length > 1 ? (
                    <span className="absolute -left-[1.42rem] top-2 h-2.5 w-2.5 rounded-full bg-accent-primary/70 ring-4 ring-accent-primary/10" />
                  ) : null}
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-text-muted">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl text-text-primary">
                    {item.role}
                  </h3>
                  {item.location ? (
                    <p className="mt-1 text-sm text-text-muted">
                      {item.location}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm leading-6 text-text-secondary">
                    {item.summary ?? item.bullets[0]}
                  </p>
                </article>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
