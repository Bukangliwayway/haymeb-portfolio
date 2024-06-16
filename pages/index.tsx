import Image from "next/image";
import { Inter } from "next/font/google";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import HeroSection from "./HeroSection";
import { useRef } from "react";
import { Award, Briefcase, HomeIcon, Layers, Mail, User } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import SmoothScroll from "@/components/ui/smooth-scroll";

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
      {/* <SmoothScroll> */}
      <section id="home" ref={homeRef}>
        <HeroSection />
      </section>
      <section id="about" ref={aboutRef} className="h-[100vh]">
        <HeroSection />
      </section>
      <section id="projects" ref={projectsRef} className="h-[100vh]">
        <HeroSection />
      </section>
      <section id="skills" ref={skillsRef} className="h-[100vh]">
        <HeroSection />
      </section>
      <section id="experience" ref={experienceRef} className="h-[100vh]">
        <HeroSection />
      </section>
      <section id="contact" ref={contactRef} className="h-[100vh]">
        <HeroSection />
      </section>
      {/* </SmoothScroll> */}
    </div>
  );
}
