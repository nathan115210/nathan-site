import xoompoint from "../assets/company/xoompoint.png";
import luxus from "../assets/company/luxus.png";
import luxid from "../assets/company/luxid.svg";
import { ExperiencesProps, ProjectProps, TitleProps } from "./types";
import web from "../assets/services/web.png";
import mobile from "../assets/services/mobile.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import nodejs from "../assets/tech/nodejs.png";
import threejs from "../assets/tech/threejs.svg";
import nextjs from "../assets/tech/nextjs.svg";
import mongodb from "../assets/tech/mongodb.png";
import jest from "../assets/tech/jest.png";
import graphQL from "../assets/tech/graphQL.svg";
import vuejs from "../assets/tech/vuejs.svg";
import gatsby from "../assets/tech/gatsby.svg";
import npm from "../assets/projects/npm.png";
import nokia from "../assets/projects/nokia.png";
import dell from "../assets/projects/dell.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const services: TitleProps[] = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
];
export const experiences: ExperiencesProps[] = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: luxid,
    bgColor: "#67eea2",
    textColor: "#000",
    date: "September 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript, Contentful, Node.js, and other related technologies.",
      "Building the eCommerce websites with Shopify and BigCommerce",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Developer",
    company_name: "Luxus Worldwide OY",
    icon: luxus,
    bgColor: "#001640",
    iconClassNames: "w-full h-full",
    date: "May 2017 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js, TypeScript, Contentful, Node.js, and other related technologies.",
      "Building the eCommerce websites with Shopify and BigCommerce",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "XOOMPOINT OY",
    icon: xoompoint,
    bgColor: "#676767",
    iconClassNames: "w-full h-full",
    date: "March 2017 – May 2017",
    description:
      "Website development activities in WordPress, in close cooperation with XoomPoint OY sales & marketing department.",
  },
];

export const technologies: TitleProps[] = [
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Vue Js",
    icon: vuejs,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Three JS",
    icon: threejs,
  },
  {
    title: "Next JS",
    icon: nextjs,
  },
  {
    title: "Gatsby",
    icon: gatsby,
  },
  {
    title: "GraphQL",
    icon: graphQL,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Jest",
    icon: jest,
  },
];

export const projects: ProjectProps[] = [
  {
    name: "normalizedui",
    description:
      "normalizedui is a React component library which is made by typescript with React. Most components have their own unit testing made by jest. As well as been published on npm.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Jest",
        color: "pink-text-gradient",
      },
    ],
    image: npm,
    source_code_link: "https://github.com/nathan115210/Normalized",
    case_study_link: "https://www.npmjs.com/package/normalizedui",
  },
  {
    name: "HMD",
    description:
      "New feature development and maintenance for Nokia mobile sites, covering in 30+ languages across 80+ markets., using React Js, TypeScript and styled components as the main technologies for front-end development. and use Node.js, Contentful, and Azure Functions on the backend",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "GraphQl",
        color: "text-pink-400",
      },
    ],
    image: nokia,
    case_study_link: "https://www.nokia.com/phones/en_gb",
  },
  {
    name: "DELL EMC",
    description:
      "Developing the new features, maintenance, Quality assurance and content management for Dell EMC and Dell technology sites based on content management platform Adobe Experience Manager(AEM), using JavaScript, CSS, and Handlebars",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "AEM",
        color: "pink-text-gradient",
      },
    ],
    image: dell,
    case_study_link: "https://www.dell.com/",
  },
];
