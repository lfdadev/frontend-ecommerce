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

          <div className="flex items-start h-full">
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
    <LocalizedClientLink
      className="font-semibold uppercase tracking-wide underline-text"
      href="https://www.lafuerzadelalma.com/es/store"
      data-testid="nav-account-link"
    >
      TIENDA
    </LocalizedClientLink>
  </div>
</div>
<div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
  <div className="hidden small:flex items-center gap-x-6 h-full">
    <LocalizedClientLink
      className="font-semibold uppercase tracking-wide underline-text"
      href="https://www.lafuerzadelalma.com/es/collections/taller"
      data-testid="nav-account-link"
    >
      WORKSHOPS
    </LocalizedClientLink>
  </div>
</div>
<div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
  <div className="hidden small:flex items-center gap-x-6 h-full">
    <LocalizedClientLink
      className="font-semibold uppercase tracking-wide underline-text"
      href="https://www.lafuerzadelalma.com/es/form"
      data-testid="nav-account-link"
    >
      EVENTOS
    </LocalizedClientLink>
  </div>
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
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
    >
        <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 6H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 15H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.102 5l1.313 7h7.17l1.313-7H3.102zM5 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm7 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    </svg>
    (0)
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
