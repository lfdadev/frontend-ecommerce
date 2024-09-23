/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base ">
        <nav className="content-container flex items-center justify-between w-full h-full text-md font-semibold uppercase">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase flex items-center gap-4 text-xl font-semibold"
              data-testid="nav-store-link"
            >
              <p className="hidden small:block">
                <span className="font-normal normal-case">La</span> Fuerza{" "}
                <span className="font-normal lowercase">del</span> Alma
              </p>

              <img src="/images/logo.webp" className="w-20" alt="logo" />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="font-semibold uppercase tracking-wide underline-text"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Buscar
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="font-semibold uppercase tracking-wide underline-text"
                href="/account"
                data-testid="nav-account-link"
              >
                Cuenta
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="font-semibold uppercase tracking-wide"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cesta (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
        <div className="bg-neutral-800 w-full text-white py-3 flex flex-col small:flex-row items-center justify-center text-sm italic font-normal gap-1 small:gap-6">
          <p>Envíos gratis por compras mayores a 50 €</p>
          <p>
            Visita nuestro{" "}
            <a
              href="https://www.instagram.com/lafuerzadelalma.fa/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white text-primary font-semibold"
            >
              Instagram
            </a>{" "}
            para información sobre talleres
          </p>
        </div>
      </header>
    </div>
  )
}
