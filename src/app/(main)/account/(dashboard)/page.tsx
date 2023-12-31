import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuenta",
  description: "Supervisa la actividad de tu cuenta.",
}

export default function Account() {
  return <OverviewTemplate />
}
