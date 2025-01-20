import { Card, LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";
import { codeSnippets } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";

export interface DemoItemProps {
  title: string;
  description: string;
  techList?: string;
  thumbnail: string;
  link: string;
}

const demoItem = ({ title, description, techList, link }: DemoItemProps) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
      {techList && (
        <p className="font-normal text-base text-amber-500">{techList}</p>
      )}
      <a href={link} target="_blank">
        <MagicButton
          title="Check it out"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

const demoData: Card[] = codeSnippets.map((item, index) => {
  return {
    id: index + 1,
    content: demoItem(item),
    className: `md:col-span-1`,
    thumbnail: item.thumbnail,
  };
});

const page = () => {
  return (
    <div className="h-screen py-20 w-full mt-16">
      <h2 className="heading">
        <span className="text-purple">Code snippets</span>
      </h2>
      <LayoutGrid cards={demoData} />
    </div>
  );
};

export default page;
