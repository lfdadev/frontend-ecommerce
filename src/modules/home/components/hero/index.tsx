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
    <div className="h-[100vh] small:h-[75vh] w-full relative bg-ui-bg-subtle small:overflow-hidden">
      <div className="flex flex-col small:flex-row h-full bg-black justify-center small:justify-between mt-0 small:mt-16 items-center relative">
        <div className="flex flex-col gap-4 text-end w-full items-end small:items-end px-5 pt-32 small:px-20 small:py-20 z-30">
          <motion.div
            animate={animationOptions}
            initial={{ opacity: 0 }}
            className="text-sm small:text-base text-black font-bold px-5 py-2 bg-gradient-to-r from-primary to-secondary"
          >
            ORIGINAL CLOTHES
          </motion.div>
          <motion.h1
            animate={animationOptions2}
            initial={{ opacity: 0 }}
            className="text-[2.8rem] small:text-[4rem] font-bold text-white whitespace-nowrap"
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
          className="w-full small:w-[700px] h-full absolute small:relative z-10 object-cover filter brightness-50 small:brightness-75"
        />
      </div>
    </div>
  )
}

export default Hero
