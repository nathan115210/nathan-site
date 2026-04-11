export const siteConfig = {
  name: "Hongyu Zhao",
  title: "Senior Developer",
  location: "Helsinki, Finland",
  email: process.env.EMAIL_ADDRESS || "zhaohongyu115210@gmail.com",
  description:
    "Passionate about  developing web and mobile applications with a strong emphasis on quality, maintainability, and continuous improvement. With 8+ years of experience in software development, I’m driven by a genuine passion for learning and innovation. Throughout my career, I’ve collaborated on digital products, improved code quality through optimization, and tackled technical challenges with proactive, thoughtful problem-solving.",
  githubUrl: "https://github.com/nathan115210",
  linkedinUrl: "https://www.linkedin.com/in/zhao-hongyu/",
  resumeUrl: "https://www.linkedin.com/in/zhao-hongyu/",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { href: siteConfig.githubUrl, label: "GitHub" },
];

export const proofPoints = [
  "8+ years of experience building modern, maintainable software products.",
  "Driven by continuous learning, I focus on building better products through collaboration, code quality, and pragmatic problem-solving.",
  "Comfortable across web and mobile, I build products that balance usability, maintainability, and technical quality.",
  "My core skills span frontend and backend web development, React Native, and native iOS development with SwiftUI.",
];

export const tools = [
  {
    title: "Web frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML / CSS",
    ],
  },
  {
    title: "Web backend",
    items: ["Node.js", "TypeScript", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Mobile development",
    items: [
      "React Native",
      "Expo",
      "Cross-platform apps",
      "Product-focused UX",
    ],
  },
];
