import React from "react";
import { Highlight } from "../ui/hero-highlight";
import { CardStack } from "../ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "BSIT at PUPQC",
    content: (
      <p>
        I am a graduate of Bachelor of Science in Information Technology at
        Polytechnic University of the Philippines Quezon City. I have learned a
        lot of things from this course and I am grateful for the knowledge that
        I have gained.
      </p>
    ),
  },
  {
    id: 4,
    name: "Internship at Solutions Experts & Enablers, Inc.",
    content: (
      <p>
        During my internship, I helped build a HelpDesk portal using Laravel,
        React, and Inertia.js, enhancing my web development skills
      </p>
    ),
  },
  {
    id: 2,
    name: "Alumni Performance Management System (APMS)",
    content: (
      <p>
        Developed an Alumni Profiling and Management System for PUPQC using
        Agile Scrum, FASTAPI, Python, ReactJS, MUI, and PostgreSQL, enhancing
        alumni engagement.
      </p>
    ),
  },
  {
    id: 1,
    name: "e-Reliv Research Management System",
    content: (
      <p>
        Developed Research Paper Management System named e-Reliv to improve
        research paper search, analysis, and monitoring using Agile Scrum,
        MySQL, PHP, JavaScript, Elasticsearch, and Kibana.
      </p>
    ),
  },

  {
    id: 3,
    name: "Juan Cafe Ordering System",
    content: (
      <p>
        Developed a QR-based Mobile Ordering System using Kanban, PHP,
        JavaScript, HTML, CSS, and MIRO, improving transaction efficiency.
      </p>
    ),
  },

  {
    id: 7,
    name: "ICT Programming at AMA University",
    content: (
      <p>
        Pursued ICT Programming at AMA University from 2018 to 2020, gaining a
        strong foundation in programming.
      </p>
    ),
  },
];

const Story = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
};
export default Story;
