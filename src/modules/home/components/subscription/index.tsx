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
        toast.error("Ha ocurrido un error o el correo no existe")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="w-full py-6 small:py-12 px-4 small:px-10">
      <Toaster />
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">
        <div className="w-full flex h-[450px]">
          <img
            src="/images/banner-newsletter.webp"
            alt="banner suscripcion"
            className="w-full object-center object-cover filter brightness-90"
          />
        </div>
        <form
          className="absolute flex flex-col gap-5 text-center items-center"
          onSubmit={subscribe}
        >
          <h1 className="text-3xl small:text-5xl font-bold small:max-w-lg">
            Únete a nuestra newsletter
          </h1>
          <p className="text-sm small:text-base max-w-xs small:max-w-sm italic ">
            Suscríbete y recibe ofertas exclusivas y novedades en tu correo
          </p>
          <div className="flex flex-col gap-1 px-10 small:px-0 text-sm small:text-base">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Introduce tu correo..."
              className="px-4 py-2 small:px-6 small:py-3 rounded-sm outline-none w-60 small:w-96 text-center placeholder:text-neutral-300"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 small:px-6 small:py-3 bg-neutral-800 hover:bg-neutral-600 rounded-sm border border-white text-white font-bold flex items-center justify-center transition-all "
            >
              {isLoading ? <Spinner size={24} /> : "Únete"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscription
