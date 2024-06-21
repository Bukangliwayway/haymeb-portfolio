import { Linkedin, LucideArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { RefObject, useState } from "react";
import Image from "next/image";

interface BottomTextsProps {
  contactRef: RefObject<HTMLElement>;
}

const BottomTexts: React.FC<BottomTextsProps> = ({ contactRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-8 lg:bottom-8 mx-auto px-10 flex flex-col lg:flex-row gap-5 lg:w-1/2 lg:justify-between lg:items-center">
      <button
        onClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" w-[25ch] lg:h-16 inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="capitalize font-semibold text-lg">
          Let's talk here
        </span>
        <motion.div
          animate={{ x: isHovered ? 20 : 0 }} // adjust the values to control the distance of the jump
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            repeat: isHovered ? Infinity : 0, // repeat the animation infinitely when hovered
            repeatType: "reverse", // reverse the animation on each repeat
            duration: 0.1, // adjust the duration of the animation
          }}
        >
          <LucideArrowRight className="ml-2" />
        </motion.div>
      </button>
      <div className="flex justify-around lg:gap-6">
        <a
          href="https://www.linkedin.com/in/james-matthew-belgica-b044a4193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{
              y: -5, // adjust the values to control the distance of the jump
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                repeat: Infinity, // repeat the animation infinitely when hovered
                repeatType: "reverse", // reverse the animation on each repeat
                duration: 0.1, // adjust the duration of the animation
              },
            }}
          >
            <Image src="/linkedin.png" className="w-12 lg:w-20" alt="" />
          </motion.div>
        </a>
        <a
          href="https://github.com/bukangliwayway"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{
              y: -5, // adjust the values to control the distance of the jump
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                repeat: Infinity, // repeat the animation infinitely when hovered
                repeatType: "reverse", // reverse the animation on each repeat
                duration: 0.1, // adjust the duration of the animation
              },
            }}
          >
            <Image src="/github.png" className="w-12 lg:w-20" alt="" />
          </motion.div>
        </a>
        <a
          href="https://dev.to/bukangliwayway"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{
              y: -5, // adjust the values to control the distance of the jump
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                repeat: Infinity, // repeat the animation infinitely when hovered
                repeatType: "reverse", // reverse the animation on each repeat
                duration: 0.1, // adjust the duration of the animation
              },
            }}
          >
            <Image
              src="/code.png"
              className="w-12 lg:w-20  object-cover bg-white rounded-full"
              alt=""
            />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default BottomTexts;
