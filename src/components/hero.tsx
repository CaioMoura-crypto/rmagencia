"use client";

import React, { useRef, useState } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Image } from "next-sanity/image";
import { urlFor } from "@/sanity/lib/image";

type Work = {
  title: string | null;
  image: string | null;
};

interface HeroProps {
  heroTitle: string | null;
  heroDescription: string | null;
  works: Work[];
}

interface WorkCardProps {
  work: Work;
  translate: MotionValue<number>;
  onExpand: () => void;
}

export const Hero = ({ works, heroTitle, heroDescription }: HeroProps) => {
  const firstRow = works.slice(0, 5);
  const secondRow = works.slice(5, 10);
  const thirdRow = works.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-500, 200]), springConfig);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      <div
  ref={ref}
  className="relative z-10 min-h-[130vh] pt-16 pb-40 overflow-x-hidden overflow-y-hidden antialiased flex flex-col px-2 w-full max-w-[90%] lg:max-w-[1400px] mx-auto"
>

        <div className="max-w-7xl relative mx-auto py-20 md:py-35 px-4 w-full left-0 top-16">
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">{heroTitle}</h1>
          <p className="max-w-2xl text-base font-semibold md:text-2xl mt-0 dark:text-neutral-200">
            {heroDescription}
          </p>
        </div>

        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          {[firstRow, secondRow, thirdRow].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className={`flex ${rowIndex % 2 === 0 ? "flex-row-reverse space-x-reverse" : "flex-row"} mb-20 space-x-20`}
            >
              {row.map((work, index) => {
                const absoluteIndex = rowIndex * 5 + index;
                return (
                  <WorkCard
                    key={absoluteIndex}
                    work={work}
                    translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
                    onExpand={() => setExpandedIndex(absoluteIndex)}
                  />
                );
              })}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {expandedIndex !== null && works[expandedIndex] && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={() => setExpandedIndex(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={urlFor(works[expandedIndex].image!).url()}
              alt={works[expandedIndex].title ?? ""}
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
            />

            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>

            {expandedIndex > 0 && (
              <button
                onClick={() => setExpandedIndex(expandedIndex - 1)}
                className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-white text-4xl"
              >
                &#8592;
              </button>
            )}

            {expandedIndex < works.length - 1 && (
              <button
                onClick={() => setExpandedIndex(expandedIndex + 1)}
                className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-white text-4xl"
              >
                &#8594;
              </button>
            )}
          </div>

          <p className="text-white mt-4">{works[expandedIndex].title}</p>
        </div>
      )}
    </>
  );
};

export const WorkCard = ({ work, translate, onExpand }: WorkCardProps) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/work h-90 w-[30rem] relative shrink-0 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onExpand();
      }}
    >
      <div className="block group-hover/work:shadow-2xl">
        {work.image && (
          <Image
            src={urlFor(work.image).url()}
            fill={true}
            className="object-cover object-left-top absolute h-full w-full inset-0 rounded-md"
            alt={work.title ?? ""}
          />
        )}
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/work:opacity-80 bg-black pointer-events-none rounded-md" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/work:opacity-100 text-white">
        {work.title}
      </h2>
    </motion.div>
  );
};
