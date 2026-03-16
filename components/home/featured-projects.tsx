import { projects } from "@/data/projects";
import { getFeaturedProjects } from "@/lib/project-utils";
import { SectionShell } from "@/components/layout/section-shell";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  return (
    <SectionShell id="projects" title="Recent Projects">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-6 text-text-secondary">
          A curated selection of projects that showcases the product thinking
          behind each build. Spanning consumer-facing interfaces, frontend
          systems, and large-scale platform delivery, these case studies
          highlight the decisions, constraints, and implementation choices that
          shaped the final outcome.
        </p>
        <Button href="/projects" variant="secondary">
          View all projects
        </Button>
      </div>
      <ProjectGrid projects={getFeaturedProjects(projects)} />
    </SectionShell>
  );
}
