import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <SiteHeader />
      <main className="relative overflow-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}
