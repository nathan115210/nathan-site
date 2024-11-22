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
    img: "/b1.svg",
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
    title: "Tech enthusiast with a passion for development.",
    label: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    label: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
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

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://twitter.com/mannupaaji",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
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
