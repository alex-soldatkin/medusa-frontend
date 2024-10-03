"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Ваш заказ
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals data={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step} data-testid="checkout-button">
        <Button className="w-full h-10 w-full relative flex items-center justify-center border border-palm_green-900 border-solid bg-transparent text-palm_green-800 shadow-none hover:bg-palm_green-100">
          {/* add fawesome money bill icon */}
          <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
          Оформить заказ
          </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
