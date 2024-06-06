
import FAQTemplate from "@modules/faq/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions.",
}

export default async function FAQPage() {
  return <FAQTemplate />
}
