import Boxes from "@/components/Hero/Boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from "@/components/ui/image-slider";
import React from "react";

const HeroSection = () => {
  const words = [
    "web developer",
    "UI/UX designer",
    "full-stack dev",
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
      <div className="flex justify-center items-center relative h-[100vh] mt-10 lg:mt-0">
        <ImagesSlider images={images} className="absolute z-20 min-w-80 " />
        <Boxes />
        <div className="relative mx-auto font-main-hero">
          <div className="absolute hidden z-20 right-20 -top-[7.25rem] w-[12ch] text-left text-white lg:block lg:text-4xl">
            <h1> HELLO THERE!</h1>
          </div>
          <div className="absolute z-10 -top-[19rem] -left-[10.5rem] w-[12ch] text-4xl text-left text-white font-semibold lg:left-[3.75rem] lg:-top-[7.25rem] lg:font-normal">
            <h1> THIS IS </h1>
          </div>
          <div className="absolute z-10 -right-28 bottom-44 text-8xl text-left text-white font-medium lg:text-9xl lg:z-20 lg:right-10 lg:-bottom-8">
            <h1>HAYME</h1>
          </div>
          <div className="absolute z-20 -right-44 -bottom-36 text-8xl text-left text-main-hero font-black lg:text-9xl lg:font-medium lg:z-10 lg:left-10 lg:-bottom-8">
            <h1>BELGICA</h1>
          </div>
          <FlipWords
            words={words}
            className="absolute z-20 -right-[17rem] -bottom-44 w-[30ch] text-4xl text-center text-white font-main capitalize font-semibold lg:text-7xl lg:w-[30ch] lg:-left-80 lg:-bottom-28"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
