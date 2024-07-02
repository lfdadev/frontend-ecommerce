import FORMTemplate from "@modules/eventform/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Form",
  description: "Perzonalize your product.",
}

export default async function FORMPage() {
  return <FORMTemplate />
}
