"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark} from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import Hamburger from "@modules/common/icons/hamburger"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Главная: "/",
  Магазин: "/store",
  Поиск: "/search",
  Аккаунт: "/account",
  Корзина: "/cart",
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button data-testid="nav-menu-button" className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  {/* add hamburger icon */}
                  <Hamburger className="text-palm_green-700 hover:text-palm_green-900 " />
                  {/* <span className="sr-only">Open main menu</span> */}
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
               <Popover.Panel className="flex flex-col absolute top-14 bottom-4 w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-5rem)] z-30 inset-x-0 text-sm  m-2">
               <div data-testid="nav-menu-popup" className="flex flex-col h-full rounded-rounded border-none shadow-sm justify-between p-6 bg-palm_green-100 bg-opacity-75 backdrop-blur-sm bg-opacity-20">
                    <div className="flex justify-end bg-opacity-0" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark className="text-palm_green-700 hover:text-palm_greem-900 "/>
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="text-palm_green-700 text-3xl leading-10 hover:text-ui-fg-base"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6 text-palm_green-900">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            // toggleState={toggleState}
                            // regions={regions}
                          />
                        )}
                        {/* <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        /> */}
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Flaurista. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
