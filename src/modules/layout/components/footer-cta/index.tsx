"use client"
/* eslint-disable @next/next/no-img-element */

import Button from "@modules/common/components/button"
import { useState } from "react"
import toast from "react-hot-toast"
import { Dialog, Transition } from "@headlessui/react"
import Spinner from "@modules/common/icons/spinner"
import axios from "axios"

const FooterCTA = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      toast.error("Debes ingresar un correo electrónico")
      return
    }
    setIsLoading(true)

    axios
      .post("http://localhost:9000/mailchimp/subscribe", {
        email,
      })
      .then((e) => {
        toast.success("¡Te has suscrito correctamente!")
        setEmail("")
      })
      .catch((e) => {
        console.error(e)
        toast.error("Ha ocurrido un error")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="w-full flex relative items-center justify-center text-gray-900">
      <div className="absolute z-10 flex flex-col gap-4 small:max-w-[30%] text-center px-8 small:px-0">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl small:text-5xl">
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
            className="rounded-lg tracking-wider text-sm small:text-base"
          >
            {isLoading ? <Spinner size={24} /> : "Suscribirse"}
          </Button>
        </form>

      </div>

      <div className="w-full flex h-[450px]">
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
