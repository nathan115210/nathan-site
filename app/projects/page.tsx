import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
