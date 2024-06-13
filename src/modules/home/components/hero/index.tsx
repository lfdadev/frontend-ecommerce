"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { motion } from "framer-motion"
import ContactButtom from "@modules/common/components/whatsapp"

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
      <div className="flex h-full pb-32 small:pb-0 items-end relative">
        <div className="flex flex-col gap-3 small:gap-5 text-end w-full items-end small:items-start px-5 small:px-20 py-10 small:py-20 z-30">
          <motion.div
            animate={animationOptions}
            initial={{ opacity: 0 }}
            className="text-xs small:text-sm text-light bg-primary px-4 py-3 rounded-sm text-black"
          >
            handmade in <span className="font-semibold">Mataró, Barcelona</span>
          </motion.div>
          <motion.h1
            animate={animationOptions2}
            initial={{ opacity: 0 }}
            className="text-3xl small:text-4xl text-white drop-shadow-md shadow-black uppercase font-bold tracking-wide"
          >
            <span className="text-4xl small:text-5xl text-primary">A</span>
            lma,{" "}
            <span className="text-4xl small:text-5xl text-primary">C</span>
            uerpo y{" "}
            <span className="text-4xl small:text-5xl text-primary">M</span>
            ente
          </motion.h1>
          <motion.p
            animate={animationOptions3}
            initial={{ opacity: 0 }}
            className="text-white italic"
          >
            Talleres y productos esotéricos
          </motion.p>
        </div>
        <img
          src="/images/heroweb.webp"
          alt="test"
          className="absolute inset-0 filter brightness-75 z-0 h-full small:h-fit object-cover w-full"
        />
      </div>
      <ContactButtom />
    </div>
  )
}

export default Hero
