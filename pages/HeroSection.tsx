import Boxes from "@/components/Hero/Boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from "@/components/ui/image-slider";
import React from "react";

const HeroSection = () => {
  const words = [
    "web developer",
    "UI/UX designer",
    "full-stack programmer",
    "ISkolar ng Bayan",
  ];
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
        <ImagesSlider images={images} className="absolute z-20 min-w-80 " />
        <Boxes />
        <div className="relative mx-auto font-normal text-center font-main-hero">
          <div className="absolute text-4xl w-[12ch] z-20 text-white  text-left right-20 -top-[7.25rem]">
            <h1> HELLO THERE!</h1>
          </div>
          <div className="absolute text-4xl w-[12ch] z-10 text-white  text-left left-[3.75rem] -top-[7.25rem]">
            <h1> THIS IS </h1>
          </div>
          <div className="absolute text-9xl z-20 text-white text-left right-10 -bottom-8 font-medium">
            <h1>HAYME</h1>
          </div>
          <div className="absolute text-9xl text-main-hero font-medium z-10 left-10 -bottom-8 text-left">
            <h1>BELGICA</h1>
          </div>
          <FlipWords
            words={words}
            className="absolute text-7xl z-20 w-[30ch] text-center -left-80 -bottom-28 text-white font-main capitalize font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
