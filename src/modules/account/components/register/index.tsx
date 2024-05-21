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
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6">Únete al Birmin Gallery club</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Crea tu perfil en Birmin, y accede a una mejor expeciencia comprando en nuestra tienda.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombre"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Apellidos"
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
          <Input
            label="Teléfono"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Contraseña"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Creando una cuenta, estás de acuerdo con nuestra{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Política de Privacidad
          </LocalizedClientLink>{" "}
          y{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Términos de Uso
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton className="w-full mt-6 rounded-sm" data-testid="register-button">
          Unirse
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        ¿Ya perteneces al club?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Accede
        </button>
        .
      </span>
    </div>
  )
}

export default Register
