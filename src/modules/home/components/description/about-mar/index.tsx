/* eslint-disable @next/next/no-img-element */
import React from "react"

const AboutMar = () => {
  return (
    <div className="flex flex-col-reverse small:flex-row justify-between items-center small:items-start w-full gap-20 text-justify">
      <div className="flex flex-col gap-10 text-neutral-700 tracking-wider">
        <div className="flex flex-col gap-2 small:gap-4">
          <span className="text-xs small:text-sm text-primary font-semibold uppercase">
            Sobre mí
          </span>
          <h2 className="text-lg small:text-xl font-bold">
            ¡Hola! Soy Mar, quien está detrás de La Fuerza del Alma.
          </h2>
          <h2 className="text-sm small:text-base pt-3">
            Soy quien hará tus velas, las intencionará con mucho amor,
            empaquetará y enviará, para que recibas toda esa buena energía.
          </h2>
          <p className="text-sm small:text-base">
            Empecé haciendo velas porque unas navidades pedí uno de esos packs
            DIY para probar, nunca imaginé que un año después me encontraría
            profesionalizando mi producto y yendo de feria en feria hasta
            incluso tener un espacio propio en el que poder compartir con
            vosotras toda esa energía y cariño.
          </p>
          <p className="text-sm small:text-base">
            Mi intención con todos los productos que ofrecemos a día de hoy al
            igual que los talleres es siempre dar lo mejor de mi a este mundo y
            aportar mi granito de arena ayudando e intencionando las velas para
            darles esa energía que todos necesitamos.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-justify items-start ">
          <span className="text-xs small:text-sm text-primary font-semibold uppercase">
            Workshop
          </span>
          <h2 className="text-lg small:text-xl font-bold">
            ¿Quieres probar tú mism@? Descubre nuestros talleres
          </h2>
          <p className="text-sm small:text-base pt-3">
            Si eres de los que le gusta ponerse manos a la obra, ésta es tu
            mejor opción. Sumérgete en la magia de las velas. En este taller
            aprenderás a crear tu propia vela desde cero. Contáctanos para más
            información y detalles.
          </p>
        </div>
      </div>

      <img
        src="/images/about-image.webp"
        alt="Mar"
        className="w-2/6 z-10 hidden small:block rounded-md relative"
      />
      <img
        src="/images/about-image-responsive.webp"
        alt="Mar"
        className="w-full z-10 block small:hidden"
      />
    </div>
  )
}

export default AboutMar
