import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectImage1 from "../../public/images/projects/MT-shop.png";
import projectImage2 from "../../public/images/projects/Ecommerce-app.png";
import projectImage3 from "../../public/images/projects/gew.png";
import projectImage4 from "../../public/images/projects/portfolio.png";
import projectImage5 from "../../public/images/projects/old-portfolio.png";
import projectImage6 from "../../public/images/projects/Kanban.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
    relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className=" absolute top-0 -right-[1rem] -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 
    relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className=" absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%]
      sm:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-2xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className=" mt-2 flex items-center w-full justify-between">
          <Link
            href={link}
            target="blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Manohar | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className=" w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText
            text="Crafting Digital Experiences Excellently."
            className=" mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className=" col-span-12">
              <FeaturedProjects
                title="Ecommerce Website"
                img={projectImage1}
                summary="Experience Convenience, Choice, and Quality: Your Ultimate Shopping Destination for all Your Needs."
                link="https://mt-shop.vercel.app"
                github="/projects"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Ecommerce App"
                img={projectImage2}
                link="https://e-commeerce-app-nine.vercel.app/"
                github="https://github.com/mg0806/E-commeerce_App"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="GEW"
                img={projectImage3}
                link="https://www.guptaenggworks.com"
                github="https://github.com/mg0806/GuptaEngineeringWorks"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-12">
              <FeaturedProjects
                title="Portfolio"
                img={projectImage4}
                summary="Experience Convenience, Choice, and Quality: Your Ultimate Shopping Destination for all Your Needs."
                link="https://portfolio-manohar-guptas-projects.vercel.app/"
                github="https://github.com/mg0806/Portfolio"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Old-portfolio"
                img={projectImage5}
                link="https://mg0806.github.io/portfolio.gtihub.io/"
                github="https://github.com/mg0806/portfolio.gtihub.io"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12">
              <Project
                title="Kanban"
                img={projectImage6}
                link="https://kanban-tau-ruby.vercel.app/"
                github="https://github.com/mg0806/Kanban"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
