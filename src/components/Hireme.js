import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className=" absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:-top-16 md:bottom-0 sm:right-0 sm:left-auto sm:-top-16 sm:bottom-16 ">
      <div className=" w-48 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText className=" fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:manohargupta0806@gmail.com"
          className=" flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-lg border border-solid border-dark w-20 h-20 rounded-full
          font-semibold hover:bg-light hover:text-dark  dark:bg-light
                    dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
