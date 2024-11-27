import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="mt-40">
      <h2 className="heading">
        <span className="text-purple">Projects</span>
      </h2>
      <div
        className={
          "flex flex-col items-center p-4 max-w-4xl pb-20 mx-auto relative z-10  w-full"
        }
      >
        <p className="lg:text-xl lg:font-normal font-light text-sm">
          These projects showcase my skills and experience through real-world
          examples, including personal and real business projects from the work.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-60	gap-y-8 max-lg:gap-y-32 mt-10">
        {projects.map((item, index) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[500px] w-[80vw]"
            key={index}
          >
            <PinContainer link={item.link} enableAnimation={!item.githubLink}>
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {item.githubLink && (
                <div className="flex items-center justify-items-end mb-3">
                  <Link href={item.githubLink} target={"_blank"}>
                    <MagicButton
                      title="Github"
                      icon={<FaLocationArrow />}
                      position="right"
                    />
                  </Link>
                </div>
              )}
              <div className="flex items-center justify-items-end mt-7 mb-3">
                <div className="flex items-center grow">
                  {item.techList.map((item, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={item} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
