import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";

export function HeroSection() {
  return (
    <section
      id="home"
      className="border-b border-text-primary/10 py-24 lg:py-32"
    >
      <PageContainer>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">
            Available for senior software roles &middot; {siteConfig.location}
          </p>
          <h1 className="text-5xl text-text-primary sm:text-6xl lg:text-[5.5rem] leading-[1.05]">
            {siteConfig.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/projects">Explore Projects</Button>
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <dl className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-text-primary/10 pt-10 sm:grid-cols-3 max-w-xl">
          <div>
            <dt className="eyebrow">Experience</dt>
            <dd className="mt-2 text-3xl font-bold text-text-primary">8+</dd>
            <dd className="mt-0.5 text-sm text-text-secondary">years</dd>
          </div>
          <div>
            <dt className="eyebrow">Focus</dt>
            <dd className="mt-2 text-2xl font-bold text-text-primary">
              Web &amp; Mobile
            </dd>
            <dd className="mt-0.5 text-sm text-text-secondary">development</dd>
          </div>
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-2 text-2xl font-bold text-text-primary">
              {siteConfig.location.split(",")[0]}
            </dd>
            <dd className="mt-0.5 text-sm text-text-secondary">Finland</dd>
          </div>
        </dl>
      </PageContainer>
    </section>
  );
}
