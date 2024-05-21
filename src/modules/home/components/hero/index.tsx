/* eslint-disable @next/next/no-img-element */
import { Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-ui-bg-subtle overflow-hidden">
      <div className="flex bg-black justify-between mt-16 items-center">
        <div className="flex flex-col gap-4 text-end justify-end w-full items-end p-20">
          <div className="bg-white text-black font-bold px-4 py-2 rounded-sm">
            CLOTHES FOR BROS
          </div>
          <h1 className="text-[4rem] font-bold text-white">
            D<span className="text-primary">O</span>N&apos;T{" "}
            <span className="text-secondary">O</span>BSESS
          </h1>
          <p className="text-white">Únete al club</p>
        </div>
        <Image src="/images/hero.png" alt="fondo" width={800} height={800} />
      </div>
    </div>
  )
}

export default Hero
