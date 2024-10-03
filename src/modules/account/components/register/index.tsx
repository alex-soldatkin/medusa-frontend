"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <h1 className="text-large-semi uppercase mb-6">
        {/* Become a Medusa Store Member */}
        Создать профиль Flaurista
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        {/* Create your Medusa Store Member profile, and get access to an enhanced
        shopping experience. */}
        Создайте свой профиль Flaurista и получите доступ к улучшенному
        опыту покупок.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Имя"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Фамилия"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" data-testid="phone-input" />
          <Input
            label="Пароль"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          {/* By creating an account, you agree to Medusa Store&apos;s{" "} */}
          Создавая аккаунт, вы соглашаетесь с{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Политикой конфиденциальности
          </LocalizedClientLink>{" "}
          и{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            {/* Terms of Use */}
            Правилами использования
          </LocalizedClientLink>
          магазина Flaurista.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">Присоединиться</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Уже с нами?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Войти в аккаунт
        </button>
        .
      </span>
    </div>
  )
}

export default Register
