import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

export default function Skills(props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current compentency
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-32">
        {props.skill.slice(0, props.skill.length/2).map((skill)=> {
          return (
            <Skill key={skill._id} skill={skill} directionLeft={true}/>
          )
        })}
        {props.skill.slice(props.skill.length/2, props.skill.length).map((skill)=> {
          return (
            <Skill key={skill._id} skill={skill} directionLeft={false}/>
          )
        })}
      </div>
    </motion.div>
  );
}
