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

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
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
          src={images[currentIndex]}
          initial="initial"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="absolute top-0 left-0"
        />
      </AnimatePresence>
    </div>
  );
};
