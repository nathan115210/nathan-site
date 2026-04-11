import { createMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/projects/project-grid";

export const metadata = createMetadata({
  title: "Projects",
  description: "Selected frontend, platform, and product interface projects by Nathan Zhao.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pb-14 lg:pt-24">
        <PageContainer>
          <div className="max-w-4xl">
            <Badge>Projects</Badge>
            <h1 className="mt-6 text-balance text-5xl text-text-primary sm:text-6xl lg:text-[5.75rem]">
              Case studies from product interfaces, UI systems, and platform delivery.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              A broader project index with category filters and more context than the homepage preview.
            </p>
          </div>
        </PageContainer>
      </section>
      <section className="pb-20 sm:pb-24 lg:pb-28">
        <PageContainer>
          <ProjectGrid projects={projects} enableFilters />
        </PageContainer>
      </section>
    </>
  );
}
