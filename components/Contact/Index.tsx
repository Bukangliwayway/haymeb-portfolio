"use client";

import React, { useState } from "react";
import { Highlight } from "../ui/hero-highlight";

const Contact = () => {
  const fetchData = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
    });
    const data = await res.json();

    console.log(data); // { name: "John Doe" }
  };

  return (
    <div className="flex flex-col">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Contacts</Highlight>
      </div>
      <button
        className="bg-white text-black p-2 rounded-md mt-4 mx-auto"
        onClick={fetchData}
      >
        CLick me babyy
      </button>
    </div>
  );
};

export default Contact;
