import React from "react";
import { Highlight } from "../ui/hero-highlight";
import { AboutSlider } from "../ui/about-slider";
import Story from "./Story";

const About = () => {
  const images = [
    "/abouts/about3.webp",
    "/abouts/about4.webp",
    "/abouts/about6.webp",
    "/abouts/about7.webp",
    "/abouts/about8.webp",
    "/abouts/about5.webp",
    "/abouts/about1.webp",
    "/abouts/about2.webp",
    "/abouts/about9.webp",
    "/abouts/about10.webp",
    "/abouts/about11.webp",
    "/abouts/about12.webp",
    "/abouts/about13.webp",
    "/abouts/about14.webp",
    "/abouts/about15.webp",
  ];
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="z-50 font-main-hero capitalize text-5xl text-center relative top-20 mx-auto flex gap-2 justify-center items-center">
        <span>About</span>
        <Highlight className="text-black dark:text-white">Haymeb</Highlight>
      </div>
      <AboutSlider images={images}>
        <div className="z-50 flex gap-10 justify-center items-center my-auto flex-col">
          <div className="mt-20 lg:w-1/2">
            <p className="px-[5ch] leading-7">
              As a seasoned{" "}
              <span className="mx-2">
                <Highlight className="">full-stack developer</Highlight>
              </span>{" "}
              I've spent{" "}
              <span className="mx-2">
                <Highlight className="">3 years</Highlight>
              </span>{" "}
              crafting web systems. Specializing in{" "}
              <span className="mx-2">
                <Highlight className="">React</Highlight>
              </span>{" "}
              and{" "}
              <span className="mx-2">
                <Highlight className="">Laravel</Highlight>
              </span>
              but still I'm always eager to{" "}
              <span className="mx-2">
                <Highlight className="">explore new frameworks</Highlight>
              </span>
              I excel in{" "}
              <span className="mx-2">
                <Highlight className="">
                  managing and cooperating with fellow developers
                </Highlight>
              </span>
              ensuring we collectively deliver the best solutions.
            </p>
          </div>
          <div className=" ">
            <Story />
          </div>
        </div>
      </AboutSlider>
    </div>
  );
};

export default About;
