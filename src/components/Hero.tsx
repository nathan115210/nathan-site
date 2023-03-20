import { motion } from "framer-motion";
import { styles } from "../styles";
/*import ComputersCanvas from "./canvas/ComputersCanvas";*/
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";

const Hero = () => {
  const { paddingX, heroHeadText, heroSubText } = styles;
  return (
    <SectionWrapper
      sectionId={"Hero"}
      classNames={"relative w-full h-64 mx-auto"}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-48 h-24 violet-gradient" />
        </div>

        <motion.div variants={textVariant()}>
          <h1 className={`${heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Zhao</span>
          </h1>
          <p className={`${heroSubText} mt-2 text-white-100`}>
            I develop web & mobile applications
          </p>
        </motion.div>
      </div>
      {/*<ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>*/}
    </SectionWrapper>
  );
};

export default Hero;
