import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";

export default function Skill(props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: props.directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={props.skill? urlFor(props.skill?.image).url() : 
          "data:image/png;base64,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"}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{props.skill? props.skill.progress : '50'}%</p>
        </div>
      </div>
    </div>
  );
}
