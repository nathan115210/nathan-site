import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectGridWithFilters } from "@/components/projects/project-grid-with-filters";

type ProjectGridProps = {
  projects: Project[];
  enableFilters?: boolean;
};

export function ProjectGrid({
  projects,
  enableFilters = false,
}: ProjectGridProps) {
  if (enableFilters) {
    return <ProjectGridWithFilters projects={projects} />;
  }

  return (
    <div className="space-y-8">
      {projects.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-text-primary/10 bg-bg-secondary px-6 py-8 text-sm text-text-secondary">
          No projects match this filter yet.
        </div>
      )}
    </div>
  );
}
