"use client"

import React, { useState } from "react"
import LegalAdvice from "../components/legal"
import Privacity from "../components/privacity"
import { Cookies } from "../components/cookies"

const LegalTemplate = () => {
  const [selected, setSelected] = useState(0)

  const tabs = [
    {
      title: "Aviso Legal",
      content: <LegalAdvice />,
    },
    {
      title: "Política de Privacidad",
      content: <Privacity />,
    },
    {
      title: "Política de Cookies",
      content: <Cookies />,
    },
  ]

  const handleTabChange = (index: number) => {
    setSelected(index)
  }

  return (
    <main className="flex-1 w-full py-16 mt-6 small:mt-14 px-6 small:px-20 text-justify leading-relaxed text-neutral-700">
      <div className="flex flex-col small:flex-row">
        {" "}
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`text-xl font-semibold  rounded-sm px-6 py-2 ${
              selected === index
                ? "border-2 border-primary text-neutral-900"
                : "text-neutral-400"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-8">{tabs[selected].content}</div>
    </main>
  )
}

export default LegalTemplate
