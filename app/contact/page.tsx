import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Nathan Zhao for senior software roles or selective web and mobile product work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <Badge>Contact</Badge>
            <h1 className="mt-6 text-balance text-5xl text-text-primary sm:text-6xl lg:text-[5.5rem]">
              Let&apos;s talk about senior software roles, web and mobile
              products, or product quality work.
            </h1>
            <p className="mt-6 text-base leading-7 text-text-secondary sm:text-lg">
              I&apos;m currently based in {siteConfig.location} and open to
              senior software opportunities plus a small number of consulting
              engagements across web and mobile.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-6 text-text-secondary">
              <p>Email: {siteConfig.email}</p>
              <p>GitHub: {siteConfig.githubUrl}</p>
              <p>LinkedIn: {siteConfig.linkedinUrl}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${siteConfig.email}`}>Email me</Button>
              <Button href={siteConfig.linkedinUrl} variant="secondary">
                Message on LinkedIn
              </Button>
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <h2 className="mt-4 text-3xl text-text-primary">
              Share the shape of the work.
            </h2>
            <ContactForm />
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
