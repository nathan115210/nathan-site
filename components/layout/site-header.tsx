import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { isExternalLink } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pt-4">
      <PageContainer>
        <div className="liquid-glass rounded-[2rem] px-5 py-4 sm:px-6">
          <div className="liquid-glass-content flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start justify-between gap-4 sm:items-center">
              <Link href="/" className="min-w-0">
                <p className="adaptive-ink mt-2 text-lg font-semibold sm:text-xl">
                  {siteConfig.name}
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={isExternalLink(item.href) ? "_blank" : undefined}
                    rel={isExternalLink(item.href) ? "noreferrer" : undefined}
                    className="flex adaptive-ink rounded-full border border-transparent py-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition hover:border-border-strong/12 hover:bg-white/5 hover:opacity-80 items-center"
                  >
                    {item.label}
                    {isExternalLink(item.href) && (
                      <ExternalLink
                        className="ml-1 text-xs opacity-70"
                        size={12}
                      />
                    )}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={siteConfig.resumeUrl} variant="secondary">
                  Resume
                </Button>
                <Button href="/contact">Start a conversation</Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
