import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Внимание:</span> Только для тестовых платежей.
    </Badge>
  )
}

export default PaymentTest
