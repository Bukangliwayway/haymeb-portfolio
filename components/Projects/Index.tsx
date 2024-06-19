import React, { ForwardRefRenderFunction, RefObject } from "react";
import { Highlight } from "../ui/hero-highlight";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div className="flex flex-col ">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Projects</Highlight>
      </div>
      <div className="mt-10 flex flex-col p-5 gap-10">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2  bg-main-muted">
          <div className="p-5 max-w-xs lg:max-w-[60ch] mx-auto">
            <h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Alumni Performance Management System
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Created an APMS for PUPQC using Agile Scrum, FASTAPI, Python,
              ReactJS, MUI, and PostgreSQL, improving alumni engagement and
              studies.
            </p>
          </div>
          <div className="h-[25vw] " />
          <motion.img
            src="/apms.webp"
            width={450}
            height={600}
            alt="linear demo image"
            className="absolute filter -right-10 -bottom-10 object-contain rounded-lg bg-main"
            whileHover={{
              scale: 1.3,
              x: -25, // Move the image 30px to the left
              y: -25, // Move the image 30px up
              transition: { type: "spring", stiffness: 700, damping: 30 },
            }}
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2  bg-main-shade"
          className=""
        >
          <div className="max-w-xs lg:max-w-[60ch] mx-auto">
            <h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Research Paper Management System
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Built a Research Management System (RPMS) to improve research
              paper search and analysis. Used Agile Scrum, MySQL, Native PHP,
              JavaScript, Elasticsearch, and Kibana for iterative development
              and collaboration
            </p>
          </div>
          <div className="h-[25vw]" />{" "}
          <motion.img
            src="/rpms.webp"
            width={400}
            height={500}
            alt="linear demo image"
            className="absolute filter -right-10 -bottom-10 object-contain rounded-lg "
            whileHover={{
              scale: 1.3,
              x: -25, // Move the image 30px to the left
              y: -25, // Move the image 30px up
              transition: { type: "spring", stiffness: 700, damping: 30 },
            }}
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2  bg-main-muted"
          className=""
        >
          <div className="max-w-xs lg:max-w-[60ch] mx-auto">
            <h2 className="text-left text-balance text-xl  md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Juan Cafe Mobile Ordering System
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Designed and developed a QR-based Mobile Ordering System for Juan
              Cafe. The system streamlined customer-cashier transactions,
              enhancing convenience. The project utilized Kanban for efficient
              planning and system setup, and was built using Native PHP,
              JavaScript, HTML, CSS, and the MIRO app."
            </p>
          </div>
          <div className="h-[30vw]" />{" "}
          <motion.img
            src="/jcpos.webp"
            width={400}
            height={450}
            alt="linear demo image"
            className="absolute filter -right-10 -bottom-10 object-contain rounded-lg"
            whileHover={{
              scale: 1.3,
              x: -25, // Move the image 30px to the left
              y: -25, // Move the image 30px up
              transition: { type: "spring", stiffness: 700, damping: 30 },
            }}
          />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2  bg-main-shade"
          className=""
        >
          <div className="max-w-xs lg:max-w-[60ch] mx-auto">
            <h2 className="text-left text-balance text-xl  md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              IT Self-Help Desk
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              During my OJT, we designed and developed an IT Self-Help Desk
              System. The system was built using Laravel, Inertia, and React. It
              included a Dialogflow-powered chatbot for automated assistance. We
              also crafted a user-friendly interface and used Framer Motion for
              engaging animations.
            </p>
          </div>
          <div className="h-[30vw]" />{" "}
          <motion.img
            src="/helpdeskojt.webp"
            width={400}
            height={400}
            alt="linear demo image"
            className="absolute filter -right-10 -bottom-10 object-contain rounded-lg"
            whileHover={{
              scale: 1.3,
              x: -25, // Move the image 30px to the left
              y: -25, // Move the image 30px up
              transition: { type: "spring", stiffness: 700, damping: 30 },
            }}
          />
        </WobbleCard>
      </div>
    </div>
  );
}
