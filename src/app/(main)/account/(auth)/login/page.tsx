import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Log in",
  description: "Conéctate con tu cuenta de La Fuerza del Alma.",
}

export default function Login() {
  return <LoginTemplate />
}
