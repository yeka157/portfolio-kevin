import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div 
    initial={{
      opacity : 0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius:["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
      duration:2.5,
    }}
    className="relative flex justify-center items-center">
      <div className="border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-ping absolute" />
      <div className="rounded-full border-[#333333] h-[350px] w-[350px] absolute mt-52" />
      <div className="rounded-full border-[#333333] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#FAFAFA] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
}
