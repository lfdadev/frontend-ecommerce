import Image from "next/image"

const About = () => {
  return (
    <div className="w-full">
      <div className="inset-0 z-10 flex flex-col justify-center items-center text-center gap-6">
        <Image
          src="/images/banner-multi.svg"
          alt="fondo"
          layout="responsive"
          width={1000}
          height={500}
          className="hidden small:block"
        />
        <Image
          src="/images/banner-multi2.svg"
          alt="fondo"
          layout="responsive"
          width={1000}
          height={500}
          className="block small:hidden"
        />
      </div>
    </div>
  )
}

export default About
