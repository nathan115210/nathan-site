import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { PageContainer } from "@/components/layout/page-container";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "deferred-section py-[var(--section-space)] first:pt-24 sm:first:pt-28",
        className,
      )}
    >
      <PageContainer>
        {(eyebrow || title || description) && (
          <div className={cn("mb-10 max-w-4xl sm:mb-14", headerClassName)}>
            {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
            {title ? (
              <h2 className="text-balance text-4xl text-text-primary sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </PageContainer>
    </section>
  );
}
