import React from "react";
import { Highlight } from "../ui/hero-highlight";

const Experience = () => {
  const data = [
    {
      title: "Studied Senior High at AMA University",
      description: (
        <p>
          During my studies at AMA University, I pursued{" "}
          <Highlight>TVL-ICT programming </Highlight>. I acquired proficiency in{" "}
          <Highlight>database management</Highlight>, honed my skills in{" "}
          <Highlight>Java programming</Highlight>, and grasped the fundamentals
          of <Highlight>Object-Oriented Programming (OOP)</Highlight>. This
          comprehensive education has equipped me with the essential skills for
          a successful career in software development.
        </p>
      ),
      time: "2018 - 2020",
      logo: "/experience/study.svg",
    },
    {
      title:
        "Earned a BSIT degree from the Polytechnic University of the Philippines - Quezon City (PUPQC)",
      description: (
        <p>
          During my time at the Polytechnic University of the Philippines, I led
          numerous <Highlight>large-scale website projects</Highlight>, which
          introduced me to the concept of{" "}
          <Highlight>full-stack development</Highlight>. It was here that I
          mastered the
          <Highlight>fundamentals of web development</Highlight>, including both
          front-end and back-end technologies. This is also where I was
          introduced to the <Highlight>Agile methodology</Highlight>.
          Additionally, I honed my <Highlight>soft skills</Highlight>, which are
          invaluable in the tech industry. I spent{" "}
          <Highlight>3 years developing my web development skills</Highlight>{" "}
          during this time.
        </p>
      ),
      time: "2020 - 2024",
      logo: "/experience/study.svg",
    },
    {
      title:
        "Developed a Mobile-Resposive QR-Based Ordering System for Juan Cafe",
      description: (
        <p>
          In this project, I delved into the fundamentals of{" "}
          <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>, and{" "}
          <Highlight>CSS</Highlight>, backed by <Highlight>PHP</Highlight> and{" "}
          <Highlight>MySQL</Highlight>. We implemented a{" "}
          <Highlight>full-stack website</Highlight> optimized{" "}
          <Highlight>for mobile users</Highlight>, providing a seamless ordering
          experience for Juan Cafe's clientele. This project allowed me to apply
          and enhance my web development skills in a real-world context.
        </p>
      ),
      time: "Oct 2022 - Feb 2023",
      logo: "/logo/php.svg",
    },
    {
      title:
        "Implemented a Research Paper Management System integrated with ELK Stack",
      description: (
        <p>
          In this project, I gained experience in using{" "}
          <Highlight>PHP</Highlight> and integrating it with{" "}
          <Highlight>Elasticsearch</Highlight> and <Highlight>Kibana</Highlight>{" "}
          for data visualizations and high level search functionalities. I
          explored the <Highlight>Agile Scrum methodology</Highlight>, managing
          a <Highlight>QA tester</Highlight>, and the process of{" "}
          <Highlight>documentation</Highlight> for all development stages. We
          deployed the system on a <Highlight>Webhost</Highlight> powered by{" "}
          <Highlight>Hostinger</Highlight>. This project allowed me to apply and
          enhance my IT project management and development skills in a
          real-world context.
        </p>
      ),
      time: "Apr 2023 - Aug 2023",
      logo: "/logo/elasticsearch.svg",
    },
    {
      title:
        "Developed an Alumni Performance Management System for the Alumnis of PUPQC",
      description: (
        <p>
          In this project, I began using frameworks such as{" "}
          <Highlight>ReactJS</Highlight>, a JavaScript framework for the
          front-end, and <Highlight>FastAPI</Highlight>, a Python-based
          framework, along with <Highlight>Alembic</Highlight> and{" "}
          <Highlight>Pydantic</Highlight> for the back-end. Connected by{" "}
          <Highlight>Axios</Highlight> calls. <br /> I explored various
          optimization concepts such as{" "}
          <Highlight>Single Page Applications (SPA)</Highlight>, and the concept
          of <Highlight>REST API</Highlight>. I also learned about the use of{" "}
          <Highlight>JWT </Highlight> for authentication, and the concept of{" "}
          <Highlight>refresh tokens</Highlight> and{" "}
          <Highlight>access tokens</Highlight>.
        </p>
      ),
      time: "Aug 2023 - Feb 2024",
      logo: "/logo/react.svg",
    },
    {
      title:
        "Developed an IT Self-Help Desk Portal during my Internship at Solutions Experts and Enablers, Inc.",
      description: (
        <p>
          During my internship at Solutions Experts and Enablers, Inc., I
          developed an IT Self-Help Desk Portal. I worked in a team with a
          fellow developer and a dedicated project manager, where I was
          introduced to{" "}
          <Highlight>Industry-level Development Practices</Highlight>, including
          the
          <Highlight>Agile Scrum Methodology</Highlight> and proper
          documentation. I functioned as a
          <Highlight>full-stack developer</Highlight>, using{" "}
          <Highlight>Laravel</Highlight> and <Highlight>React</Highlight>{" "}
          coupled with <Highlight>InertiaJS</Highlight>. I explored{" "}
          <Highlight>deployment-driven testing</Highlight>, deploying an{" "}
          <Highlight>Amazon EC2 instance</Highlight>
          for a testing environment, which improved quality testing. I was also
          introduced to the integration of <Highlight>
            {" "}
            Dialogflow
          </Highlight>{" "}
          into the system for chatbot usage.
        </p>
      ),
      time: "Apr 2024 - June 2024",
      logo: "/logo/laravel.svg",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">
          Experiences
        </Highlight>
      </div>
      <div className="p-10">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[25ch] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mx-auto">
          {data.map((item, index) => (
            <div className="relative mx-auto">
              <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  <div className="flex items-center justify-center w-10 h-10 p-1 rounded-full bg-black border border-gray-700  shadow md:order-1">
                    <img src={item?.logo} alt="" />
                  </div>
                  <time className="lg:text-right pr-[2ch] font-medium text-lg  md:w-[19.5ch]">
                    {item?.time}
                  </time>
                </div>
                <div className=" ml-14 lg:w-[90ch]">
                  <span className=" text-balance text-xl font-semibold tracking-[-0.015em] ">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className=" p-4 rounded ml-10 md:ml-[26ch] lg:w-[80ch] lg:px-[5ch] leading-7">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
