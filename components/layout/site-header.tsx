"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { isExternalLink } from "@/lib/utils";

const mainNavItems = navItems.filter((item) =>
  ["/", "/projects", "/about", "/contact"].includes(item.href),
);

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-primary border-b border-text-primary/10">
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-base font-bold text-text-primary tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isExternal = isExternalLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary rounded-lg hover:text-text-primary hover:bg-text-primary/5 transition-colors"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button href={siteConfig.githubUrl} variant="ghost">
              GitHub
            </Button>
            <Button href="/contact">Get in touch</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-text-primary/5 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-text-primary/10 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isExternal = isExternalLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-2 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-text-primary/5 transition-colors"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-text-primary/10">
              <Button href="/contact">Get in touch</Button>
            </div>
          </div>
        )}
      </PageContainer>
    </header>
  );
}
