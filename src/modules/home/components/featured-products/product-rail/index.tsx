import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="py-12 small:py-24">
      <div className="sticky top-12 z-10 flex justify-between mb-8 px-2 small:px-0 bg-palm_green-100 text-ui-fg-subtle bg-opacity-40 backdrop-blur-sm">
        <Text className="ml-8 txt-xlarge drop-shadow-sm">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Все в коллекции
        </InteractiveLink>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex snap-x snap-mandatory space-x-6 pl-4 pr-4">
          {products &&
            products.map((product, index) => (
              <li
                key={product.id}
                className="snap-start flex-shrink-0 w-64"
              >
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ))
            }
        </ul>
      </div>
    </div>
  )
}
