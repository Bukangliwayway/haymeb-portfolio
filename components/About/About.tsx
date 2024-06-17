import React from "react";
import { Highlight } from "../ui/hero-highlight";

const About = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="font-main-hero capitalize text-5xl text-center relative top-20 mx-auto flex gap-2 justify-center items-center">
        <span>About</span>
        <Highlight className="text-black dark:text-white">Haymeb</Highlight>
      </div>
      <div className="flex gap-5 justify-center items-center my-auto">
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse
          suscipit voluptatem cumque enim fuga facere harum fugit sequi
          similique.
        </p>
      </div>
    </div>
  );
};

export default About;
