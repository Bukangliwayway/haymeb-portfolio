import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  className,
  autoplay = true,
}: {
  images: string[];
  className?: string;
  autoplay?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle array function
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle images array
  const shuffledImages = shuffleArray([...images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === shuffledImages.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  const slideVariants = {
    initial: {
      opacity: 0,
      transition: {
        delay: 1.0, // delay before the image starts appearing
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className={className}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={shuffledImages[currentIndex]}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="absolute -top-32 bottom-0 left-0 right-0 m-auto"
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
};
