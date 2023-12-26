import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Tienda",
  description: "Explora nuestros productos.",
}

export default function StorePage() {
  return <StoreTemplate />
}
