import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { SocialLinks } from "@/components/ui/social-links";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text-primary/10 bg-bg-primary py-10">
      <PageContainer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Building modern, maintainable digital products.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-text-muted">
            Copyright {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks
          links={[
            { label: "GitHub", href: siteConfig.githubUrl },
            { label: "LinkedIn", href: siteConfig.linkedinUrl },
            { label: "Email", href: `mailto:${siteConfig.email}` },
          ]}
        />
      </PageContainer>
    </footer>
  );
}
