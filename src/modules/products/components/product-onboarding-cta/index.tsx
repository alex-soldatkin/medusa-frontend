import { Button, Container, Text } from "@medusajs/ui"
import { cookies } from "next/headers"

const ProductOnboardingCta = () => {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  if (!isOnboarding) {
    return null
  }

  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-ui-fg-base text-xl">
          Пробный товар успешно добавлен! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          Сейчас Вы можете продолжить настройку как администратор магазина.
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <Button className="w-full w-full relative flex items-center justify-center border border-palm_green-900 border-solid bg-transparent text-palm_green-800 shadow-none hover:bg-palm_green-100">Продожить как администратор</Button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
