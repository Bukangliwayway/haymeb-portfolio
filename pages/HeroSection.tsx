import BottomTexts from "@/components/Hero/BottomTexts";
import Boxes from "@/components/Hero/Boxes";
import Texts from "@/components/Hero/Texts";
import { ImagesSlider } from "@/components/ui/image-slider";

import React, { RefObject } from "react";

interface HeroSectionProps {
  contactRef: RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ contactRef }) => {
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
      <div className="flex justify-center items-center relative h-[100vh] mt-5 lg:mt-0">
        <ImagesSlider
          images={images}
          className="absolute z-20 min-w-[70%] lg:min-w-[60%]"
        />
        <Boxes />
        <Texts />
        <BottomTexts contactRef={contactRef} />
      </div>
    </div>
  );
};

export default HeroSection;
