import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/project";

export function filterProjectsByCategory(
  items: Project[],
  category: ProjectCategory,
) {
  if (category === "all") {
    return items;
  }

  return items.filter((project) => project.category === category);
}

export function getFeaturedProjects(items: Project[], limit = 3) {
  return items.filter((project) => project.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
