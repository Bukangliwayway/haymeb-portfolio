import React from "react";
import { Highlight } from "../ui/hero-highlight";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Contacts</Highlight>
      </div>
    </div>
  );
};

export default Contact;
