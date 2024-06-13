import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products || products.length === 0) {
    return null
  }

  // Filtrar los primeros 3 productos
  const firstThreeProducts = products.slice(0, 3)

  return (
    <div className="content-container py-12 small:py-16">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge font-semibold">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Ver más
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-16 gap-y-24 small:gap-y-36">
        {firstThreeProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview
              productPreview={product}
              region={region}
              isFeatured
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
