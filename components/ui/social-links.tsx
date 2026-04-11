import { ExternalLink } from "lucide-react";
import Link from "next/link";

type SocialLinksProps = {
  links: { label: string; href: string }[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary transition hover:text-text-primary flex items-center"
        >
          {link.label}{" "}
          <ExternalLink className="ml-1 text-xs opacity-70" size={12} />
        </Link>
      ))}
    </div>
  );
}
