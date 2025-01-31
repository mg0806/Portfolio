import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ positions, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {positions}&nbsp;
          <a
            href={companyLink}
            target="blank"
            className=" text-primary capitalize underline underline-offset-8 dark:text-primaryDark"
          >
            @&nbsp;{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className=" my-64">
        <h2 className=" font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div ref={ref} className=" w-3/4 mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              positions="Sofware Developer Engineer"
              company="Hex Wireless"
              companyLink="https://hexwireless.com"
              time="July 2024 - Present"
              work="I have done my SDE internship at Hex Wireless Company, where I contribute to various 
              software development projects, enhancing my skills and gaining valuable industry experience"
            />
            <Details
              positions="Software Developer Intern"
              company="SVIT"
              companyLink="https://svitvasad.ac.in"
              time="May 2024 - July 2024"
              work="I worked as a software developer at SVIT Vasad, where I was responsible for developing and maintaining the 
              college's official website, ensuring its functionality and usability"
            />
            <Details
              positions="Website Secretary"
              company="Prakarsh24"
              companyLink="https://prakarsh.org"
              time="Jan 2024 - Feb 2024"
              work="As the website secretary for the national event 'Prakarsh' I oversee all aspects of the websites' functionality and content.
               From design to updates,my goal is to ensure a seamless digital experience for participants and attendees, reflecting the events'
               significance and fostering engagement across diverse audiences."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
