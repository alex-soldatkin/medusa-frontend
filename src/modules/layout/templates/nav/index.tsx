import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Cart from "@modules/common/icons/cart"
import Logo from "@modules/common/icons/logo"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-12 mx-auto border-b duration-200 bg-palm_green-100 bg-opacity-75 backdrop-blur-sm border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-base"
              data-testid="nav-store-link"
            >

                <span className="flex items-center h-full">
                  <Logo className="mr-0.5 h-9 w-9 text-ui-fg-base" strokeWidth={2.1} />
                  <span className="font-kalnia text-2xl">Flaurista</span>
                </span>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full text-palm_green-700 hover:text-palm_green-900">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className=""
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <FontAwesomeIcon icon={faSearch} className="mr-2 text-sm" />

                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className=""
                href="/account"
                data-testid="nav-account-link"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2 text-sm" />
                Аккаунт
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  {/* <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-sm"/>  */}
                  <Cart className="mr-2 text-sm " />
                  Корзина (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
