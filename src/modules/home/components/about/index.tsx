/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import AboutMar from "./about-mar"

const About = () => {
  const animationOptions2 = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  }

  const animationOptions3 = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  }

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref6, inView6] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref7, inView7] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref8, inView8] = useInView({ threshold: 0.6, triggerOnce: true })

  return (
    <div className="mt-6 small:mt-10 w-full py-10 small:py-20 flex flex-col gap-16 small:gap-32 items-center text-justify text-gray-900 bg-white overflow-x-hidden">
      <div className="flex flex-col px-10 small:px-40 gap-10 mb-20">
        <AboutMar />

        <div className="flex flex-col gap-2 text-justify items-start ">
          <span className="text-xs small:text-sm text-neutral-500 uppercase">
            Workshop
          </span>
          <h2 className="text-lg small:text-xl font-bold">
            ¿Quieres probar tú mism@? Descubre nuestro taller Vela para el Alma
          </h2>
          <p className="text-sm small:text-lg pt-5">
            Si eres de los que le gusta ponerse manos a la obra, ésta es tu mejor opción. Sumérgete en la magia de las velas. En este taller aprenderás a crear tu propia vela desde cero. Contáctanos para más información y detalles.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 small:gap-16 w-full">
        <div className="flex flex-col-reverse small:flex-row items-start small:items-center gap-5 xsmall:gap-10 small:gap-0">
          {/* Desktop */}
          <img
            src="/banner-velas.webp"
            alt="banner de velas"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg hidden small:block"
          />
          {/* Responsive */}
          <img
            src="/banner-velas-responsive.webp"
            alt="banner de velas"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg block small:hidden"
          />
          <motion.h2
            animate={inView1 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: 50 }}
            ref={ref1}
            className="uppercase pl-10 small:pl-0 text-left small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full"
          >
            Velas
          </motion.h2>
        </div>
        <div className="flex flex-col-reverse small:flex-row-reverse items-end small:items-center gap-5 xsmall:gap-10 small:gap-0">
          {/* Desktop */}
          <img
            src="/banner-sahumerios.webp"
            alt="banner de sahumerios"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg hidden small:block"
          />
          {/* Responsive */}
          <img
            src="/banner-sahumerios-responsive.webp"
            alt="banner de sahumerios"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg block small:hidden"
          />
          <motion.h2
            animate={inView2 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: -50 }}
            ref={ref2}
            className="uppercase pr-10 small:pr-0 text-right small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full"
          >
            Sahumerios
          </motion.h2>
        </div>
        {/* Desktop */}
        <div className="hidden small:flex flex-row items-center gap-0">
          <img
            src="/banner-bisuteria.webp"
            alt="banner de bisuteria"
            className="w-2/5 shadow-md small:shadow-lg"
          />
          <motion.h2
            animate={inView3 ? animationOptions3 : {}}
            initial={{ opacity: 0, y: 50 }}
            ref={ref3}
            className="uppercase small:pr-0 text-right small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full"
          >
            Bisutería
          </motion.h2>
          <img
            src="/banner-bisuteria2.webp"
            alt="banner de bisuteria"
            className="w-2/5 shadow-md small:shadow-lg"
          />
        </div>
        {/* Responsive */}
        <div className="flex small:hidden flex-col-reverse small:flex-row items-start small:items-center gap-5 xsmall:gap-10 small:gap-0">
          <img
            src="/banner-bisuteria-responsive.webp"
            alt="banner de bisuteria"
            className="small:w-3/4 w-[90%] h-full object-contain shadow-md small:shadow-lg"
          />
          <motion.h2
            animate={inView4 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: 50 }}
            ref={ref4}
            className="uppercase pl-10 small:pl-0 text-left small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full"
          >
            Bisutería
          </motion.h2>
        </div>
        <div className="flex flex-col-reverse small:flex-row items-end small:items-center gap-5 xsmall:gap-10 small:gap-0">
          {/* Desktop */}
          <img
            src="/banner-workshop.webp"
            alt="banner de workshop"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg hidden small:block"
          />
          <motion.h2
            animate={inView5 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: 50 }}
            ref={ref5}
            className="uppercase pr-10 small:pr-0 text-right small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full hidden small:block"
          >
            Workshop
          </motion.h2>
          {/* Responsive */}
          <img
            src="/banner-workshop-responsive.webp"
            alt="banner de workshop"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg block small:hidden"
          />
          <motion.h2
            animate={inView6 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: -50 }}
            ref={ref6}
            className="uppercase pr-10 small:pr-0 text-right small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full block small:hidden"
          >
            Workshop
          </motion.h2>
        </div>
        <div className="flex flex-col-reverse small:flex-row-reverse items-start small:items-center gap-5 xsmall:gap-10 small:gap-0">
          {/* Desktop */}
          <img
            src="/banner-incienso.webp"
            alt="banner de incienso"
            className="small:w-3/4 w-[90%] object-contain shadow-md small:shadow-lg hidden small:block"
          />
          <motion.h2
            animate={inView7 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: -50 }}
            ref={ref7}
            className="uppercase pl-10 small:pl-0 text-left small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full hidden small:block"
          >
            Inciensos
          </motion.h2>
          {/* Responsive */}
          <img
            src="/banner-incienso-responsive.webp"
            alt="banner de incienso"
            className="small:w-3/4 w-[90%] object-contssain shadow-md small:shadow-lg block small:hidden"
          />
          <motion.h2
            animate={inView8 ? animationOptions2 : {}}
            initial={{ opacity: 0, x: 50 }}
            ref={ref8}
            className="uppercase pl-10 small:pl-0 text-left small:text-center text-xl small:text-2xl tracking-widest text-gray-700 font-semibold w-full block small:hidden"
          >
            Inciensos
          </motion.h2>
        </div>
      </div>
    </div>
  )
}

export default About
