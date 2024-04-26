import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <img src="https://i.postimg.cc/Rh7c0gtS/fondo-test.webp" alt="fondo" className="w-[100%] absolute h-[100%]"/>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span className="flex flex-col gap-2">
          <Heading
            level="h1"
            className="text-[4rem] leading-10 text-ui-fg-base font-bold text-red-500"
          >
            Birmin Gallery
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-10 text-ui-fg-subtle font-normal text-black"
          >
            Store Shop
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        ></a>
      </div>
    </div>
  )
}

export default Hero
