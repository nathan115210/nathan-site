import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("surface-panel rounded-3xl p-6 sm:p-7", className)}>
      {children}
    </div>
  );
}
