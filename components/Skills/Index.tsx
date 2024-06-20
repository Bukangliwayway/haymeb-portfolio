import React from "react";
import { Highlight } from "../ui/hero-highlight";
import { HoverEffect } from "../ui/card-hover-effect";

const Skill = () => {
  const techs = [
    {
      title: "ReactJS",
      icon: "/logo/react.svg",
      link: "https://react.dev/",
      story:
        "For 2 years, I've used ReactJS in my capstone and internship. I appreciate its component-based structure and the rich community. It has opened doors to explore the vast possibilities in the frontend world.",
    },
    {
      title: "Laravel",
      icon: "/logo/laravel.svg",
      link: "https://laravel.com/",
      story:
        "I've been using Laravel for 2 years, starting before my internship. Recently, I integrated Laravel with ReactJS using InertiaJS as our techstack for my internship project.",
    },
    {
      title: "CSS",
      icon: "/logo/css.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      story:
        "I've used CSS for 3 years since starting web development. It's crucial for designing websites, allowing control over layout, colors, and fonts, enhancing accessibility and reducing complexity.",
    },
    {
      title: "Dialogflow",
      icon: "/logo/dialogflow.svg",
      link: "https://dialogflow.cloud.google.com/",
      story:
        "Used Dialogflow during my internship, specifically its Knowledge Base feature, to create an FAQ system for web applications, enhancing user interaction.",
    },
    {
      title: "EC2",
      icon: "/logo/ec2.svg",
      link: "https://aws.amazon.com/ec2/",
      story:
        "During my internship, I deployed and established a CI/CD pipeline on EC2, enabling testers to test the system in the deployed environment.",
    },
    {
      title: "Elasticsearch",
      icon: "/logo/elasticsearch.svg",
      link: "https://www.elastic.co/elasticsearch/",
      story:
        "I utilized Elasticsearch in my research project for a paper management system. It enhanced search functionality, flexibility, and speed through its indexing approach.",
    },
    {
      title: "FastAPI",
      icon: "/logo/fastapi.svg",
      link: "https://fastapi.tiangolo.com/",
      story:
        "Used FastAPI for an alumni system's backend, learning the tech stack. Explored JWT, auth, access/refresh tokens, and database migration with Alembic, setting up these manually.",
    },
    {
      title: "Framer",
      icon: "/logo/framer.svg",
      link: "https://www.framer.com/",
      story:
        "Used Framer in this portfolio and my internship, enhancing website animations. Framer, a design tool, improves user interaction and aesthetics of websites.",
    },
    {
      title: "HTML",
      icon: "/logo/html.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      story:
        "I've been using HTML throughout my 3-year development career, exploring its capabilities. It's fundamental for structuring web content and works closely with CSS.",
    },
    {
      title: "JavaScript",
      icon: "/logo/js.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      story:
        "I've been using JavaScript extensively in my 3-year web development career. It's a versatile language essential for web interactivity.",
    },
    {
      title: "Kibana",
      icon: "/logo/kibana.svg",
      link: "https://www.elastic.co/kibana/",
      story:
        "I've used Kibana for visualizing analytics in a research paper management system, integrating it as part of an ELK stack.",
    },

    {
      title: "Material-UI",
      icon: "/logo/mui.svg",
      link: "https://mui.com/",
      story:
        "I used Material-UI for UI components and CSS styling during my capstone project, enhancing the design of our alumni performance management system.",
    },
    {
      title: "MySQL",
      icon: "/logo/mysql.svg",
      link: "https://www.mysql.com/",
      story:
        "I've been extensively using MySQL in my projects for 2.5 years, exploring its use with migration tools and manual methods.",
    },
    {
      title: "PHP",
      icon: "/logo/php.svg",
      link: "https://www.php.net/",
      story:
        "PHP was my first backend language, taught by PUPQC professors. It unlocked my knowledge of backend and frontend integration. I've been using it for 3 years.",
    },
    {
      title: "PostgreSQL",
      icon: "/logo/postgresql.svg",
      link: "https://www.postgresql.org/",
      story:
        "Used PostgreSQL in an alumni management project for 1.5 years, exploring its rich features. Ideal for large-scale projects due to its robust database management.",
    },
    {
      title: "Python",
      icon: "/logo/python.svg",
      link: "https://www.python.org/",
      story:
        "Python was taught at PUPQC, where I explored Tkinter. However, I focused more on its backend use during my capstone. I've been using it for 2 years.",
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="z-50 font-main-hero capitalize text-5xl text-center mt-28 mx-auto flex gap-2 justify-center items-center">
        <span>My</span>
        <Highlight className="text-black dark:text-white">Skills</Highlight>
      </div>
      <HoverEffect items={techs} />
    </div>
  );
};

export default Skill;
