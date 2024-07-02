"use client"
import { Text } from "@medusajs/ui"
import React from "react"
import EventForm from "../components/form"
import Carrousel from "../components/carrousel"

const FORMTemplate = () => {
  return (
    <main className="flex-1 w-full py-16 mt-6 px-6 small:px-20 text-justify leading-relaxed text-neutral-700 flex flex-col gap-20 items-start">
      <div className="flex flex-col small:flex-row gap-14 items-start justify-center w-full">
        <div className="flex flex-col gap-5 max-w-3xl items-start">
          <h1 className="text-xl font-semibold border-2 border-primary px-6 py-2">
            Personaliza tu producto
          </h1>
          <h3 className="font-semibold text-lg italic">
            ¿Te gustaría incluir un trocito de la fuerza del alma en forma de
            vela en tus eventos?
          </h3>
          <div className="flex flex-col gap-4">
            <p className="txt-ui-fg-subtle">
              Te ofrecemos la posibilidad de personalizar 100% tus velas para
              cualquier evento, bodas, bautizos, comuniones, detalles para tu
              equipo de trabajo, cesta de navidad…
            </p>
            <p className="txt-ui-fg-subtle">
              Podrás escoger desde un recipiente 100% personalizado y hecho a
              mano a un recipiente de las muchas opciones que te ofreceremos y
              personalizar tu vela, desde aroma, color y decoración. Se pueden
              añadir etiquetas, tarjetas…
            </p>
            <p className="txt-ui-fg-subtle">
              Además también ofrecemos velas con forma de flores, cirio con
              flores y espiral.
            </p>
            <p className="txt-ui-fg-subtle">
              Si todo esto te resuena y te gustaría saber más, rellena el
              formulario y te contestaremos al mail lo antes posible. Incluso
              podemos cuadrar una hora (presencial o zoom) para encontrar lo que
              más te encaje para tu evento.
            </p>
          </div>
        </div>

        <EventForm />
      </div>

      <div className="w-full flex items-center justify-center overflow-hidden">
        <Carrousel />
      </div>
    </main>
  )
}

export default FORMTemplate
