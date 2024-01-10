import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { Toaster } from "react-hot-toast"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
      <Toaster />
      <Footer />
    </>
  )
}
