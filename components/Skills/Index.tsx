import React from "react";
import { Highlight } from "../ui/hero-highlight";

const Skill = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Skills</Highlight>
      </div>
    </div>
  );
};

export default Skill;
