import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full pt-12 small:pt-32 pb-10">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
          <div className="flex flex-col gap-2">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <h2 className="font-bold tracking-wider">La Fuerza del Alma</h2>
            </LocalizedClientLink>
            <Text className="txt-medium-plus txt-ui-fg-subtle italic font-semibold text-neutral-500">
              Productos esotéricos y talleres
            </Text>
            <Text className="txt-small-plus txt-ui-fg-subtle">
              Mataró, Barcelona
            </Text>
            <Text className="txt-small-plus txt-ui-fg-subtle">
              lafuerzadelalma.fya@gmail.com
            </Text>
            <Text className="txt-small-plus txt-ui-fg-subtle">
              Whatsapp: +34 626 88 98 80
            </Text>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categorías
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )} */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Colecciones
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Contacto</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://www.instagram.com/lafuerzadelalma.fa/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base text-pink-600 font-semibold"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/lafuerzadelalmaa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base text-blue-600 font-semibold"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=34626889880&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base text-green-500 font-semibold"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center">
          <LocalizedClientLink
            href="/legal"
            className="flex items-center gap-2 text-center hover:underline"
          >
            <Text className="txt-small-plus txt-ui-fg-subtle text-center font-semibold">
              Aviso Legal y Política de Privacidad
            </Text>
          </LocalizedClientLink>
          <Text className="txt-small-plus txt-ui-fg-subtle text-center">
            © 2024 La Fuerza del Alma. Todos los derechos reservados.
          </Text>
        </div>
      </div>
    </footer>
  )
}
