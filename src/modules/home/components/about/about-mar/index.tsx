/* eslint-disable @next/next/no-img-element */
import React from "react"

const AboutMar = () => {
  return (
    <div className="flex flex-col-reverse small:flex-row justify-between items-center small:items-start w-full gap-20 my-14">
      <div className="flex flex-col gap-2 small:gap-4 small:max-w-xl">
        <span className="text-xs small:text-sm text-neutral-500 uppercase">
          Sobre mí
        </span>
        <h2 className="text-lg small:text-xl font-bold">
          ¡Hola! Soy Mar, quien está detrás de La Fuerza del Alma.
        </h2>
        <h2 className="text-lg small:text-xl font-bold text-neutral-600">
          Soy quien hará tus velas, las intencionará con mucho amor, empaquetará
          y enviará, para que recibas toda esa buena energía.
        </h2>
        <p className="text-sm small:text-base pt-5">
          Empecé haciendo velas porque unas navidades pedí uno de esos packs DIY
          para probar, nunca imaginé que un año después me encontraría
          profesionalizando mi producto y yendo de feria en feria hasta incluso
          tener un espacio propio en el que poder compartir con vosotras toda
          esa energía y cariño.
        </p>
        <p className="text-sm small:text-base">
          Mi intención con todos los productos que ofrecemos a día de hoy al
          igual que los talleres es siempre dar lo mejor de mi a este mundo y
          aportar mi granito de arena ayudando e intencionando las velas para
          darles esa energía que todos necesitamos.
        </p>
      </div>
      <div className="flex relative shadow-lg shadow-neutral-700">
        <img
          src="/about-image.webp"
          alt="Mar"
          className="small:w-[420px] z-10 hidden small:block"
        />
        <img
          src="/about-image-responsive.webp"
          alt="Mar"
          className="w-[270px] z-10 block small:hidden"
        />
        <div className="w-full absolute h-full left-2 small:left-6 bottom-2 small:bottom-6 z-0" />
      </div>
    </div>
  )
}

export default AboutMar
