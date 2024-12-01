import { aboutMeItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const About = () => {
  return (
    <section id="about">
      <h2 className="pt-10 text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b  bg-opacity-50">
        About me
      </h2>
      <BentoGrid className="w-full py-10">
        {aboutMeItems.map((item, i) => {
          const {
            itemLink,
            linkText,
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
            label,
          } = item;

          return (
            <BentoGridItem
              id={id}
              key={i}
              title={title}
              label={label}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              link={itemLink}
              linkText={linkText}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default About;
