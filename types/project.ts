export type ProjectCategory =
  | "all"
  | "frontend"
  | "fullstack"
  | "experimental"
  | "freelance";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  domain: string;
  role: string;
  stack: string[];
  category: Exclude<ProjectCategory, "all">;
  featured?: boolean;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  outcome: string[];
  learnings: string[];
};
