"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/utils/cn";

export const FlipWords = ({
  words,
  duration = 2000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(20px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-dark-red text-main-hero-flip",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index, array) => {
          const totalAnimationTime = 1; // total time for the animation in seconds
          const delay = (totalAnimationTime / (array.length + 1)) * index; // delay for each letter
          const animationDuration = totalAnimationTime / (array.length + 1); // duration of the animation for each letter

          return (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(80px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: delay,
                duration: animationDuration,
              }}
              className="inline-block whitespace-pre"
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
