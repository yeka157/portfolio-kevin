import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";

export default function Projects(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col overflow-hidden relative text-left
    md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly mx-auto items-center z-0"
    >
      <div className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
        {props.project?.map((project, idx) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen md:p-44"
              key={idx + 1}
            >
              <motion.img
                initial={{
                  y : -300,
                  opacity :0
                }}
                transition={{duration:1.2}}
                whileInView={{opacity :1, y:0}}
                viewport={{once:true}}
                src={project.image ? urlFor(project.image).url() : 
                  "https://media-exp1.licdn.com/dms/image/C5603AQHqijyXCfpZ0A/profile-displayphoto-shrink_200_200/0/1604970869670?e=1672876800&v=beta&t=Fm5yYMwoTDEDckp-fgZGwTOt1rUTPH5cBC5ve6kQzHI"}
                alt=""
                className="w-auto max-h-72"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <div className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case study {idx + 1} of {props.project.length}: 
                  </span>{" "}
                  {project.title}
                </div>

                <div className="flex items-center space-x-2 justify-center">
                {project.technologies ? project?.technologies?.map((tech)=> {
                  return (
                    <img 
                    className='h-10 w-10 rounded-full'
                    key={tech._id} src={tech.image ? urlFor(tech.image).url() : ''} alt=''/>
                  )
                }) : <></>}
                </div>

                <div className="text-lg text-center md:text-left">
                  {project.summary ? project.summary : 
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum natus fuga dicta laudantium, quidem reprehenderit
                  veniam optio mollitia repudiandae voluptatum ad qui culpa est,
                  eos cumque sint obcaecati nihil dolore.`}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
