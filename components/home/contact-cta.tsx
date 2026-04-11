import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="bg-[rgb(var(--bg-dark))] py-24 text-[rgb(var(--text-on-dark))]"
    >
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
              Contact
            </p>
            <h2 className="mt-4 text-balance text-4xl text-white sm:text-5xl">
              Interested in working together?
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
              Whether you&apos;re hiring for a senior software role or exploring
              web and mobile product work, I&apos;d be glad to talk through the
              product, the team, and the engineering needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Open contact page</Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
              >
                Email directly
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
              Preferred work
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
              <li>Senior software roles with strong product ownership</li>
              <li>Web and mobile product development with quality focus</li>
              <li>Selective consulting work with clear delivery scope</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                href={siteConfig.githubUrl}
                variant="ghost"
                className="text-white/60 hover:text-white"
              >
                View GitHub{" "}
                <ExternalLink className="ml-1 opacity-70" size={12} />
              </Button>
              <Button
                href={siteConfig.linkedinUrl}
                variant="ghost"
                className="text-white/60 hover:text-white"
              >
                LinkedIn <ExternalLink className="ml-1 opacity-70" size={12} />
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
