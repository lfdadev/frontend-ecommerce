import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  // Ordenamos las colecciones para que la que tiene el handle "taller" vaya primero
  const sortedCollections = collections.sort((a, b) => {
    if (a.handle === "taller") return -1
    if (b.handle === "taller") return 1
    return 0
  })

  return sortedCollections.map((collection) => (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  ))
}
