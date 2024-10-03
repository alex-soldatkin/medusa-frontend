"use client"

import { Order } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const OrderOverview = ({ orders }: { orders: Order[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">Здесь пока ничего нет</h2>
      <p className="text-base-regular">
        {/* You don&apos;t have any orders yet, let us change that {":)"} */}
        У Вас пока нет заказов, давайте это исправим {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button data-testid="continue-shopping-button" className="w-full relative flex items-center justify-center border border-palm_green-900 border-solid bg-transparent text-palm_green-800 shadow-none hover:bg-palm_green-100">
            {/* Continue shopping */}
            Продолжить покупки
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
