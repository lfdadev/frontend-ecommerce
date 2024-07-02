"use client"
import React, { useState, FormEvent } from "react"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text } from "@medusajs/ui"

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  phone: HTMLInputElement
  description: HTMLTextAreaElement
}

interface ContactForm extends HTMLFormElement {
  elements: FormElements
}

const EventForm: React.FC = () => {
  const [accepted, setAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<ContactForm>) => {
    event.preventDefault()
    const { name, phone, description } = event.currentTarget.elements

    if (!name.value || !phone.value || !description.value) {
      toast.error("Por favor, completa todos los campos requeridos")
      return
    }
    if (!accepted) {
      toast.error("¡Debes aceptar la política de privacidad primero!")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await axios.post("https://formspree.io/f/xnnaqdor", {
        name: name.value,
        phone: phone.value,
        description: description.value,
      })
      toast.success("Enviado correctamente")
      console.log("Formulario enviado", response.data)
      name.value = ""
      phone.value = ""
      description.value = "" 
      setAccepted(false)
    } catch (error) {
      console.error("Error al enviar formulario", error)
    }
    setIsSubmitting(false)
  }

  const handleCheckboxChange = () => {
    setAccepted(!accepted)
  }

  return (
    <div className="flex flex-col bg-neutral-50 p-8 small:w-[420px] w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center text-black bg-primary py-2">Formulario Eventos</h1>

        <div className="flex flex-col pt-4">
          <label
            htmlFor="name"
            className="flex flex-col gap-2 text-lg font-semibold text-neutral-500"
          >
            Nombre
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-transparent border-b focus:border-b-2 focus:border-b-neutral-400 outline-none focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="flex flex-col gap-2 text-lg font-semibold text-neutral-500"
          >
            Teléfono / Correo
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="bg-transparent border-b focus:border-b-2 focus:border-b-neutral-400 outline-none focus:outline-none text-sm"
            />
          </label>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="flex flex-col gap-2 text-lg font-semibold text-neutral-500"
          >
            Descripción
            <textarea id="description" name="description" required className="bg-transparent border-b focus:border-b-2 focus:border-b-neutral-400 outline-none focus:outline-none text-sm" />
          </label>
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
          className="scale-125"
            type="checkbox"
            checked={accepted}
            onChange={handleCheckboxChange}
          />
          <LocalizedClientLink
            href="/legal"
            className="flex items-center gap-2 text-center hover:underline"
          >
            <Text className="txt-small-plus txt-ui-fg-subtle text-center font-semibold">
              Aviso Legal y Política de Privacidad
            </Text>
          </LocalizedClientLink>
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-black text-white font-semibold tracking-wider py-2 rounded-sm hover:bg-neutral-600">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <Toaster />
    </div>
  )
}

export default EventForm
