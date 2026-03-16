import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { SocialLinks } from "@/components/ui/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <PageContainer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-200">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            Building modern, maintainable digital products.
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
