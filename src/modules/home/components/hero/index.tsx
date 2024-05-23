/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-ui-bg-subtle overflow-hidden">
      <div className="flex flex-col small:flex-row h-[520px] small:h-full bg-black justify-end small:justify-between mt-14 small:mt-16 items-center relative">
        <div className="flex flex-col gap-4 text-end justify-end w-full items-end small:items-end px-5 py-32 small:px-20 small:py-20 z-30">
          <div className="text-sm small:text-base bg-white text-black font-bold px-4 py-2 rounded-sm">
            ORIGINAL CLOTHES
          </div>
          <h1 className="text-[3rem] small:text-[4rem] font-bold text-white whitespace-nowrap">
            D<span className="text-primary italic">O</span>N&apos;T{" "}
            <span className="text-secondary italic">O</span>BSESS
          </h1>
          <p className="text-white italic">Join the crew</p>
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
