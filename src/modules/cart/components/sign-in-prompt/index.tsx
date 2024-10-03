import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          {/* Already have an account? */}
          У Вас уже есть аккаунт?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          {/* Sign in for a better experience. */}
          Войдите для лучшего опыта.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button variant="secondary" className="h-10 w-full relative flex items-center justify-center border border-palm_green-900 border-solid bg-transparent text-palm_green-800 shadow-none hover:bg-palm_green-100" data-testid="sign-in-button">
            {/* Sign in */}
            Войти
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
