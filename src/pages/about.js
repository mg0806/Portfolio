import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Manohar | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className=" flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText
            text="Elevating Ideas into Digital Masterpieces"
            className=" mb-16 mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className=" grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className=" col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className=" font-medium">
                Welcome to my digital playground! With a keen eye for design and
                a love for coding, I&apos;m on a mission to create immersive
                online experiences. From elegant websites to user-friendly
                interfaces, I&apos;m here to transform your vision into reality.
              </p>
              <p className=" my-4 font-medium">
                At the heart of my portfolio lies a dedication to innovation and
                excellence. With a focus on user-centric design and cutting-edge
                technology, I bring ideas to life in the digital sphere.
                Let&apos;s collaborate and bring your vision to the online
                world!
              </p>
              <p className=" font-medium">
                As a website developer, I thrive on blending creativity with
                technical expertise. With a passion for crafting seamless
                digital experiences, I specialize in turning concepts into
                reality. From innovative designs to efficient coding, I&apos;m
                dedicated to exceeding expectations and delivering exceptional
                results.
              </p>
            </div>
            <div
              className=" col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light p-8
             dark:bg-dark md:order-1 md:col-span-8"
            >
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light/75" />
              <Image
                src={ProfilePic}
                alt="Profile Image"
                className=" w-full rounded-xl h-auto"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center ">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={400} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Hours of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
