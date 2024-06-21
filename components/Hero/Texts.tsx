import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import Image from "next/image";
const Texts = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const words = [
    "web developer",
    "UI/UX designer",
    "full-stack dev",
    "ISkolar ng Bayan",
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative mx-auto font-main-hero">
      <a
        href="/BelgicaResume.pdf"
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          animate={{ y: isHovered ? -20 : 0 }} // adjust the values to control the distance of the jump
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            repeat: isHovered ? Infinity : 0, // repeat the animation infinitely when hovered
            repeatType: "reverse", // reverse the animation on each repeat
            duration: 0.1, // adjust the duration of the animation
          }}
          className="absolute z-50 -right-[13rem] lg:right-[4rem] -top-[4rem] lg:top-[1rem] w-40 lg:w-40 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground tracking-widest font-normal text-lg hover:bg-primary/90 px-4 py-2 bg-transparent"
        >
          <Image src="/badge.svg" alt="Badge" loading="lazy" />
        </motion.button>
      </a>
      <motion.div
        className="absolute hidden z-20 right-20 -top-[8.25rem] w-[15ch] text-center text-white lg:block lg:text-4xl "
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        <h1> HELLO THERE </h1>
      </motion.div>
      <motion.div
        className="absolute z-10 -top-[19rem] -left-[10.5rem] w-[12ch] text-4xl text-left text-white font-semibold lg:left-20 lg:-top-[8.25rem] lg:font-normal"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, delay: 0.5 }}
      >
        <h1> THIS IS </h1>
      </motion.div>
      <motion.div
        className="absolute z-10 -right-28 bottom-44 text-8xl text-left text-white font-medium lg:text-9xl lg:z-20 lg:right-16 lg:-bottom-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2.5, delay: 1.5 }}
      >
        <h1>HAYME</h1>
      </motion.div>
      <motion.div
        className="absolute z-20 -right-44 -bottom-36 text-8xl text-left text-main-hero font-black lg:text-9xl lg:font-medium lg:z-10 lg:left-20 lg:-bottom-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, delay: 2 }}
      >
        <h1>BELGICA</h1>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 3 }}
      >
        <FlipWords
          words={words}
          className="absolute z-20 -right-[17rem] -bottom-44 w-[30ch] text-4xl text-center text-white font-main capitalize font-semibold lg:text-7xl lg:w-[30ch] lg:-left-80 lg:-bottom-28"
        />
      </motion.div>
    </div>
  );
};

export default Texts;
