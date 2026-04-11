"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/types/project";
import { filterProjectsByCategory } from "@/lib/project-utils";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilter } from "@/components/projects/project-filter";

type ProjectGridWithFiltersProps = {
  projects: Project[];
};

export function ProjectGridWithFilters({
  projects,
}: ProjectGridWithFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const visibleProjects = filterProjectsByCategory(projects, activeFilter);

  return (
    <div className="space-y-8">
      <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
      {visibleProjects.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
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
