"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  const animationOptions = {
    opacity: 1,
    transition: { duration: 0.2 },
  }

  const animationOptions2 = {
    opacity: 1,
    transition: { duration: 0.9 },
  }

  const animationOptions3 = {
    opacity: 1,
    transition: { duration: 1.3 },
  }

  return (
    <div className="h-[75vh] w-full relative bg-ui-bg-subtle overflow-hidden">
      <div className="flex flex-col small:flex-row h-[520px] small:h-full bg-black justify-end small:justify-between mt-14 small:mt-16 items-center relative">
        <div className="flex flex-col gap-4 text-end justify-end w-full items-end small:items-end px-5 py-32 small:px-20 small:py-20 z-30">
          <motion.div
            animate={animationOptions}
            initial={{ opacity: 0 }}
            className="text-sm small:text-base bg-white text-black font-bold px-4 py-2 rounded-sm"
          >
            ORIGINAL CLOTHES
          </motion.div>
          <motion.h1
            animate={animationOptions2}
            initial={{ opacity: 0 }}
            className="text-[3rem] small:text-[4rem] font-bold text-white whitespace-nowrap"
          >
            D<span className="text-primary italic">O</span>N&apos;T{" "}
            <span className="text-secondary italic">O</span>BSESS
          </motion.h1>
          <motion.p
            animate={animationOptions3}
            initial={{ opacity: 0 }}
            className="text-white italic"
          >
            Join the crew
          </motion.p>
        </div>
        <img
          src="/images/hero.svg"
          alt="fondo"
          className="w-full small:w-[700px] h-[520px] small:h-full absolute small:relative z-10 opacity-50 small:opacity-100 object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
