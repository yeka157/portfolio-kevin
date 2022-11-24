import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";

export default function About(props) {
  return (
    <motion.div
    initial={{
        opacity : 0
    }}
    whileInView={{opacity : 1}}
    transition={{duration : 1.5}}
    className="h-screen flex flex-col relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <div className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </div>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        // viewport={{ once: true }}
        src={urlFor(props.pageInfo?.profilePic)}
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:h-[600px] xl:w-auto"
      />
      <div className="space-y-10 px-0 md:px-10">
        <div className="text-4xl font-semibold">
          Get to know{" "}
          <span className="underline decoration-[#F7AB0A]/50">about me</span>
        </div>
        <div className="text-base">
          {props.pageInfo?.backgroundInformation ? props.pageInfo?.backgroundInformation : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          doloribus illo accusantium cumque provident eum consequuntur, sunt
          expedita dolorem ea minima distinctio. Laborum molestias rerum
          aspernatur magnam, culpa architecto quis!`}
        </div>
      </div>
    </motion.div>
  );
}
