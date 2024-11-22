import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";
import { LinkPreview } from "./ui/LinkPreview";

export function Career() {
  const data = [
    {
      time: "June 2024 - Present",
      title: "Senior Developer",
      companyName: "Nordea",
      content: (
        <section id={"career"} className="mb-8 flex flex-col gap-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
            &#x270c;{" "}
            <div>
              Develop and maintenance the Nordea's responsive hybrid (web and
              mobile) application, impacting millions of users across four
              Nordic countries.
            </div>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
            &#x270c;{" "}
            <div>
              Closely involved in design and design pattern development at
              Nordea to ensure scalable and efficient solutions.
            </div>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
            &#x270c;{" "}
            <div>
              Oversaw all frontend features and refined user experience (UX).
            </div>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
            &#x270c;{" "}
            <div>
              Built Jenkins automated pipelines to streamline release and
              upgrade processes, significantly reducing release time.
            </div>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
            &#x270c;{" "}
            <div>
              Ensured compliance with accessibility standards, maintaining a 90%
              accessibility level.
            </div>
          </div>
        </section>
      ),
    },
    {
      time: "March 2017 - May 2024",
      title: "Senior Developer",
      companyName: "Luxus Worldwide Oy / Luxid group Oy",
      content: (
        <div>
          <div className="mb-8 flex flex-col gap-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Successfully transitioned website components from Nokia branding
                to{" "}
                <LinkPreview url="https://www.hmd.com/fi_fi/smartphones">
                  hmd.com
                </LinkPreview>
                . Spearheaded the development team in rebranding all
                transactional emails from Nokia to HMD branding, encompassing
                over 80 business scenarios.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Lead the development team of frontend automation test and unit
                tests
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Lead the development team of transactional emails for{" "}
                <em className="text-white">HMD and Nokia phones</em>, ensuring
                seamless communication and enhancing user engagement throughout
                the customer journey. Owned the development of project.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/career/hmd1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/hmd2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/hmd3.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/hmd4.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      time: "May 2017 - March 2024",
      title: "Developer",
      companyName: "Luxus Worldwide Oy / Luxid group Oy",
      content: (
        <div>
          <div className="mb-8 flex flex-col gap-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Owned the development of{" "}
                <em className="text-white">Nokia Phones: Subscription</em>{" "}
                project . Enhanced PIM with subscription support, integrated
                CRM, Zuora, and Adyen, built an account management interface,
                and crafted transactional emails for 40+ scenarios to improve
                customer experience.
              </div>
            </div>

            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Played a key role in client projects
                <em className="text-white font-bold underline">
                  HMD Connect Service
                </em>
                , <em className="text-white font-bold underline">HMD Global</em>{" "}
                and{" "}
                <em className="text-white font-bold underline">Nokia phones</em>
                , in launching the inaugural Nokia Phones website for HMD
                Global, integrating critical systems for a seamless user
                experience. Successfully integrated two e-commerce platforms,
                enabling a smooth buying journey for customers. Developed and
                maintained essential utilities, ensuring global website
                accessibility.
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm">
              &#x270c;{" "}
              <div>
                Developed the UI and logic of the{" "}
                <LinkPreview url="https://www.dell.com/en-us">
                  Dell Technologies
                </LinkPreview>{" "}
                web application utilizing Adobe Experience Manager (AEM),
                Javascript, and Vue.js
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/career/nokia1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/nokia2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/nokia3.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/career/dell.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      time: "March 2017 – May 2017",
      title: "Web Developer",
      companyName: "XOOMPOINT Oy",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Collaborated closely with XoomPoint OY's sales and marketing
            department on WordPress website development projects.
          </p>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full" id="#workExperience">
      <h2 className="heading">
        My <span className="text-purple">career</span>
      </h2>
      <Timeline data={data} />
    </section>
  );
}
