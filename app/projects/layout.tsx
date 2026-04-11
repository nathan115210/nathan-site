import SiteLayout from "@/components/layout/site-layout";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
