import HeroSection from "./HeroSection";
import { useRef } from "react";
import { Award, Briefcase, HomeIcon, Layers, Mail, User } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About/About";
import Project from "@/components/Projects/Index";
import Skill from "@/components/Skills/Index";
import Experience from "@/components/Experiences/Index";
import Contact from "@/components/Contact/Index";

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: homeRef,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: aboutRef,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <Layers className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: projectsRef,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Award className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: skillsRef,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: experienceRef,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ref: contactRef,
    },
  ];
  return (
    <div className="bg-black">
      <FloatingNav navItems={navItems} />
      <section
        id="home"
        ref={homeRef}
        className="max-w-[80rem] mb-10 mx-auto overflow-hidden"
      >
        <HeroSection contactRef={contactRef} />
      </section>
      <section
        id="about"
        ref={aboutRef}
        className="min-h-[100vh] max-w-[80rem] mb-10 mx-auto"
      >
        <About />
      </section>
      <section
        id="projects"
        ref={projectsRef}
        className="min-h-[100vh] max-w-[80rem] mb-10 mx-auto"
      >
        <Project />
      </section>
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-[100vh] max-w-[80rem] mb-10 mx-auto"
      >
        <Skill />
      </section>
      <section
        id="experience"
        ref={experienceRef}
        className="min-h-[100vh] max-w-[80rem] mb-10 mx-auto"
      >
        <Experience />
      </section>
      <section
        id="contact"
        ref={contactRef}
        className="min-h-[100vh] max-w-[80rem] mb-10 mx-auto"
      >
        <Contact />
      </section>
    </div>
  );
}
