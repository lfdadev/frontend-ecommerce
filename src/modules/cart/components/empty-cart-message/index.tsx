import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Cesta
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        No tienes nada en tu cesta. Cambiemos esto, usa el link para buscar en nuestros productos.
      </Text>
      <div>
        <UnderlineLink href="/store">Explorar productos</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
