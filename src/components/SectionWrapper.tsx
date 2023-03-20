import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import type { FC, PropsWithChildren } from "react";

interface SectionWrapperProps {
  sectionId: string;
  classNames?: string;
}
const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = (props) => {
  const { sectionId, classNames, children } = props;
  return children ? (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${classNames}`}
    >
      <span className="hash-span" id={sectionId}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  ) : null;
};
export default SectionWrapper;
