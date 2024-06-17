import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Boxes = () => {
  const [rotate1, setRotate1] = useState(Math.floor(Math.random() * 360) + 900);
  const [rotate2, setRotate2] = useState(
    rotate1 + (Math.floor(Math.random() * 20 + 10) + 180)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate1(Math.floor(Math.random() * 360) + 900);
      setRotate2(rotate1 - (Math.floor(Math.random() * 20 + 10) + 180));
    }, 3000);

    return () => clearInterval(interval);
  }, [rotate1]);

  return (
    <>
      <motion.div
        className="bg-shade min-w-[75%] min-h-[45%] lg:min-w-[30%] lg:min-h-[55%] absolute "
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
        className="bg-bright min-w-[70%] min-h-[40%] lg:min-w-[30%] lg:min-h-[50%] absolute  "
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
