"use client"
/* eslint-disable @next/next/no-img-element */
import { Toaster, toast } from "react-hot-toast"
import axios from "axios"
import { useState } from "react"
import Spinner from "@modules/common/icons/spinner"

const Subscription = () => {
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
      .post(
        `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/mailchimp/subscribe`,
        {
          email,
        }
      )
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
    <div className="w-full py-6 small:py-12">
      <Toaster />
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6 px-2 small:px-0">
        <img
          src="/images/banner-subs.svg"
          alt="fondo"
          className="object-cover w-full h-[350px] small:h-full z-0"
        />
        <form className="absolute flex flex-col gap-5" onSubmit={subscribe}>
          <h1 className="text-3xl small:text-5xl font-bold text-white max-w-md">
            Suscríbete a nuestra newsletter
          </h1>
          <p className="text-sm small:text-base text-white font-semibold">
            Recibe ofertas exclusivas y novedades en tu correo
          </p>
          <div className="flex flex-col gap-1 px-10 small:px-0 text-sm small:text-base">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Correo electrónico"
              className="px-4 py-2 small:px-6 small:py-4 rounded-sm outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 small:px-6 small:py-4 bg-secondary rounded-sm text-black font-semibold hover:bg-terciary flex items-center justify-center"
            >
              {isLoading ? <Spinner size={24} /> : "Suscribirse"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscription
