import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { WobbleCard } from "./wobble-card";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: string;
    link: string;
    story: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [clickedIndex, setClickedIndex] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 py-10">
      <div className="lg:hidden sticky top-[4.25rem] lg:h-1/2 z-30 lg:w-7/12 bg-black min-h-52">
        <div className="p-2 flex flex-col gap-2">
          <h1 className="font-bold text-lg text-center">
            {items[clickedIndex]?.title}
          </h1>
          <Image
            width={80}
            height={80}
            src={items[clickedIndex]?.icon}
            className="w-20  mx-auto"
            alt=""
          />
          <p className="p-3 tracking-wide leading-relaxed text-sm">
            {items[clickedIndex]?.story}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setClickedIndex(idx)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <Image
                width={48}
                height={48}
                src={item?.icon}
                className="w-12  mx-auto"
                alt=""
              />
              <h1 className="font-bold text-center">{item.title}</h1>
            </Card>
          </div>
        ))}
      </div>
      <div className="hidden lg:block sticky top-[4.25rem] lg:top-[5.25rem] lg:h-1/2 z-30 lg:w-7/12 bg-black min-h-52">
        <WobbleCard className="p-5 flex flex-col justify-center gap-2 lg:gap-5 lg:min-h-[60vh]">
          <h1 className="font-bold text-lg lg:text-4xl text-center">
            {items[clickedIndex]?.title}
          </h1>
          <Image
            width={80}
            height={80}
            src={items[clickedIndex]?.icon}
            className="w-20 lg:w-44  mx-auto"
            alt=""
          />
          <p className="p-3 tracking-wide leading-relaxed lg:w-[60ch] mx-auto">
            {items[clickedIndex]?.story}
          </p>
        </WobbleCard>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
