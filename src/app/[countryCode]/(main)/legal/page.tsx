import LegalTemplate from "@modules/legal/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal advice, Privacy Policy and Cookies.",
}

export default async function LegalPage() {
  return <LegalTemplate />
}
