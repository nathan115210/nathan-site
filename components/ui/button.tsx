import Link from "next/link";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { isExternalLink } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium tracking-[0.02em] transition duration-420 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
  {
    variants: {
      variant: {
        primary:
          "border-accent-primary/35 bg-accent-primary text-bg-primary shadow-glow hover:-translate-y-0.5 hover:bg-accent-hover",
        secondary:
          "border-border-strong/15 bg-surface-float/50 text-text-primary hover:-translate-y-0.5 hover:border-accent-primary/20 hover:bg-surface-float/80",
        ghost:
          "border-transparent bg-transparent px-0 text-text-secondary hover:text-text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Button({ href, children, variant, className }: ButtonProps) {
  const isExternal = isExternalLink(href);

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
