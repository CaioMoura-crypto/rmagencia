"use client"
import React from "react"
import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react"
import { Image } from "next-sanity/image"
import { urlFor } from "@/sanity/lib/image"

type Work = {
  title: string | null
  image: string | null
}

interface HeroProps {
  heroTitle: string | null
  heroDescription: string | null
  works: Work[]
}

interface WorkCardProps {
  work: Work
  translate: MotionValue<number>
}

export const Hero = ({ works, heroTitle, heroDescription }: HeroProps) => {
  const firstRow = works.slice(0, 5)
  const secondRow = works.slice(5, 10)
  const thirdRow = works.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">{heroTitle}</h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
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
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const WorkCard = ({ work, translate }: WorkCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={work.title}
      className="group/work h-96 w-[30rem] relative shrink-0">
      <div className="block group-hover/work:shadow-2xl ">
        {work.image && (
          <Image
            src={urlFor(work.image).url()}
            fill={true}
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={work.title!}
          />
        )}
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/work:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/work:opacity-100 text-white">
        {work.title}
      </h2>
    </motion.div>
  )
}
