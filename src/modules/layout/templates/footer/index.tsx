import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faAddressCard, faRoute } from '@fortawesome/free-solid-svg-icons';

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="mr-2 text-kalnia txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
            >
              Flaurista
            </LocalizedClientLink>

            <div className="mt-2 flex flex-col gap-y-2">
              {/* <span className="txt-small-plus txt-ui-fg-base">Flaurista</span> */}
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li className="flex items-center">
                <a
                href="/about"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
                >
                <table className="invisible-table">
                  <tbody>
                  <tr>
                    <td className="pr-1.5">
                    <FontAwesomeIcon icon={faAddressCard} className="text-lg" />
                    </td>
                    <td>
                    <span>О нас</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                </a>
              </li>
              <li className="flex items-center">
                <a
                href="https://yandex.ru/maps?ll=37.37865699999999691272023483%2C55.83916099999999715919329901&mode=routes&rtext=~55.83916099999999715919329901%2C37.37865699999999691272023483&z=17"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
                >
                <table className="invisible-table">
                  <tbody>
                  <tr>
                    <td className="pr-2">
                    <FontAwesomeIcon icon={faRoute} className="text-lg" />
                    </td>
                    <td>
                    <span>Как добраться</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                </a>
              </li>
              <li className="flex items-center">
                <a
                href="/contact"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
                >
                <table className="invisible-table">
                  <tbody>
                  <tr>
                    <td className="pr-2">
                    <FontAwesomeIcon icon={faAddressBook} className="text-lg" />
                    </td>
                    <td>
                    <span>Контакты и адреса</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                </a>
              </li>
              </ul>
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Категории
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
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
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Коллекции
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
              <span className="txt-small-plus txt-ui-fg-base">Подпишитесь на нас</span>
              <div className="grid grid-cols-1 gap-y-1.5 text-ui-fg-subtle txt-small">
              <a
                href="https://vk.me/flaurista"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
              >
                <table className="invisible-table">
                <tbody>
                  <tr>
                  <td className="pr-2">
                    <FontAwesomeIcon icon={faVk} className="text-lg" />
                  </td>
                  <td>
                    <span>VK</span>
                  </td>
                  </tr>
                </tbody>
                </table>
              </a>
              <a
                href="https://t.me/flaurista"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
              >
                <table className="invisible-table">
                <tbody>
                  <tr>
                  <td className="pr-1.5">
                    <FontAwesomeIcon icon={faTelegram} className="text-lg" />
                  </td>
                  <td>
                    <span>Telegram</span>
                  </td>
                  </tr>
                </tbody>
                </table>
              </a>
              <a
                href="https://www.instagram.com/flaurista_/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
              >
                <table className="invisible-table">
                <tbody>
                  <tr>
                  <td className="pr-2">
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </td>
                  <td>
                    <span>Instagram</span>
                  </td>
                  </tr>
                </tbody>
                </table>
              </a>
              <a
                href="https://wa.me/79309455185"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ui-fg-base flex items-center"
              >
                <table className="invisible-table">
                <tbody>
                  <tr>
                  <td className="pr-2">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  </td>
                  <td>
                    <span>WhatsApp</span>
                  </td>
                  </tr>
                </tbody>
                </table>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Flaurista. Все права защищены.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
