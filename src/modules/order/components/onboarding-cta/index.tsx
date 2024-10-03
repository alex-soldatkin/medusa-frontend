"use client"

import { Button, Container, Text } from "@medusajs/ui"
import { resetOnboardingState } from "@app/actions"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <Text className="text-ui-fg-base text-xl">
          Your test order was successfully created! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          You can now complete setting up your store in the admin.
        </Text>
        <Button
          className="w-fit w-full relative flex items-center justify-center border border-palm_green-900 border-solid bg-transparent text-palm_green-800 shadow-none hover:bg-palm_green-100"
          size="xlarge"
          onClick={() => resetOnboardingState(orderId)}
        >
          Завершить настройку как администратор
        </Button>
      </div>
    </Container>
  )
}

export default OnboardingCta
