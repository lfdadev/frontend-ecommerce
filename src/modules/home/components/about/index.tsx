import Image from "next/image"

const About = () => {
  return (
    <div className="w-full">
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">
        <Image
          src="/images/banner-cloth.png"
          alt="fondo"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>
    </div>
  )
}

export default About
