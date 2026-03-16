import { siteConfig } from "@/data/site";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function ContactCta() {
  return (
    <SectionShell id="contact" className="pt-6 sm:pt-10 lg:pt-12">
      <Card className="rounded-[2rem] px-6 py-10 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-balance text-4xl text-text-primary sm:text-5xl">
              Interested in working together?
            </h2>
            <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg">
              Whether you&apos;re hiring for a senior software role or exploring
              web and mobile product work, I&apos;d be glad to talk through the
              product, the team, and the engineering needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Open contact page</Button>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                Email directly
              </Button>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border-strong/12 bg-bg-secondary/55 p-6">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-text-muted">
              Preferred work
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-text-secondary">
              <li>Senior software roles with strong product ownership</li>
              <li>Web and mobile product development with quality focus</li>
              <li>Selective consulting work with clear delivery scope</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={siteConfig.githubUrl} variant="ghost">
                View GitHub{" "}
                <ExternalLink className="ml-1 text-xs opacity-70" size={12} />
              </Button>
              <Button href={siteConfig.linkedinUrl} variant="ghost">
                LinkedIn{" "}
                <ExternalLink className="ml-1 text-xs opacity-70" size={12} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </SectionShell>
  );
}
