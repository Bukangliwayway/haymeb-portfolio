import React from "react";
import { motion } from "framer-motion";

const Boxes = () => {
  const rotate1 = Math.floor(Math.random() * 360);
  const rotate2 = -rotate1 + Math.floor(Math.random() * 20 + 1);
  return (
    <>
      <motion.div
        className="bg-shade min-w-[24rem] min-h-[21rem] absolute top-45% left-45% "
        initial={{ opacity: 0, x: -100, y: -100, scale: 0.8 }}
        animate={{
          opacity: 0.7,
          x: [50, -50, 0],
          y: [50, -50, 0],
          rotate: rotate1,
          scale: [1.2, 0.8, 1],
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      />
      <motion.div
        className="bg-bright min-w-[22rem] min-h-[23rem] absolute top-69% left-69% "
        initial={{ opacity: 0, x: 100, y: 100, scale: 0.8 }}
        animate={{
          opacity: 0.5,
          x: [-50, 50, 0],
          y: [-50, 50, 0],
          rotate: rotate2,
          scale: [1.2, 0.8, 1],
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      />
    </>
  );
};

export default Boxes;
