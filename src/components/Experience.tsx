import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { FC } from "react";
import "react-vertical-timeline-component/style.min.css";
import { ExperiencesProps } from "../utils/types";
import { experiences } from "../utils/content";

const ExperienceCard: FC<ExperiencesProps> = (props) => {
  const {
    date,
    icon,
    bgColor,
    points,
    company_name,
    title,
    iconClassNames,
    textColor,
    description,
  } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: bgColor,
        color: textColor || "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
        overflow: "hidden",
      }}
      date={date}
      iconStyle={{ background: bgColor }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className={`${
              iconClassNames ? iconClassNames : "w-[80%] h-[80%]"
            }  object-contain`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{title}</h3>
        <p className=" text-[16px] font-semibold" style={{ margin: 0 }}>
          {company_name}
        </p>
      </div>

      {points && (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      )}
      {description && (
        <p className={"text-[14px] tracking-wider"}>{description}</p>
      )}
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <SectionWrapper sectionId={"experience"}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
