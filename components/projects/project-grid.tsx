"use client";

import { useState } from "react";
import type { Project } from "@/types/project";
import type { ProjectCategory } from "@/types/project";
import { filterProjectsByCategory } from "@/lib/project-utils";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGridProps = {
  projects: Project[];
  enableFilters?: boolean;
};

export function ProjectGrid({
  projects,
  enableFilters = false,
}: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const visibleProjects = enableFilters
    ? filterProjectsByCategory(projects, activeFilter)
    : projects;

  return (
    <div className="space-y-8">
      {enableFilters ? (
        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
      ) : null}
      {visibleProjects.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="surface-panel rounded-[2rem] px-6 py-8 text-sm text-text-secondary">
          No projects match this filter yet.
        </div>
      )}
    </div>
  );
}
