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
    <div className="flex flex-col h-screen">
      <AboutSlider
        images={images}
        className="lg:hidden flex flex-col pb-20 h-screen"
      >
        <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
          <span>About</span>
          <Highlight className="text-black dark:text-white">Haymeb</Highlight>
        </div>
        <div className=" z-50 flex gap-10 justify-center items-center my-auto flex-col">
          <div className="mt-10">
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
          <Story />
        </div>
      </AboutSlider>
      <div className="hidden z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto lg:flex gap-2 justify-center items-center">
        <span>About</span>
        <Highlight className="text-black dark:text-white">Haymeb</Highlight>
      </div>
      <div className="hidden lg:my-12 z-50 lg:flex gap-10 justify-center items-center my-auto flex-col lg:flex-row">
        <AboutSlider images={images} className="w-7/12">
          <p className="p-[5ch] z-[50] leading-7 lg:w-[80ch]">
            As a seasoned{" "}
            <span className="">
              <Highlight className="">full-stack developer</Highlight>
            </span>{" "}
            with{" "}
            <span className="">
              <Highlight className="">3 years</Highlight>
            </span>{" "}
            of experience, I've led the development of complex systems such as a
            Research Paper Management System and an Alumni Performance
            Management System at PUPQC. My role as a lead developer covered both
            backend and frontend development, ensuring a seamless user
            experience. During my internship, I contributed to the creation of a
            HelpDesk system, further honing my full-stack development skills.
            <br />
            <br />I specialize in{" "}
            <span className="">
              <Highlight className="">React</Highlight>
            </span>{" "}
            and{" "}
            <span className="">
              <Highlight className="">Laravel</Highlight>
            </span>
            , but I'm always eager to{" "}
            <span className="">
              <Highlight className="">explore new frameworks</Highlight>
            </span>
            . I've also utilized various tech stacks in my projects, including
            FastAPI, Kibana, and have experience deploying on Onrender and AWS
            EC2.
            <br />
            <br />
            Beyond coding, I excel in{" "}
            <span className="">
              <Highlight className="">
                managing and cooperating with fellow developers
              </Highlight>
            </span>
            , ensuring we collectively deliver the best solutions. I value
            established business processes and have actively participated in the
            planning phase of projects, often taking on the roles of a project
            manager and business analyst. This holistic approach to development
            has been a key factor in the success of my projects.
          </p>
        </AboutSlider>
        <div className="mt-0 h-[95%]">
          <Story />
        </div>
      </div>
    </div>
  );
};

export default About;
