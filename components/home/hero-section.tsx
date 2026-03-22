import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-10 pt-16 sm:pb-14 sm:pt-20 lg:pb-20 lg:pt-24"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(211,162,96,0.22),transparent_38%),radial-gradient(circle_at_top_right,rgba(255,241,219,0.08),transparent_28%),linear-gradient(180deg,rgba(24,20,16,0.82),transparent)]" />
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="max-w-4xl">
            <h1 className="text-balance mt-6 font-sans text-5xl text-text-primary sm:text-6xl lg:text-[6.5rem]">
              {siteConfig.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects">Explore Projects</Button>
              <Button href="/about" variant="secondary">
                More About Me
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
