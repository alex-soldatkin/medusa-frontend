import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"

import ProductPreview from "../product-preview"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const setQueryParams = (): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }

  const queryParams = setQueryParams()

  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) =>
    response.products.filter(
      (productPreview) => productPreview.id !== product.id
    )
  )

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-palm_green-600 mb-6">
          Похожие букеты
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          Мы думаем, что Вам понравятся<br />эти букеты:
        </p>
      </div>


      <div className="overflow-x-auto no-scrollbar w-full -ml-6">
  <ul className="flex snap-x snap-mandatory space-x-6 px-4 w-full m-0">
    {productPreviews.map((productPreview, index) => (
      <li
        key={productPreview.id}
        className="snap-start flex-shrink-0 w-64"
      >
        <ProductPreview region={region} productPreview={productPreview} />
      </li>
    ))}
  </ul>
</div>


    </div>
  )
}
