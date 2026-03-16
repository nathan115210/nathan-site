import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TagList } from "@/components/ui/tag-list";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { MoveLeft } from "lucide-react";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="max-w-4xl">
      <Link
        href="/projects"
        className="text-text-secondary transition hover:text-text-primary flex mb-6 items-center gap-3"
      >
        <MoveLeft />
        Back to all projects
      </Link>
      <Badge>{project.domain}</Badge>
      <h1 className="mt-6 text-balance text-4xl text-text-primary sm:text-5xl lg:text-6xl">
        {project.name}
      </h1>
      <p className="mt-6 text-lg leading-8 text-text-secondary">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-secondary">
        <span>Role: {project.role}</span>
        <span className="capitalize">Category: {project.category}</span>
      </div>
      <div className="mt-6">
        <TagList items={project.stack} />
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        {project.liveUrl ? (
          <Button href={project.liveUrl}>Live Demo</Button>
        ) : null}
        {project.githubUrl ? (
          <Button href={project.githubUrl} variant="secondary">
            GitHub
          </Button>
        ) : null}
      </div>
    </div>
  );
}
