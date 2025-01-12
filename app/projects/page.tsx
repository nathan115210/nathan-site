import { projects } from "@/data";
import RecentProjects, { ProjectsProps } from "@/components/RecentProjects";

const page = () => {
  const recentProjectsData: ProjectsProps = {
    heading: "Projects",
    description:
      "These projects showcase my skills and experience through real-world examples, including personal and real business projects from the work.",
    items: projects,
  };
  return <RecentProjects {...recentProjectsData} />;
};

export default page;
