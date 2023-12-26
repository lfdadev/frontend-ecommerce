"use client"
/* eslint-disable @next/next/no-img-element */

import Button from "@modules/common/components/button"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const FooterCTA = () => {
  const [email, setEmail] = useState("")

  function subscribe(e: any) {
    e.preventDefault()
    if (!email) {
      return
    }

    axios
      .post(
        "https://server.lafuerzadelalma.com/mailchimp/subscribe",
        {
          email,
        },
        {
          withCredentials: true, // Si estás enviando cookies, asegúrate de incluirlas
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://www.lafuerzadelalma.com",
          },
        }
      )
      .then((e) => {
        toast.success("¡Suscrito con éxito!")
        setEmail("")
      })
      .catch((e) => {
        console.error(e)
        toast.error("Ha ocurrido un error")
      })
  }

  return (
    <div className="w-full flex relative items-center justify-center text-gray-900">
      <div className="absolute z-10 flex flex-col gap-4 small:max-w-[40%] text-center px-8 small:px-0">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl small:text-7xl font-neutral">
            Únete a nuestra newsletter
          </h2>
          <p className="text-sm small:text-base">
            Recibe nuestras ofertas exclusivas
          </p>
        </div>
        <form
          className="flex flex-col gap-4 px-6 small:px-0"
          onSubmit={subscribe}
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Correo electrónico"
            className="rounded-lg p-3 outline-none shadow"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="rounded-lg tracking-wider text-sm small:text-lg"
          >
            Suscribirse
          </Button>
        </form>
      </div>

      <div className="w-full flex h-[550px]">
        <img
          src="/banner-newsletter.webp"
          alt="banner suscripcion"
          className="w-full object-center object-cover"
        />
      </div>
    </div>
  )
}

export default FooterCTA
