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
    detailed: (
      <p>
        I'm a proud graduate of the Information Technology program at
        Polytechnic University of the Philippines Quezon City, starting my
        journey in 2020.
        <br />
        <br />
        My time at PUPQC was marked by learning from esteemed professors and
        delving into various areas of web development, including Agile Scrum
        methodology.
        <br />
        <br />
        The robust foundation I received there has equipped me to navigate and
        contribute to the ever-evolving tech landscape.
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
    detailed: (
      <p>
        In my internship at Solutions Experts & Enablers, Inc., I contributed to
        both the front-end and back-end development of a HelpDesk portal. The
        project was built using Laravel, React, and Inertia.js.
        <br />
        <br />
        Over the course of two months, I honed my full-stack development skills
        and gained hands-on experience with deployment on Amazon EC2. I also
        implemented a chatbot using Dialogflow, further expanding the
        functionality of the portal and enhancing the user experience.
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
    detailed: (
      <p>
        The Alumni Performance Management System (APMS) was my capstone project
        at PUPQC. We aimed to transform the traditional alumni tracing form into
        a full-blown web app to connect all alumni.
        <br />
        <br />
        The APMS was developed using Agile Scrum, FASTAPI, Python, ReactJS, MUI,
        and PostgreSQL. It served as a social platform, enhancing alumni
        engagement. One of the core features was comprehensive analytics,
        providing valuable insights into alumni performance and engagement.
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
    detailed: (
      <p>
        The e-Reliv Research Management System was a research project at PUPQC,
        where I led the full development. The project aimed to improve research
        paper search, analysis, and monitoring.
        <br />
        <br />
        The edge of this project was the improved analytics by integrating it
        with the Kibana stack, specifically Elasticsearch. This integration
        enhanced the search functionality, providing intuitive search and
        high-speed results. The project was developed using Agile Scrum, MySQL,
        PHP, JavaScript, Elasticsearch, and Kibana.
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
    detailed: (
      <p>
        The Juan Cafe Ordering System was a project where I was introduced to
        PHP, MIRO, and the Kanban methodology. We used MIRO as a collaborative
        tool to communicate and plan out our system effectively.
        <br />
        <br />
        The project involved developing a QR-based Mobile Ordering System. This
        system was built using PHP, JavaScript, HTML, and CSS. The use of these
        technologies and the Kanban methodology significantly improved
        transaction efficiency in the cafe.
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
    detailed: (
      <p>
        My initial years at AMA University, pursuing ICT Programming from 2018
        to 2020, laid a strong foundation in programming for me. It was during
        this time that I was introduced to databases, the Object-Oriented
        Programming (OOP) model, and the Java language.
        <br />
        <br />
        We also learned about the use of flowcharts for effective
        problem-solving and planning in programming. Additionally, we were
        taught the ethics associated with the IT industry and the responsible
        use of technology.
      </p>
    ),
  },
];

const Story = () => {
  return <CardStack items={CARDS} />;
};
export default Story;
