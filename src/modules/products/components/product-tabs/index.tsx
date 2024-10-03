"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "О букете",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "О доставке",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Состав композиции</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Страна</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          {/* <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Длина стебля</span>
            <p>{product.height ? `${product.height} см` : "-"}</p>
          </div>
          {/* <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div> */}
          {/* add other properties that are available */}
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Тэги</span>
        </div>
      ) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Доставка</span>
            <p className="max-w-sm">
              {/* Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home. */}
              Мы можем доставить Ваш букет по Митино бесплатно. 
              По вопросам доставки в другие районы, пожалуйста, свяжитесь с нами.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Простоят долго</span>
            <p className="max-w-sm">
              Наши букеты простоят минимум неделю при правильном уходе—если это не так,
              свяжитесь с нами и мы соберем Вам новый.
            </p>
          </div>
        </div>
        {/* <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProductTabs
