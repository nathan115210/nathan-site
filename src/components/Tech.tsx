import SectionWrapper from "./SectionWrapper";
import { technologies } from "../utils/content";
import BallCanvas from "./canvas/BallCanvas";
import React from "react";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <SectionWrapper sectionId={"tech"}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>
      <div className={"flex flex-row flex-wrap justify-center gap-10 mt-20"}>
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.title}>
            <BallCanvas icon={technology.icon} />

            <h3 className="text-white text-[15px] font-bold text-center">
              {technology.title}
            </h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
