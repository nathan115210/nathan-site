"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { isExternalLink } from "@/lib/utils";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export function SiteHeader() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isCollapsedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const canAutoCollapseRef = useRef(true);

  const setHeaderCollapsed = (nextIsCollapsed: boolean) => {
    canAutoCollapseRef.current = false;
    isCollapsedRef.current = nextIsCollapsed;
    setIsCollapsed(nextIsCollapsed);
  };

  const toggleHeader = () => {
    setHeaderCollapsed(!isCollapsedRef.current);
  };

  useEffect(() => {
    const mobileBreakpoint = 1024;
    const collapseOffset = 96;
    const topResetOffset = 8;
    const autoCollapseZone = 320;

    const updateCollapsedState = (nextIsCollapsed: boolean) => {
      if (isCollapsedRef.current === nextIsCollapsed) {
        return;
      }

      isCollapsedRef.current = nextIsCollapsed;
      setIsCollapsed(nextIsCollapsed);
    };

    const syncHeaderState = () => {
      const currentScrollY = window.scrollY;
      const nextIsAtTop = currentScrollY <= topResetOffset;

      if (window.innerWidth >= mobileBreakpoint) {
        lastScrollYRef.current = currentScrollY;
        canAutoCollapseRef.current = true;
        updateCollapsedState(false);
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollYRef.current;

      if (nextIsAtTop) {
        canAutoCollapseRef.current = true;
        updateCollapsedState(false);
      } else if (
        canAutoCollapseRef.current &&
        !isCollapsedRef.current &&
        isScrollingDown &&
        currentScrollY >= collapseOffset &&
        currentScrollY <= autoCollapseZone
      ) {
        canAutoCollapseRef.current = false;
        updateCollapsedState(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    window.addEventListener("resize", syncHeaderState);

    return () => {
      window.removeEventListener("scroll", syncHeaderState);
      window.removeEventListener("resize", syncHeaderState);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <PageContainer>
        <div
          className={cn(
            "liquid-glass rounded-[2rem] px-5 sm:px-6 transition-[padding,box-shadow] duration-300 ease-editorial",
            isCollapsed ? "py-3" : "py-4",
          )}
        >
          <div
            className={cn(
              "liquid-glass-content flex flex-col transition-[gap] duration-300 ease-editorial lg:flex-row lg:items-center lg:justify-between",
              isCollapsed ? "gap-0" : "gap-4",
            )}
          >
            <div className="flex items-start justify-between gap-4 sm:items-center">
              <Link href="/" className="min-w-0">
                <p className="adaptive-ink mt-2 text-lg font-semibold sm:text-xl">
                  {siteConfig.name}
                </p>
              </Link>
              <button
                type="button"
                aria-label={
                  isCollapsed ? "Expand site header" : "Collapse site header"
                }
                aria-expanded={!isCollapsed}
                onClick={toggleHeader}
                className={cn(
                  "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong/16 bg-white/5 text-text-primary transition duration-300 ease-editorial lg:hidden",
                  isCollapsed ? "opacity-100" : "opacity-85",
                )}
              >
                {isCollapsed ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronUp size={18} />
                )}
              </button>
            </div>
            <div
              aria-hidden={isCollapsed}
              className={cn(
                "flex flex-col gap-4 overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-editorial lg:max-h-none lg:opacity-100 lg:translate-y-0 lg:overflow-visible lg:items-end",
                isCollapsed
                  ? "max-h-0 -translate-y-2 opacity-0 pointer-events-none lg:pointer-events-auto"
                  : "max-h-48 translate-y-0 opacity-100 mt-4 lg:mt-0",
              )}
            >
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
