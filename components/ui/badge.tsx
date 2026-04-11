import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-primary px-3 py-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
