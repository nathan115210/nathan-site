import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-36">
      <div className="h-full w-full rounded-md md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="white"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="white"
          />
        </div>
        <div className="flex flex-col items-center p-4 max-w-7xl pb-20 mx-auto relative z-10  w-full">
          <TextGenerateEffect words="" />
          <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            Hi! I'm Zhao
          </h2>
          <TextGenerateEffect
            highlightWords={["web", "mobile"]}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b  bg-opacity-50"
            words="I develop web and mobile applications"
          />

          <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
            With years of experience as a developer, I am driven by a continual
            love of learning and innovation. My career is marked by
            collaborative efforts to develop web-based applications and improve
            product quality through code optimization and proactive
            problem-solving.
          </p>
          <a href="#about" className="mt-10">
            <MagicButton
              title="Learn more"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
