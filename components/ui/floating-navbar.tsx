import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useSpring, useTransform } from "framer-motion";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { RefObject } from "react";

const useSectionsInView = (navItems: NavItem[]): boolean[] => {
  const [inViews, setInViews] = useState<boolean[]>([]);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  useEffect(() => {
    const observers = navItems.map((navItem, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViews((prevInViews) => {
            const newInViews = [...prevInViews];
            newInViews[index] = entry.isIntersecting;
            return newInViews;
          });
        },
        { threshold: 0.1 }
      );

      if (navItem.ref.current) {
        observer.observe(navItem.ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (navItems[index].ref.current !== null) {
          observer.unobserve(navItems[index].ref.current);
        }
      });
    };
  }, [navItems]);

  // Find the topmost section that's in view
  const topmostInViewIndex = inViews.lastIndexOf(true);

  // Only the topmost section in view should be marked as true
  const adjustedInViews = inViews.map(
    (inView, index) => index === topmostInViewIndex
  );

  return adjustedInViews;
};

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
  ref: RefObject<HTMLElement>;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [lastYPos, setLastYPos] = useState(0);
  const inViews = useSectionsInView(navItems);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setLastYPos(v);
    });

    return () => {
      unsubscribe();
    };
  }, [lastYPos, scrollYProgress]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          y: true ? 0 : -100,
          opacity: true ? 1 : 0,
        }}
        className={cn(
          "flex max-w-fit  fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-2",
          className
        )}
      >
        {navItems.map((navItem, idx) => {
          const inView = inViews[idx];
          return (
            <motion.button
              key={`link=${idx}`}
              onClick={() =>
                navItem.ref.current?.scrollIntoView({ behavior: "smooth" })
              }
              className={`${
                inView
                  ? "border bg-slate-950 border-neutral-200 dark:border-white/[0.2]"
                  : "border border-transparent"
              } text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-full`}
              animate={{
                backgroundColor: inView ? "#020617" : "#000", // replace with the actual color value for bg-slate-950
              }}
              transition={{ duration: 1.5 }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              {inView && (
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
