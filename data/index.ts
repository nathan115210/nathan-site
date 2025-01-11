import { ProjectItemProps } from "@/components/RecentProjects";

export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/projects" },
  { name: "Career", link: "/#career" },
  { name: "Contact", link: "#contact" },
];

export const aboutMeItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description:
      "I’m passionate about exploring new technologies and creating impactful, user-friendly applications. From mastering frameworks to solving real-world challenges, I love turning ideas into seamless digital solutions.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.png",
    spareImg: "",
    itemLink: "/projects",
    linkText: "View All",
  },
  {
    id: 2,
    title: "My tech stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    itemLink: "#skills",
    linkText: "Skills",
  },
  {
    id: 3,
    title: "My career journey",
    description:
      "My career is marked by collaborative efforts to develop web-based applications and improve product quality through code optimization and proactive problem-solving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    itemLink: "#career",
    linkText: "My career",
  },
  {
    id: 4,
    title:
      "Also enjoy creating small demos for fun while exploring new technologies.",
    label: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    itemLink: "/code-snippets",
    linkText: "My code snippets",
    img: "/grid.svg",
    spareImg: "/b2.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    label: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b3.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    label: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

enum TechName {
  TS = "TypeScript",
  JS = "JavaScript",
  React = "ReactJS",
  THREE = "ThreeJs",
  TAILWIND = "TailwindCSS",
  STENCIL = "StencilJS",
  ANGULAR = "Angular",
  JEST = "Jest",
  NODE = "NodeJs",
  GRAPHQL = "GraphQL",
  AEM = "AEM",
  GSAP = "GSAP",
  NEXT = "NextJS",
  DOCKER = "Docker",
  CONTENTFUL = "Contentful",
  CSS = "CSS",
  AZURE = "Azure",
  GATSBY = "Gatsby",
  SCSS = "SCSS",
}

const generateTechListWithName = (nameList: TechName[]): string[] => {
  return nameList.map((name) => {
    return "/techIcons/" + name + ".svg";
  });
};

export const projects: ProjectItemProps[] = [
  {
    title: "normalizedui - React UI Library",
    des: "normalizedui is a React component library which is made by typescript with React. Most components have their own unit testing made by jest. As well as been published on npm.",
    img: "/projects/npm.png",
    techList: generateTechListWithName([
      TechName.React,
      TechName.TS,
      TechName.JEST,
      TechName.NODE,
    ]),
    link: "https://www.npmjs.com/package/normalizedui",
    githubLink: "https://github.com/nathan115210/Normalized",
  },

  {
    title: "HMD",
    des: "New feature development and maintenance for HMD site, covering in 30+ languages across 80+ markets., using React Js, TypeScript and styled components as the main technologies for front-end development. and use Node.js, GraphQL, Contentful, and Azure Functions on the backend",
    img: "/career/hmd1.png",
    techList: generateTechListWithName([
      TechName.React,
      TechName.TS,
      TechName.JEST,
      TechName.CONTENTFUL,
      TechName.NODE,

      TechName.GRAPHQL,
    ]),
    link: "https://www.hmd.com",
  },
  {
    title: "HMD email Generator",
    des: "A fully customized email builder tool to streamline the creation of dynamic marketing campaigns and transactional HTML emails, covering over 40 + business scenarios in 30+ languages.",
    img: "/career/nokia2.png",
    techList: generateTechListWithName([
      TechName.React,
      TechName.TS,
      TechName.AZURE,
      TechName.CONTENTFUL,
      TechName.NODE,
      TechName.GRAPHQL,
    ]),
  },
  {
    title: "HMD Connect",
    des: "Marketing and subscription site for a roaming service that allows users to stay connected to the internet while traveling abroad. The site is built using Gatsby, TypeScript, SCSS and Contentful.",
    img: "/projects/hmd-connect.jpg",
    techList: generateTechListWithName([
      TechName.GATSBY,
      TechName.TS,
      TechName.SCSS,
      TechName.CONTENTFUL,
    ]),
  },
  {
    title: "DELL EMC",
    des: "Developing the new features, maintenance, Quality assurance and content management for Dell EMC and Dell technology sites based on content management platform Adobe Experience Manager(AEM), using JavaScript, CSS, and Handlebars",
    img: "/career/dell.png",
    techList: generateTechListWithName([
      TechName.JS,
      TechName.AEM,
      TechName.CSS,
      TechName.NODE,
    ]),
    link: "https://www.dell.com/en-us",
  },
];

export const skills = [
  {
    id: 1,
    title: "Frontend",
    desc: "TypeScript, JavaScript, ReactJS, NextJS, NuxtJS, Jest, Cypress, Angular, Vue.js, Gatsby, Astro, TailwindCSS, StencilJS",
    className: "md:col-span-2",
    thumbnail: "/skill-FE.svg",
  },
  {
    id: 2,
    title: "Backend",
    desc: "NodeJs, GraphQL, Restful APIs, MongoDB, MySQL, Wordpress, NestJs, Express, Prisma",
    className: "md:col-span-2",
    thumbnail: "/skill-BE.svg",
  },
  {
    id: 3,
    title: "Tooling",
    desc: "EsBuild, ViteJS, Docker, Git, Grunt, NVM, Jenkins",
    className: "md:col-span-2",
    thumbnail: "/tools.svg",
  },
  {
    id: 4,
    title: "Mobile",
    desc: "Kotlin, Swift, React Native, Flutter",
    className: "md:col-span-2",
    thumbnail: "/mobile.svg",
  },
  {
    id: 5,
    title: "Others",
    desc: "Emotion, Three.js, Contentful",
    className: "md:col-span-2",
    thumbnail: "/others.svg",
  },
];

export const socialMedia = [
  {
    img: "/git.svg",
    link: "https://github.com/nathan115210",
  },

  {
    img: "/link.svg",
    link: "https://www.linkedin.com/in/zhao-hongyu/",
  },
];

export const codeSnippets: ProjectItemProps[] = [
  {
    title: "Lorem Ipsum",
    des: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    img: "/career/dell.png",
    techList: generateTechListWithName([
      TechName.JS,
      TechName.AEM,
      TechName.CSS,
      TechName.NODE,
    ]),
    link: "Lorem Ipsum",
  },
];
