import { AboutSection } from "@/components/home/about-section";
import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { ToolsSection } from "@/components/home/tools-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <ToolsSection />
      <ContactCta />
    </>
  );
}
