"use client";

import type { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/cn";

const filters: ProjectCategory[] = [
  "all",
  "frontend",
  "fullstack",
  "experimental",
  "freelance",
];

type ProjectFilterProps = {
  active: ProjectCategory;
  onChange: (_category: ProjectCategory) => void;
};

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={`${filter}-${index}`}
          type="button"
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition duration-420 ease-editorial",
            active === filter
              ? "border-accent-primary/30 bg-accent-primary/12 text-accent-hover"
              : "border-text-primary/15 bg-bg-secondary text-text-secondary hover:border-accent-primary/40 hover:text-text-primary",
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
