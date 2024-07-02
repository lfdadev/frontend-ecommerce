"use client"
import Image from "next/image"
import React, { useState } from "react"

const Carrousel = () => {
  const [selected, setSelected] = useState<number | null>(null)

  const images = [
    { src: "/images/form-1.svg", label: "Alma" },
    { src: "/images/form-2.svg", label: "Cuerpo" },
    { src: "/images/form-3.svg", label: "Mente" },
  ]
  return (
    <div className="flex flex-col small:flex-row space-x-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden h-[400px] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer ${
            selected === index ? "w-[600px]" : "w-[600px] small:w-[400px]"
          }`}
          onMouseEnter={() => setSelected(index)}
          onMouseLeave={() => setSelected(null)}
        >
          <Image
            src={image.src}
            alt={`imagen${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300"
          />
          {selected === index && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-4xl font-bold border-b-primary border-b-4">
                {image.label}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Carrousel
