import Providers from "@modules/providers"
import "styles/globals.css"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className={`${montserrat.className} relative`}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
