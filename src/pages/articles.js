import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/create modal component in react using react portals.png";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImage = ({ title, image, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageref = useRef(null);

  function handelMouse(event) {
    imageref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handelMouseLeave(event) {
    imageref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="blank"
      onMouseMove={handelMouse}
      onMouseLeave={handelMouseLeave}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        style={{ x: x, y: y }}
        ref={imageref}
        src={image}
        alt={title}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
      viewport={{ once: true }} //this is used to load animation just once during page load only.
      className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid
       border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImage title={title} image={img} link={link} />
      <span className=" text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className=" col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      <div className=" absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Link
        href={link}
        target="blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className=" text-sm mb-2">{summary}</p>
      <span className=" text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Manohar | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText
            text="Words that Illuminate: Unveiling Insights, Inspiring Minds."
            className=" my-14 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className=" grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={article1}
            />

            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
            scratch. Follow this step-by-step guide to integrate Pagination
            component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              date="14 April 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article4}
              date="14 April 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              date="14 April 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling
"
              img={article3}
              date="14 April 2024"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
