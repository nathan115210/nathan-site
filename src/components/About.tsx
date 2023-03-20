import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Direction, TitleProps, TransitionType } from "../utils/types";
import SectionWrapper from "./SectionWrapper";
import { services } from "../utils/content";

interface ServiceCardProps extends TitleProps {
  index: number;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt
    gyroscope={true}
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    className="xs:w-1/3  w-full"
  >
    <motion.div
      variants={fadeIn({
        direction: Direction.RIGHT,
        type: TransitionType.SPRING,
        delay: index * 0.5,
        duration: 0.75,
      })}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <SectionWrapper sectionId={"about"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({
          direction: "",
          type: "",
          delay: 0.1,
          duration: 1,
        })}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled developer with experience in JavaScript and TypeScript,
        and expertise in frameworks like React.js, Vue.js, and node.js. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};
export default About;
