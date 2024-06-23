"use client";

import React, { useState } from "react";
import { Highlight } from "../ui/hero-highlight";
import { ContactForm } from "../ui/contact-form";

const Contact = () => {
  const fetchData = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
    });
    const data = await res.json();
  };

  return (
    <div className="flex flex-col">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <Highlight className="text-black dark:text-white">Contact</Highlight>
        <span>Me</span>
      </div>
      <div className="py-10 px-5 w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-center ">
          You may contact me directly at <u>jamesmatthewbelgica@gmail.com</u> or
          through this form
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
