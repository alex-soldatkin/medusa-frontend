import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Войти",
  description: "Войдите в свой аккаунт на Flaurista.",
}

export default function Login() {
  return <LoginTemplate />
}
