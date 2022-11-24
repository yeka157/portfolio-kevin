import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero(props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name is ${props.pageInfo.name}`,
      "You can call me Kevin :)",
      `${props.pageInfo?.role}`,
    ],
    loop: true,
    delaySpeed: 1500,
  });
  
  
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(props.pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <div className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {props.pageInfo?.role}
        </div>
        <div className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#FAFAFA" />
        </div>

        <div className="pt-5 ">
          <Link href="#about">
            <button className="profileButton">About</button>
          </Link>
          {/* <Link href="#experience">
            <button className="profileButton">Experience</button>
          </Link> */}
          <Link href="#skills">
            <button className="profileButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="profileButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
