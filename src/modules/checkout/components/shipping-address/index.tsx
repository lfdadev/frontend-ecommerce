import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"
import { Container } from "@medusajs/ui"

const ShippingAddress = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  const { customer } = useMeCustomer()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {`Hola ${customer.first_name}, ¿Quieres usar alguna de tus direcciones guardadas?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </Container>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nombre"
                {...register("shipping_address.first_name", {
                  required: "Nombre es obligatorio",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Apellidos"
                {...register("shipping_address.last_name", {
                  required: "Apellidos son obligatorios",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Dirección"
                {...register("shipping_address.address_1", {
                  required: "Dirección es obligatoria",
                })}
                autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Compañía"
                {...register("shipping_address.company")}
                autoComplete="organization"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Código postal"
                {...register("shipping_address.postal_code", {
                  required: "Código postal es obligatorio",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Ciudad"
                {...register("shipping_address.city", {
                  required: "Ciudad es obligatoria",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
                required
              />
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "País es obligatorio",
                })}
                autoComplete="country"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Provincia"
                {...register("shipping_address.province")}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <div className="my-8">
              <Checkbox
                label="La misma que la dirección de facturación"
                checked={checked}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="Email"
                {...register("email", {
                  required: "Email es obligatorio",
                  pattern: emailRegex,
                })}
                autoComplete="email"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Teléfono"
                {...register("shipping_address.phone")}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </div>
          </>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
