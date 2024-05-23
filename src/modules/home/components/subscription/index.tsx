/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

const Subscription = () => {
  return (
    <div className="w-full py-6 small:py-12">
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6 px-2 small:px-0">
        <img src="/images/banner-subs.svg" alt="fondo"
        className="object-cover w-full h-[350px] small:h-full z-0"
        />
        <div className="absolute flex flex-col gap-5">
          <h1 className="text-3xl small:text-5xl font-bold text-white max-w-md">
            Suscríbete a nuestra newsletter
          </h1>
          <p className="text-sm small:text-base text-white font-semibold">
            Recibe ofertas exclusivas y novedades en tu correo
          </p>
          <div className="flex flex-col gap-1 px-10 small:px-0 text-sm small:text-base">
            <input
              type="text"
              placeholder="Introduce tu correo electrónico"
              className="px-4 py-2 small:px-6 small:py-4 rounded-sm outline-none"
            />
            <button className="px-4 py-2 small:px-6 small:py-4 bg-secondary rounded-sm text-black font-semibold hover:bg-terciary">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
