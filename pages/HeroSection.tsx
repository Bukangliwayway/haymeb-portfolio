import Boxes from "@/components/Hero/Boxes";
import { FloatingNavDemo } from "@/components/Hero/NavBar";
import Texts from "@/components/Hero/Texts";
import { ImagesSlider } from "@/components/ui/image-slider";
import React from "react";

const HeroSection = () => {
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
      <div className="flex justify-center items-center relative h-[100vh] mt-10 lg:mt-0">
        <ImagesSlider images={images} className="absolute z-20 min-w-80 " />
        <Boxes />
        <Texts />
      </div>
    </div>
  );
};

export default HeroSection;
