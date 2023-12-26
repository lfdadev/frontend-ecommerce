import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import { Spinner } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("Ha ocurrido un error. Inténtalo de nuevo.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">
        Conviértete en nuevo miembro
      </h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Crea tu perfil en La Fuerza del Alma, y consigue acceso a una mejor experiencia de usuario.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombre"
            {...register("first_name", { required: "Nombre es obligatorio" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Apellidos"
            {...register("last_name", { required: "Apellidos son obligatorios" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email es obligatorio" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Teléfono"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Contraseña"
            {...register("password", {
              required: "Contraseña es obligatoria",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Los credenciales no coinciden con nuestros registros.
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Creando una acuenta, estás de acuerdo con nuestra{" "}
          <Link href="/content/privacy-policy" className="underline">
            Política de Privacidad
          </Link>{" "}
          y{" "}
          <Link href="/content/terms-of-use" className="underline">
            Términos de Uso
          </Link>
          .
        </span>
        <Button className="mt-6 w-full" size="xlarge">
          Unirse
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        ¿Ya eres miembro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Conéctate
        </button>
        .
      </span>
    </div>
  )
}

export default Register
