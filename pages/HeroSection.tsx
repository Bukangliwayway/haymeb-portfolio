import Boxes from "@/components/Hero/Boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { ImagesSlider } from "@/components/ui/image-slider";
import React from "react";

const HeroSection = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  const images = ["/sample1.webp", "/sample2.webp"];

  return (
    <div>
      <div className="flex justify-center items-center relative h-[100vh]">
        <ImagesSlider images={images} className="absolute z-10 top-10 w-80" />
        <Boxes />
        {/* <ImagesSlider className="z-50" images={images}></ImagesSlider> */}
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
