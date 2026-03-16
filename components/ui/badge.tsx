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
        "inline-flex items-center rounded-full border border-accent-primary/20 bg-accent-primary/10 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent-hover",
        className,
      )}
    >
      {children}
    </span>
  );
}
