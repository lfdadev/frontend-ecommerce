import Image from "next/image"

const Subscription = () => {
  return (
    <div className="w-full py-12">
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">
        <Image
          src="/images/banner-subs.png"
          alt="fondo"
          layout="responsive"
          width={1000}
          height={400}
        />
        <div className="absolute flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-white max-w-md">
            Suscríbete a nuestro newsletter
          </h1>
          <p className="text-white font-semibold">
            Recibe ofertas exclusivas y novedades en tu correo
          </p>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Introduce tu correo electrónico"
              className="px-6 py-4 rounded-sm outline-none"
            />
            <button className="px-6 py-4 bg-secondary rounded-sm text-black font-semibold hover:bg-terciary">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
