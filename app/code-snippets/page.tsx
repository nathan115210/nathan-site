import { codeSnippets } from "@/data";
import RecentProjects, { ProjectsProps } from "@/components/RecentProjects";

const page = () => {
  const codeSnippetsData: ProjectsProps = {
    heading: "Code snippets",
    description:
      "These code snippets are either inspired by challenges from my daily work or by other awesome developers online. Mainly for fun and exploring more potential, fancy things.",
    items: codeSnippets,
  };
  return <RecentProjects {...codeSnippetsData} />;
};

export default page;
