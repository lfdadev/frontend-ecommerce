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
  // Ordenamos las colecciones para que la que tiene el título "Workshops" vaya primero, sin distinción de mayúsculas
  const sortedCollections = collections.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();

    if (aTitle === "workshops") return -1; // "Workshops" debe ir primero
    if (bTitle === "workshops") return 1;  // Si "b" es "Workshops", debe ir después de "a"
    return 0; // Si ninguno es "Workshops", mantenemos el orden original
  });

  return sortedCollections.map((collection) => (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  ));
}
