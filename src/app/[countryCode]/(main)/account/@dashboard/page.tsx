import { Metadata } from "next"

import { getCustomer, listCustomerOrders } from "@lib/data"
import Overview from "@modules/account/components/overview"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Аккаунт",
  description: "Просмотр аккаунта и предыдущих заказов.",
}

export default async function OverviewTemplate() {
  const customer = await getCustomer().catch(() => null)
  const orders = (await listCustomerOrders().catch(() => null)) || null

  if (!customer) {
    notFound()
  }

  return <Overview customer={customer} orders={orders} />
}
