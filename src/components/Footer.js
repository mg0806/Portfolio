import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import ChatBot from "./ChatBot";

const Footer = () => {
  return (
    <footer
      className=" w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base"
    >
      <Layout className=" py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className=" flex items-center lg:py-2 ">
          Visit My Shop{" "}
          <span className=" text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link
            href="https://mt-shop.vercel.app"
            target="blank"
            className=" underline underline-offset-4"
          >
            MTSHOP
          </Link>
        </div>
      </Layout>
      <ChatBot />
    </footer>
  );
};

export default Footer;
