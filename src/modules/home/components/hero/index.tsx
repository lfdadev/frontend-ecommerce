"use client"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
/* eslint-disable @next/next/no-img-element */
import ContactButtom from "@modules/common/components/whatsapp"
import { useState } from "react"

const Hero = () => {
  const [show, setShow] = useState(true)

  const handleToggle = () => {
    setShow(!show)
  }
  return (
    <div className="h-[100vh] small:h-[75vh] w-full relative bg-ui-bg-subtle small:overflow-hidden">
      <div className="flex h-full pb-32 small:pb-0 items-end relative">
        <div className="flex flex-col gap-3 small:gap-5 text-end w-full items-end small:items-start px-5 small:px-20 py-10 small:py-20 z-30">
          <div className="text-xs small:text-sm text-light bg-primary px-4 py-3 rounded-sm text-black">
            handmade in <span className="font-semibold">Mataró, Barcelona</span>
          </div>
          <h1 className="text-3xl small:text-4xl text-white drop-shadow-md shadow-black uppercase font-bold tracking-wide">
            <span className="text-4xl small:text-5xl text-primary">A</span>
            lma, <span className="text-4xl small:text-5xl text-primary">C</span>
            uerpo y{" "}
            <span className="text-4xl small:text-5xl text-primary">M</span>
            ente
          </h1>
          <p className="text-white italic">Talleres y productos esotéricos</p>
        </div>
        <img
          src="/images/heroweb.webp"
          alt="test"
          className="absolute inset-0 filter brightness-75 z-0 h-full small:h-fit object-cover w-full"
        />

        <div className="absolute z-40 bg-white text-black flex-col gap-0 small:gap-4 p-2 small:p-5 items-center text-center w-52 small:w-72 opacity-80 small:opacity-90 small:right-5 small:bottom-5 animate-in rounded-sm shadow-sm hidden small:flex">
          <h1 className="text-lg small:text-2xl font-bold tracking-wider text-black">
            NOVEDAD
          </h1>
          <h3 className="text-sm small:text-lg">
            Personaliza tu detalle para bodas, comuniones o eventos{" "}
          </h3>
          <LocalizedClientLink
            href="/form"
            className="flex items-center pt-2 small:pt-0"
          >
            <Text className="bg-black text-white px-2 small:px-4 py-1 small:py-2 hover:bg-neutral-600 text-center font-semibold">
              Saber más
            </Text>
          </LocalizedClientLink>
        </div>

        {/* Responsive */}

        {show && (
          <div className="absolute z-40 bg-white text-black flex-col gap-0 small:gap-4 p-2 small:p-5 items-center text-center w-52 small:w-72 opacity-80 small:opacity-90 left-3 top-20 animate-in rounded-sm shadow-sm flex small:hidden">
            <h1 className="text-lg small:text-2xl font-bold tracking-wider text-black">
              NOVEDAD
            </h1>
            <h3 className="text-sm small:text-lg">
              Personaliza tu detalle para bodas, comuniones o eventos{" "}
            </h3>
            <LocalizedClientLink
              href="/form"
              className="flex items-center pt-2 small:pt-0"
            >
              <Text className="bg-black text-white px-2 small:px-4 py-1 small:py-2 hover:bg-neutral-600 text-center font-semibold">
                Saber más
              </Text>
            </LocalizedClientLink>
            <button
              onClick={handleToggle}
              className="absolute text-lg font-semibold right-1 top-0"
            >
              X
            </button>
          </div>
        )}
      </div>
      <ContactButtom />
    </div>
  )
}

export default Hero
