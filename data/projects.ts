import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "easy-meal",
    name: "Easy Meal",
    summary:
      "Recipe discovery platform designed to make browsing, filtering, and exploring meal ideas feel fast, approachable, and easy to navigate.",
    domain: "Consumer web app",
    role: "Fullstack Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "fullstack",
    impact:
      "Built an end-to-end product experience that demonstrates frontend craftsmanship, reusable component design, and a maintainable fullstack foundation.",
    liveUrl: "https://hey-easy-meal.netlify.app/",
    githubUrl: "https://github.com/nathan115210/easy-meal",
    image: "/coming-soon.png",
    overview:
      "Easy Meal was created as a recipe platform to help users discover dishes, review ingredients, and move from inspiration to action through a clean and intuitive browsing experience.",
    challenges: [
      "Designing a content-rich product that still feels lightweight and easy to scan.",
      "Keeping the UI flexible and maintainable while iterating on layouts, states, and browsing patterns.",
    ],
    solutions: [
      "Structured the experience around reusable sections, recipe cards, and detail views to support scalable content presentation.",
      "Used TypeScript and component-driven development to make future iteration safer and easier to manage.",
    ],
    outcome: [
      "Delivered a portfolio-ready consumer product that highlights both product thinking and implementation quality.",
      "Created a strong foundation for future enhancements such as richer filtering, improved search, and expanded content.",
    ],
    learnings: [
      "Strong information hierarchy matters more than adding unnecessary UI complexity.",
      "Well-defined component boundaries make product iteration significantly faster.",
    ],
  },
  {
    slug: "normalized-ui",
    name: "Normalized UI",
    summary:
      "Reusable React component library built with TypeScript to improve consistency, testability, and shared UI foundations across projects.",
    domain: "UI library",
    role: "Owner and maintainer",
    stack: ["React", "TypeScript", "Jest", "Node.js", "npm"],
    category: "experimental",
    impact:
      "Published a reusable component package with typed APIs, unit test coverage, and a structure that supports design-system thinking.",
    liveUrl: "https://www.npmjs.com/package/normalizedui",
    githubUrl: "https://github.com/nathan115210/Normalized",
    image: "/projects/npm.png",
    overview:
      "Normalized UI was built as an exploration into turning repeated interface patterns into reusable React primitives with stronger typing and more confidence during refactoring.",
    challenges: [
      "Designing components that stay reusable without becoming overly abstract.",
      "Balancing API simplicity with flexibility, testability, and long-term maintainability.",
    ],
    solutions: [
      "Defined TypeScript-first component contracts with clear boundaries between structure, behavior, and styling.",
      "Added Jest coverage around core components to make refactoring safer as the library evolved.",
    ],
    outcome: [
      "Published the package to npm as a practical proof point of component architecture and reusable UI thinking.",
      "Strengthened confidence in designing shared component APIs that scale beyond a single product.",
    ],
    learnings: [
      "The best component libraries are shaped by restraint, naming clarity, and strong defaults.",
      "When the public API is the product, testing becomes especially valuable.",
    ],
  },
  {
    slug: "hmd-com",
    name: "HMD",
    summary:
      "Feature development and maintenance for a global multi-market website spanning 80+ markets and 30+ languages, including the transition from Nokia branding to HMD branding.",
    domain: "Enterprise web platform",
    role: "Frontend Developer",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Contentful",
      "Apollo Server",
      "BigCommerce",
      "Shopify",
      "Jest",
    ],
    category: "fullstack",
    featured: true,
    impact:
      "Supported large-scale international delivery and led rebranding work across website components and transactional email experiences covering more than 80 business scenarios.",
    liveUrl: "https://www.hmd.com",
    image: "/career/hmd3.png",
    overview:
      "At HMD, I contributed to feature development and maintenance across a large global web platform with complex localization, CMS, commerce, and release requirements. A key part of the work included transitioning the digital experience from Nokia branding to HMD branding.",
    challenges: [
      "Maintaining consistency across many markets, locales, and business-specific variations.",
      "Executing a large-scale rebrand safely across both website components and transactional communications.",
      "Shipping production changes in a stack that depended on frontend code, CMS content, backend services, and commerce integrations.",
    ],
    solutions: [
      "Built and updated React and TypeScript features with an emphasis on maintainability and safe iteration.",
      "Collaborated across engineering, content, and release workflows to support reliable rebranding and international delivery.",
      "Helped drive the transition of transactional email experiences from Nokia to HMD branding across more than 80 business scenarios.",
    ],
    outcome: [
      "Contributed to a stable and scalable global production experience.",
      "Successfully supported a high-visibility rebrand across critical customer-facing touchpoints.",
      "Strengthened delivery practices for localized, content-driven, and commerce-connected platform work.",
    ],
    learnings: [
      "Large-scale international platforms benefit from disciplined implementation patterns and cross-team collaboration.",
      "Brand transitions at scale require both technical precision and operational coordination.",
    ],
  },
  {
    slug: "nokia-phones",
    name: "Nokia Phones",
    summary:
      "Foundational work on the Nokia Phones website, including platform launch support, commerce integration, and essential utilities for a global customer experience.",
    domain: "Consumer commerce platform",
    role: "Frontend Developer",
    stack: [
      "React",
      "TypeScript",
      "MobX",
      "Contentful",
      "Node.js",
      "Shopify",
      "BigCommerce",
    ],
    category: "fullstack",
    featured: true,
    impact:
      "Played a key role in launching the first Nokia Phones website for HMD Global, helping connect core systems and enable a smoother buying journey.",
    image: "/career/nokia.png",
    overview:
      "This work focused on launching and evolving the Nokia Phones website, combining frontend development with platform integrations that supported product browsing, commerce flows, and international accessibility.",
    challenges: [
      "Supporting a large product launch while integrating multiple systems into one user journey.",
      "Keeping the platform stable and accessible for a global audience.",
      "Connecting commerce capabilities without compromising the overall customer experience.",
    ],
    solutions: [
      "Contributed to the launch of the Nokia Phones website by implementing frontend features and platform integrations.",
      "Integrated two e-commerce platforms to support a smoother purchase flow.",
      "Developed and maintained essential utilities that improved accessibility and operational reliability across the site.",
    ],
    outcome: [
      "Helped deliver the inaugural Nokia Phones web experience for HMD Global.",
      "Improved the connected buying journey through better integration across commerce systems.",
      "Built strong experience in shipping consumer-facing product work at international scale.",
    ],
    learnings: [
      "Successful platform launches depend heavily on system integration quality, not just UI implementation.",
      "Global product delivery becomes much easier when supporting utilities are treated as first-class engineering work.",
    ],
  },
  {
    slug: "hmd-subscription",
    name: "HMD Subscription",
    summary:
      "Subscription and account-management experience integrating frontend, payments, CRM, and subscription systems to support a connected customer journey.",
    domain: "Subscription platform",
    role: "Frontend Developer",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Contentful",
      "Zuora",
      "Adyen",
      "GraphQL",
      "Azure DevOps",
    ],
    category: "fullstack",
    featured: true,
    impact:
      "Expanded the product platform to support subscriptions, account management, payment integration, and transactional customer communication across 40+ scenarios.",
    image: "/projects/hmd-subscriptions.jpeg",
    overview:
      "This project extended the Nokia Phones ecosystem into subscription-based offerings, requiring coordination between frontend experiences, payment flows, CRM integrations, and customer lifecycle communications.",
    challenges: [
      "Extending an existing product ecosystem to support subscription-based business flows.",
      "Coordinating data across frontend, CRM, subscription billing, and payment systems.",
      "Designing customer account experiences and transactional communication for a more complex product journey.",
    ],
    solutions: [
      "Extended the Product Information Management system to support subscription offerings.",
      "Integrated frontend workflows with CRM and Zuora to streamline customer data flow.",
      "Implemented Adyen payment support and developed account management interfaces for subscription users.",
      "Designed and developed transactional email experiences for more than 40 business scenarios.",
    ],
    outcome: [
      "Enabled subscription capabilities within the broader product platform.",
      "Delivered a more complete customer journey spanning sign-up, payment, account management, and lifecycle communication.",
      "Demonstrated strong experience with product integration across multiple business systems.",
    ],
    learnings: [
      "Subscription products require careful thinking across lifecycle, billing, and customer support touchpoints.",
      "The quality of system integration has a direct impact on the user experience.",
    ],
  },
  {
    slug: "hmd-global-internal-site",
    name: "HMD Global Internal Website",
    summary:
      "Internal company website redevelopment focused on performance, maintainability, content structure, and a more effective information experience.",
    domain: "Internal platform",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "GraphQL", "Contentful", "Node.js"],
    category: "fullstack",
    featured: false,
    impact:
      "Owned development and maintenance of the internal site, improving performance, content structure, and long-term maintainability through refactoring and redesign work.",
    image: "/projects/hmd-global.png",
    overview:
      "The HMD Global internal website supported internal communication and information access, and the work focused on modernizing the experience while making the underlying implementation easier to maintain.",
    challenges: [
      "Improving performance and maintainability in an actively used internal platform.",
      "Restructuring content models and information architecture without disrupting day-to-day usage.",
    ],
    solutions: [
      "Refactored and optimized the codebase to improve maintainability and performance.",
      "Implemented a new design and improved the content model structure to make information easier to manage and access.",
    ],
    outcome: [
      "Delivered a more maintainable internal platform with improved usability and content organization.",
      "Showed ownership in both feature work and longer-term product quality improvements.",
    ],
    learnings: [
      "Internal products benefit greatly from thoughtful information architecture and performance improvements.",
      "Refactoring is most valuable when it improves both developer experience and end-user clarity.",
    ],
  },
  {
    slug: "hmd-email-generator",
    name: "HMD Email Generator",
    summary:
      "Internal email-building tool developed to support HMD’s marketing and transactional email programs at scale, improving efficiency, consistency, and delivery quality.",
    domain: "Internal marketing platform",
    role: "Fullstack Developer",
    stack: [
      "React",
      "TypeScript",
      "Azure Functions",
      "Contentful",
      "Vite",
      "Axios",
    ],
    category: "fullstack",
    featured: true,
    impact:
      "Took ownership of developer-facing implementation for HMD’s marketing and transactional email workflows, helping streamline production processes and improve both efficiency and quality across dynamic email delivery.",
    image: "/career/nokia3.png",
    overview:
      "The HMD Email Generator was built as an internal tool to streamline the creation of dynamic marketing emails and transactional templates. My work focused on making the workflow more scalable, maintainable, and reliable for teams producing email content across multiple scenarios.",
    challenges: [
      "Supporting dynamic email generation without making the authoring experience brittle or difficult to use.",
      "Keeping template logic and content structure manageable as complexity increased.",
      "Improving workflow efficiency while maintaining consistency and output quality across email programs.",
    ],
    solutions: [
      "Built a React and TypeScript authoring experience around reusable modules and predictable content structures.",
      "Integrated the tool with supporting services and content workflows to improve editing and generation efficiency.",
      "Approached the email system with a strong ownership mindset, refining implementation details that helped make the workflow more dependable and easier to scale.",
    ],
    outcome: [
      "Created a practical internal product that streamlined dynamic email production.",
      "Improved repeatability, consistency, and quality in marketing and transactional email workflows.",
      "Strengthened the operational foundation for delivering email content more efficiently across the business.",
    ],
    learnings: [
      "Internal tooling should be treated with the same UX and maintainability discipline as customer-facing products.",
      "Clear template rules and reusable structures are essential in content-heavy systems.",
    ],
  },
  {
    slug: "hmd-connect",
    name: "HMD Connect Service",
    summary:
      "Marketing and subscription website for an international roaming service, designed to support clear product storytelling and conversion.",
    domain: "Marketing platform",
    role: "Frontend Developer",
    stack: ["Gatsby", "React", "TypeScript", "Contentful"],
    category: "fullstack",
    featured: false,
    impact:
      "Delivered a polished content-driven experience that combined marketing communication, subscription messaging, and maintainable CMS-backed frontend architecture.",
    image: "/projects/hmd-connect.jpg",
    overview:
      "HMD Connect Service focused on explaining an international roaming offering clearly and helping users move toward subscription with confidence.",
    challenges: [
      "Balancing product storytelling with maintainable implementation and editor-friendly content workflows.",
      "Keeping performance and responsiveness strong in a content-rich marketing experience.",
    ],
    solutions: [
      "Built a static-first frontend experience using Gatsby and TypeScript for predictable performance.",
      "Structured components around reusable content patterns that aligned well with CMS-managed publishing.",
    ],
    outcome: [
      "Delivered a stable and production-ready marketing experience for a real commercial service.",
      "Strengthened experience building content-driven sites that support both business communication and maintainability.",
    ],
    learnings: [
      "Marketing sites still benefit from strong engineering discipline.",
      "Content model quality has a major effect on CMS-driven frontend maintainability.",
    ],
  },
  {
    slug: "dell-technologies",
    name: "Dell Technologies",
    summary:
      "Frontend feature development, UI logic, and content-platform work within Adobe Experience Manager for a large enterprise web ecosystem.",
    domain: "Enterprise content platform",
    role: "Frontend Developer",
    stack: ["JavaScript", "CSS", "Vue.js", "AEM", "Node.js"],
    category: "fullstack",
    impact:
      "Supported enterprise-scale web delivery through frontend implementation, content integration, and dependable work within a mature publishing environment.",
    liveUrl: "https://www.dell.com/en-us",
    image: "/career/dell.png",
    overview:
      "At Dell Technologies, I worked on frontend implementation and logic for web experiences powered by Adobe Experience Manager, contributing to enterprise-scale content delivery and site maintenance.",
    challenges: [
      "Building and maintaining frontend features within the constraints of a mature enterprise CMS.",
      "Keeping implementation stable and production-safe inside a large publishing workflow.",
    ],
    solutions: [
      "Developed UI and application logic using JavaScript, Vue.js, and AEM-compatible patterns.",
      "Worked within enterprise publishing processes to keep feature delivery dependable and content updates accurate.",
    ],
    outcome: [
      "Delivered production-ready frontend work across a large enterprise web environment.",
      "Built a strong foundation in CMS-driven development and large-scale content-platform workflows.",
    ],
    learnings: [
      "Enterprise platforms demand precision, patience, and strong awareness of process constraints.",
      "Stable delivery depends on understanding both code and publishing operations.",
    ],
  },
];
