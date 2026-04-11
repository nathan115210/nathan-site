import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { Card } from "@/components/ui/card";
import { TagList } from "@/components/ui/tag-list";
import { isExternalLink } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col p-5 sm:p-6">
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg bg-bg-tertiary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition duration-420 ease-editorial group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mt-2 text-3xl text-text-primary">{project.name}</h3>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-5">
          <TagList items={project.stack} />
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-accent-hover transition hover:text-text-primary"
          >
            View case study
          </Link>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition hover:text-text-primary flex items-center"
            >
              Live Site{" "}
              {isExternalLink(project.liveUrl) && (
                <ExternalLink className="ml-1 text-xs opacity-70" size={12} />
              )}
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition hover:text-text-primary"
            >
              GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
