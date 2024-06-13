/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import AboutMar from "./about-mar"

const About = () => {
  const animationOptions = {
    opacity: 1,
    transition: { duration: 1.2 },
  }

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.6, triggerOnce: true })

  return (
    <div className="mt-6 small:mt-10 w-full py-10 small:py-20 flex flex-col gap-10 small:gap-32 items-center text-justify text-gray-900 bg-white overflow-x-hidden px-5 small:px-10">
      <div className="w-full">
        <AboutMar />
      </div>

      <div className="flex flex-col gap-4 small:gap-6 w-full">
        <div className="flex small:h-64 overflow-hidden relative items-center">
          <img
            src="/images/banner-velas.webp"
            alt="banner de velas"
            className="w-full object-contain block"
          />
          <motion.h2
            animate={inView1 ? animationOptions : {}}
            initial={{ opacity: 0 }}
            ref={ref1}
            className="uppercase text-white bg-neutral-800 font-semibold absolute small:text-2xl px-3 small:px-6 py-1 small:py-2 mx-4 small:mx-10 border-2 border-white tracking-wider"
          >
            Velas
          </motion.h2>
        </div>
        <div className="flex small:h-64 overflow-hidden relative items-center justify-end">
          <img
            src="/images/banner-sahumerios.webp"
            alt="banner de velas"
            className="w-full object-contain block"
          />
          <motion.h2
            animate={inView2 ? animationOptions : {}}
            initial={{ opacity: 0 }}
            ref={ref2}
            className="uppercase text-white bg-neutral-800 font-semibold absolute small:text-2xl px-3 small:px-6 py-1 small:py-2 mx-4 small:mx-10 border-2 border-white tracking-wider"
          >
            Sahumerios
          </motion.h2>
        </div>
        <div className="flex small:h-64 overflow-hidden relative items-center justify-center">
          <img
            src="/images/banner-bisuteria.webp"
            alt="banner de bisuteria"
            className="w-[50%] object-contain block"
          />
          <img
            src="/images/banner-bisuteria2.webp"
            alt="banner de bisuteria"
            className="w-[50%] object-contain block"
          />
          <motion.h2
            animate={inView3 ? animationOptions : {}}
            initial={{ opacity: 0 }}
            ref={ref3}
            className="uppercase text-white bg-neutral-800 font-semibold absolute small:text-2xl px-3 small:px-6 py-1 small:py-2 mx-4 small:mx-10 border-2 border-white tracking-wider"
          >
            Bisutería
          </motion.h2>
        </div>
        <div className="flex small:h-64 overflow-hidden relative items-center justify-start">
          <img
            src="/images/banner-workshop.webp"
            alt="banner de workshop"
            className="w-full object-contain block"
          />
          <motion.h2
            animate={inView4 ? animationOptions : {}}
            initial={{ opacity: 0 }}
            ref={ref4}
            className="uppercase text-white bg-neutral-800 font-semibold absolute small:text-2xl px-3 small:px-6 py-1 small:py-2 mx-4 small:mx-10 border-2 border-white tracking-wider"
          >
            Workshop
          </motion.h2>
        </div>
        <div className="flex small:h-64 overflow-hidden relative items-center justify-end">
          <img
            src="/images/banner-incienso.webp"
            alt="banner de incienso"
            className="w-full object-contain block"
          />
          <motion.h2
            animate={inView5 ? animationOptions : {}}
            initial={{ opacity: 0 }}
            ref={ref5}
            className="uppercase text-white bg-neutral-800 font-semibold absolute small:text-2xl px-3 small:px-6 py-1 small:py-2 mx-4 small:mx-10 border-2 border-white tracking-wider"
          >
            Incienso
          </motion.h2>
        </div>
      </div>
    </div>
  )
}

export default About
