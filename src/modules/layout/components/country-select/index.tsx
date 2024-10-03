"use client"

import { Listbox, Transition } from "@headlessui/react"
import { Region } from "@medusajs/medusa"
import { Fragment, useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"

import { StateType } from "@lib/hooks/use-toggle-state"
import { updateRegion } from "app/actions"
import { useParams, usePathname } from "next/navigation"

// type CountryOption = {
//   country: string
//   region: string
//   label: string
// }

// type CountrySelectProps = {
//   toggleState: StateType
//   regions: Region[]
// }

const CountrySelect = () => {
  // const [current, setCurrent] = useState<CountryOption | undefined>(undefined)

  // const { countryCode } = useParams()
  // const currentPath = usePathname().split(`/${countryCode}`)[1]

  // const { state, close } = toggleState

  // const options: CountryOption[] | undefined = useMemo(() => {
  //   return regions
  //     ?.map((r) => {
  //       return r.countries.map((c) => ({
  //         country: c.iso_2,
  //         region: r.id,
  //         label: c.display_name,
  //       }))
  //     })
  //     .flat()
  //     .sort((a, b) => a.label.localeCompare(b.label))
  // }, [regions])

  // useEffect(() => {
  //   if (countryCode) {
  //     const option = options?.find((o) => o.country === countryCode)
  //     setCurrent(option)
  //   }
  // }, [options, countryCode])

  // const handleChange = (option: CountryOption) => {
  //   updateRegion(option.country, currentPath)
  //   close()
  // }

  return (
        <div className="txt-compact-small flex items-start gap-x-2">
          <span>Доставляем по Митино бесплатно</span>
          </div>
  ) 
}


export default CountrySelect
