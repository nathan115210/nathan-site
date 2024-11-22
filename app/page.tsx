"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Career } from "@/components/Career";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Skills />
        <Career />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
