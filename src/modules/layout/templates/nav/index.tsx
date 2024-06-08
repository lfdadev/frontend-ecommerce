/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react"
import "./nav.css"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto border-b duration-200 bg-white border-ui-border-base font-semibold uppercase">
        <nav className="content-container flex items-center justify-between w-full h-full text-md">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src="/images/logo.jpg"
                alt="logo text"
                width={120}
                height={120}
                className="w-20 small:w-[120px]"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="font-semibold uppercase tracking-wide hover:text-primary"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Buscar
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="font-semibold uppercase tracking-wide hover:text-primary"
                href="/account"
                data-testid="nav-account-link"
              >
                Cuenta
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="font-semibold uppercase tracking-wide hover:text-primary flex gap-2"
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
        <div className="runing-row top or">
          <div></div>
        </div>
      </header>
    </div>
  )
}
