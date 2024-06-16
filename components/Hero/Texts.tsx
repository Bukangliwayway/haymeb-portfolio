import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
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
  return (
    <div className="relative mx-auto font-main-hero">
      <motion.div
        className="absolute hidden z-20 right-20 -top-[7.25rem] w-[12ch] text-left text-white lg:block lg:text-4xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        <h1> HELLO THERE!</h1>
      </motion.div>
      <motion.div
        className="absolute z-10 -top-[19rem] -left-[10.5rem] w-[12ch] text-4xl text-left text-white font-semibold lg:left-[3.75rem] lg:-top-[7.25rem] lg:font-normal"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, delay: 0.5 }}
      >
        <h1> THIS IS </h1>
      </motion.div>
      <motion.div
        className="absolute z-10 -right-28 bottom-44 text-8xl text-left text-white font-medium lg:text-9xl lg:z-20 lg:right-10 lg:-bottom-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2.5, delay: 1.5 }}
      >
        <h1>HAYME</h1>
      </motion.div>
      <motion.div
        className="absolute z-20 -right-44 -bottom-36 text-8xl text-left text-main-hero font-black lg:text-9xl lg:font-medium lg:z-10 lg:left-10 lg:-bottom-8"
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
