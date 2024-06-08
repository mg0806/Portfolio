import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toogle }) => {
  const router = useRouter();
  const handelClick = () => {
    toogle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handelClick}
    >
      {title}

      <span
        className={`h-[1px] bg-light dark:bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full px-32 py-8  font-medium flex items-center justify-between dark:text-light fixed top-0 left-0 z-10 dark:bg-dark  ${
        isScrolled
          ? " backdrop-blur-lg dark:backdrop-blur-md dark:bg-opacity-50"
          : "bg-transparent"
      } border border-solid border-primary dark:border-primaryDark border-b-4 border-l-0 border-r-0 border-t-0 lg:px-16 md:px-12 sm:px-8
       `}
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handelClick}
      >
        <span
          className={` bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen
              ? isScrolled
                ? "-translate-y-0.5"
                : " rotate-45 translate-y-1"
              : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? (isScrolled ? "opacity-100" : "opacity-0 ") : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen
              ? isScrolled
                ? "translate-y-0.5"
                : "-rotate-45 -translate-y-1"
              : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className=" mr-4" />
          <CustomLink href="/about" title="About" className=" mx-4" />
          <CustomLink href="/projects" title="Projects" className=" mx-4" />
          <CustomLink href="/articles" title="Articles" className=" ml-4" />
        </nav>
        <nav className=" flex items-center justify-center flex-wrap">
          <motion.a
            href="https://x.com/Manohar08062003"
            target="blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/mg0806"
            target="blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/manohar-gupta-118274224/"
            target="blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://in.pinterest.com/"
            target="blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3 bg-light rounded-full"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/ManoharGupta08?onboarding=true&designer=true"
            target="blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 ml-3"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={` ml-3 flex items-center  justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        isScrolled ? null : (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className=" fixed bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 rounded-lg min-w-[70vw] z-30 flex flex-col justify-between items-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <nav className=" flex items-center flex-col justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=" "
                toogle={handelClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=" "
                toogle={handelClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=" "
                toogle={handelClick}
              />
              <CustomMobileLink
                href="/articles"
                title="Articles"
                className=" "
                toogle={handelClick}
              />
            </nav>
            <nav className=" flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://www.google.com"
                target="blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=" w-6 mr-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://www.google.com"
                target="blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=" w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.google.com"
                target="blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=" w-6 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://www.google.com"
                target="blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=" w-6 mx-3 bg-light rounded-full sm:mx-1"
              >
                <PinterestIcon />
              </motion.a>
              <motion.a
                href="https://www.google.com"
                target="blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className=" w-6 ml-3 sm:mx-1"
              >
                <DribbbleIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={` ml-3 flex items-center  justify-center rounded-full p-1 ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>
        )
      ) : null}
      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
