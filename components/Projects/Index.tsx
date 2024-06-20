import React, { ForwardRefRenderFunction, RefObject } from "react";
import { Highlight } from "../ui/hero-highlight";
import { WobbleCard } from "../ui/wobble-card";
import { motion } from "framer-motion";

export default function Project() {
  const wobbleContents = [
    {
      title: "Alumni Performance Management System",
      description:
        "Created an APMS for PUPQC using Agile Scrum, FASTAPI, Python, ReactJS, MUI, and PostgreSQL, improving alumni engagement and studies.",
      image: "/apms.webp",
      tech: [
        {
          name: "ReactJS",
          icon: "/logo/react.svg",
        },
        {
          name: "MUI",
          icon: "/logo/mui.svg",
        },
        {
          name: "Python",
          icon: "/logo/python.svg",
        },
        {
          name: "PostgreSQL",
          icon: "/logo/postgresql.svg",
        },
        {
          name: "FASTAPI",
          icon: "/logo/fastapi.svg",
        },
      ],
    },
    {
      title: "Research Paper Management System",
      description:
        "Built a Research Management System (RPMS) to improve research paper search and analysis. Used Agile Scrum, MySQL, Native PHP, JavaScript, Elasticsearch, and Kibana for iterative development and collaboration",
      image: "/rpms.webp",
      tech: [
        {
          name: "MySQL",
          icon: "/logo/mysql.svg",
        },
        {
          name: "Native PHP",
          icon: "/logo/php.svg",
        },
        {
          name: "JavaScript",
          icon: "/logo/js.svg",
        },
        {
          name: "Elasticsearch",
          icon: "/logo/elasticsearch.svg",
        },
        {
          name: "Kibana",
          icon: "/logo/kibana.svg",
        },
      ],
    },
    {
      title: "Juan Cafe Mobile Ordering System",
      description:
        "Designed and developed a QR-based Mobile Ordering System for Juan Cafe. The system streamlined customer-cashier transactions, enhancing convenience. The project utilized Kanban for efficient planning and system setup, and was built using Native PHP, JavaScript, HTML, CSS, and the MIRO app.",
      image: "/jcpos.webp",
      tech: [
        {
          name: "Native PHP",
          icon: "/logo/php.svg",
        },
        {
          name: "JavaScript",
          icon: "/logo/js.svg",
        },
        {
          name: "HTML",
          icon: "/logo/html.svg",
        },
        {
          name: "CSS",
          icon: "/logo/css.svg",
        },
        {
          name: "MIRO",
          icon: "/logo/miro.svg",
        },
      ],
    },
    {
      title: "IT Self-Help Desk",
      description:
        "During my OJT, we designed and developed an IT Self-Help Desk System. The system was built using Laravel, Inertia, and React. It included a Dialogflow-powered chatbot for automated assistance. We also crafted a user-friendly interface and used Framer Motion for engaging animations.",
      image: "/helpdeskojt.webp",
      tech: [
        {
          name: "ReactJS",
          icon: "/logo/react.svg",
        },
        {
          name: "Laravel",
          icon: "/logo/laravel.svg",
        },
        {
          name: "Amazon EC2",
          icon: "/logo/ec2.svg",
        },
        {
          name: "Framer Motion",
          icon: "/logo/framer.svg",
        },
        {
          name: "DialogFlow",
          icon: "/logo/dialogflow.svg",
        },
      ],
    },
  ];

  return (
    <div
      className="
    flex flex-col "
    >
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Projects</Highlight>
      </div>
      <div className="mt-10 flex flex-col p-5 gap-10">
        {wobbleContents.map((content, index) => (
          <WobbleCard
            containerClassName={` ${
              index % 2 == 0 ? "bg-main-shade" : "bg-main-muted"
            } `}
          >
            <div className=" max-w-xs lg:max-w-[60ch] mx-auto lg:mx-0">
              <h2 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {content.title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {content.description}
              </p>
              <div className="mt-5 flex gap-3 flex-wrap">
                {content?.tech?.map((tech) => {
                  return (
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      {" "}
                      <span
                        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,${
                          index % 2 != 0
                            ? `#9d1424_0%,#212542_50%,#9d1424_100%`
                            : `#9d1424_0%,#212542_50%,#212542_100%`
                        })]`}
                      />{" "}
                      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3">
                        <img src={tech.icon} alt={tech.name} className="w-6" />
                        <span>{tech.name}</span>
                      </div>{" "}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="h-[25vw] lg:h-0" />
            <motion.img
              src={content.image}
              alt="linear demo image"
              className="absolute filter -right-10 -bottom-10 object-contain rounded-lg bg-main lg:w-5/12 w-[60vh]"
              whileHover={{
                scale: 1.3,
                x: -25, // Move the image 30px to the left
                y: -25, // Move the image 30px up
                transition: { type: "spring", stiffness: 700, damping: 30 },
              }}
            />
          </WobbleCard>
        ))}
      </div>
    </div>
  );
}
