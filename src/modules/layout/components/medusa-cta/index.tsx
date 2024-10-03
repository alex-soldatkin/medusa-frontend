import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Дизайн и вёрстка:
      <a href="mailto:alex.soldatkin@gmail.com" className="ml-2 underline">
      DA Studio
      </a>
      <span className="flex gap-x-1 items-center">
      <Medusa />
      <NextJs />  
      </span>
    </Text>
  )
}

export default MedusaCTA
