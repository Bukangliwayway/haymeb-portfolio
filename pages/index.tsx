import HeroSection from "./HeroSection";
import { useRef } from "react";
import { Award, Briefcase, HomeIcon, Layers, Mail, User } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About/About";

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
    <div className="overflow-hidden">
      <FloatingNav navItems={navItems} />
      <section id="home" ref={homeRef} className="max-w-[80rem] mx-auto">
        <HeroSection contactRef={contactRef} />
      </section>
      <section
        id="about"
        ref={aboutRef}
        className="min-h-[100vh] max-w-[80rem] mx-auto"
      >
        <About />
      </section>
      <section
        id="projects"
        ref={projectsRef}
        className="h-[100vh] max-w-[80rem] mx-auto"
      >
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <h1 className="font-main-hero capitalize text-5xl">Projects</h1>
          <div className="flex gap-5">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              esse suscipit voluptatem cumque enim fuga facere harum fugit sequi
              similique.
            </p>
          </div>
        </div>
      </section>
      <section
        id="skills"
        ref={skillsRef}
        className="h-[100vh] max-w-[80rem] mx-auto"
      >
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <h1 className="font-main-hero capitalize text-5xl">skills</h1>
          <div className="flex gap-5">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              esse suscipit voluptatem cumque enim fuga facere harum fugit sequi
              similique.
            </p>
          </div>
        </div>
      </section>
      <section
        id="experience"
        ref={experienceRef}
        className="h-[100vh] max-w-[80rem] mx-auto"
      >
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <h1 className="font-main-hero capitalize text-5xl">experience</h1>
          <div className="flex gap-5">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              esse suscipit voluptatem cumque enim fuga facere harum fugit sequi
              similique.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        ref={contactRef}
        className="h-[100vh] max-w-[80rem] mx-auto"
      >
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <h1 className="font-main-hero capitalize text-5xl">contact me</h1>
          <div className="flex gap-5">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              esse suscipit voluptatem cumque enim fuga facere harum fugit sequi
              similique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
