import Link from "next/link";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { isExternalLink } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
  {
    variants: {
      variant: {
        primary:
          "border-accent-primary bg-accent-primary text-text-primary hover:bg-accent-hover hover:border-accent-hover",
        secondary:
          "border-text-primary/20 bg-bg-secondary text-text-primary hover:border-text-primary/40 hover:bg-bg-tertiary",
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
