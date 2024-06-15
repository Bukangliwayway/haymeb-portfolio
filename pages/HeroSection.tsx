import Boxes from "@/components/Hero/Boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from "@/components/ui/image-slider";
import React from "react";

const HeroSection = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  const images = [
    "/hero1.webp",
    "/hero2.webp",
    "/hero3.webp",
    "/hero4.webp",
    "/hero5.webp",
    "/hero6.webp",
    "/hero7.webp",
    "/hero8.webp",
    "/hero9.webp",
    "/hero10.webp",
    "/hero11.webp",
  ];

  return (
    <div>
      <div className="flex justify-center items-center relative h-[100vh]">
        <ImagesSlider images={images} className="absolute z-10 min-w-80 " />
        <Boxes />
        <div className="text-4xl mx-auto font-normal text-center ">
          Build websites with Aceternity UI
          <br />
          <FlipWords words={words} className="capitalize text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
