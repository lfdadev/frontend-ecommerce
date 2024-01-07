"use client"
/* eslint-disable @next/next/no-img-element */

import Button from "@modules/common/components/button"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { Dialog, Transition } from "@headlessui/react"
import Spinner from "@modules/common/icons/spinner"
import { useForm } from "react-hook-form"

const FooterCTA = () => {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<Message | null>(null)

    interface Message {
      type: string
      description: string
    }

    const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!email) {
        setMessage({
          type: "error",
          description: "Email cannot be empty!",
        })
        return
      }
      setIsLoading(true)

      fetch(`http://localhost:9000/mailchimp/subscribe`, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.text()
        })
        .then((text) => {
          if (text === "OK") {
            setMessage({
              type: "success",
              description: "Subscribed successfully!",
            })
            setEmail("")
          } else {
            throw new Error("Unexpected response from server")
          }
          setEmail("")
        })
        .catch((e) => {
          console.error(e)
          setMessage({
            type: "error",
            description: "An error occurred",
          })
        })
        .finally(() => {
          setIsLoading(false)
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

          {isLoading && (
            <Transition show={isLoading}>
              <Dialog
                onClose={() => setIsLoading(false)}
                className="relative z-[100]"
              >
                <Transition.Child
                  enter="ease-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                    <Spinner size={24} />
                  </div>
                </Transition.Child>
              </Dialog>
            </Transition>
          )}

          {message && (
            <div
              className={`mt-2 text-sm font-medium ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.description}
            </div>
          )}
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
