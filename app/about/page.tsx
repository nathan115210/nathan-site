import { createMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";
import { proofPoints, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { PageContainer } from "@/components/layout/page-container";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillsSection } from "@/components/home/skills-section";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata = createMetadata({
  title: "About",
  description: "Background, experience, and working style for Nathan Zhao.",
  path: "/about",
});

export default function AboutPage() {
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
    <>
      <section className="pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pb-14 lg:pt-24">
        <PageContainer>
          <div className="max-w-4xl">
            <Badge>About</Badge>
            <h1 className="mt-6 text-balance text-5xl text-text-primary sm:text-6xl lg:text-[5.75rem]">
              {siteConfig.title} with over 8+ years of experience building and
              improving digital products.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              My background is rooted in modern web development, with a strong
              focus on maintainable frontend architecture, product quality, and
              collaborative engineering.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              I&apos;m driven by a continual desire to learn, refine my skills,
              and explore better ways to build software. In addition to web
              development, I&apos;m comfortable building mobile experiences
              through React Native and native iOS development with SwiftUI.
            </p>
          </div>
        </PageContainer>
      </section>

      <SectionShell
        eyebrow="Working style"
        title="How I approach product engineering."
        description="The through-line in my work is building better products through collaboration, software quality, and solution-oriented engineering decisions."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-8">
            <p className="eyebrow">Approach</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-text-secondary">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="border-l-2 border-accent-primary pl-4"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <p className="eyebrow">Services</p>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-text-primary/10 bg-bg-tertiary p-4"
                >
                  <h2 className="text-2xl text-text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Career"
        title="Roles that shaped how I think about software delivery."
      >
        <div className="grid grid-cols-1 gap-6">
          {experienceByCompany.map((group) => (
            <Card key={group.company} className="p-8">
              <p className="eyebrow">{group.company}</p>
              <div
                className={`mt-6 space-y-8 ${
                  group.items.length > 1
                    ? "border-l-2 border-accent-primary pl-6"
                    : ""
                }`}
              >
                {group.items.map((item) => (
                  <article
                    key={`${item.role}-${item.period}`}
                    className="relative"
                  >
                    {group.items.length > 1 ? (
                      <span className="absolute -left-[1.66rem] top-2 h-2.5 w-2.5 rounded-full bg-accent-primary ring-4 ring-accent-primary/20" />
                    ) : null}
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
                      {item.period}
                    </p>
                    <h2 className="mt-2 text-3xl text-text-primary">
                      {item.role}
                    </h2>
                    {item.location ? (
                      <p className="mt-1 text-sm text-text-muted">
                        {item.location}
                      </p>
                    ) : null}
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-text-secondary">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="border-l-2 border-accent-primary pl-4"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SkillsSection />
      <ContactCta />
    </>
  );
}
