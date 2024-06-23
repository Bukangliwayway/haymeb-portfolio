"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export function ContactForm() {
  const placeholders = [
    "Discussing a new web application project.",
    "Seeking a developer for a React-based project.",
    "In need of a Laravel expert for a web development task.",
    "Exploring options for a business-focused IT solution.",
    "Considering a custom CRM development for business operations.",
    "Interested in a mobile app to enhance product or service experience.",
    "Planning a migration of a legacy system to a modern tech stack.",
    "Aiming to set up an e-commerce platform for online sales.",
    "Looking for consultation on IT strategy and digital transformation.",
    "Just want to discuss something about the IT industry.",
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 1500);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject: value, description }),
    });
    await res.json();
    setIsLoading(false);
    if (res.ok) {
      setIsSuccess(true);
      setValue("");
      setEmail("");
      setDescription("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form
      className={cn(
        "max-w-2xl w-full  h-auto rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200 flex flex-col gap-5 "
      )}
      onSubmit={handleSubmit}
    >
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 z-[9999] flex items-center justify-center"
        >
          {/* <div className="w-20 h-20 bg-white rounded-full animate-spin"></div> */}
          <img
            src="/tube-spinner.svg"
            alt="loading..."
            className="w-20 lg:w-40"
          />
        </motion.div>
      )}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="z-[99] bottom-5 right-5 fixed flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
            role="alert"
          >
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="ps-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-2">
        {/* <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="email"
        >
          Email
        </label> */}
        <input
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          value={email}
          type="email"
          placeholder="Email *"
          className={cn(
            "w-full text-normal z-50 border-none h-12 rounded-md focus:outline-none focus:ring-0 px-4 bg-gray-900 shadow-md"
          )}
        />
      </div>
      <div className="flex flex-col gap-2">
        {/* <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="email"
        >
          Subject
        </label> */}

        <div className="relative">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
            value={value}
            type="text"
            className={cn(
              "w-full text-normal z-50 border-none h-12 rounded-md focus:outline-none focus:ring-0 px-4 bg-gray-900 shadow-md"
            )}
          />

          <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
            <AnimatePresence mode="wait">
              {!value && (
                <motion.p
                  initial={{
                    y: 5,
                    opacity: 0,
                  }}
                  key={`current-placeholder-${currentPlaceholder}`}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -15,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                  }}
                  className=" text-normal font-normal p-4 text-neutral-400 text-left w-[calc(100%-2rem)] truncate"
                >
                  {placeholders[currentPlaceholder]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* <label
          className="block text-gray-700 text-sm font-bold "
          htmlFor="email"
        >
          Description
        </label> */}
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
          value={description}
          placeholder="Your Message *"
          rows={5}
          className={cn(
            "w-full text-normal z-50 border-none rounded-md focus:outline-none focus:ring-0 p-3 bg-gray-900 shadow-md"
          )}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-3 py-2 mt-4 text-white bg-[#212542] rounded hover:bg-[#32396a]"
      >
        <h1>{isLoading ? "Loading..." : "Submit"}</h1>
        <svg
          className="w-5 h-5 text-blue-600 rotate-45 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
          />
        </svg>
      </button>
    </form>
  );
}
