import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug } from "@/lib/project-utils";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectHero } from "@/components/projects/project-hero";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Project not found",
      path: "/projects",
    });
  }

  return createMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <PageContainer>
        <ProjectHero project={project} />
        <div className="surface-panel mt-10 overflow-hidden rounded-[2rem] border border-border-strong/12">
          <div className="relative aspect-[16/9] bg-bg-secondary">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 76rem, 100vw"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CaseStudySection title="Overview" body={project.overview} />
          <CaseStudySection
            title="Impact"
            body={project.impact}
            items={project.outcome}
          />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CaseStudySection title="Challenges" items={project.challenges} />
          <CaseStudySection title="Solutions" items={project.solutions} />
        </div>
        <div className="mt-6">
          <Card>
            <p className="eyebrow">Learning</p>
            <h2 className="mt-4 text-3xl text-text-primary">
              What this project reinforced
            </h2>
            <ul className="mt-5 space-y-3 text-text-secondary">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="border-l border-accent-primary/25 pl-4 leading-7"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}
