import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Web Backend",
    items: [
      "Node.js",
      "REST APIs",
      "OpenAPI",
      "Prisma",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Expo", "Cross-platform app development"],
  },
  {
    title: "Native iOS",
    items: ["Swift", "SwiftUI", "UIKit familiarity"],
  },
  {
    title: "Quality & Engineering",
    items: [
      "Jest",
      "Cypress",
      "Unit testing",
      "Code optimization",
      "Component architecture",
      "CI/CD",
    ],
  },
];
