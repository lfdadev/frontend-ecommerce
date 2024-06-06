import { Text } from "@medusajs/ui"
import React from "react"

const FAQTemplate = () => {
  return (
    <main className="flex-1 w-full py-16 mt-6 small:mt-14 px-6 small:px-20 text-justify leading-relaxed text-neutral-700 flex flex-col gap-8 items-start">
      <h1 className="text-xl font-semibold border-2 border-primary px-6 py-2">
        Preguntas Frecuentes
      </h1>
      <div>
        <h3 className="text-lg font-semibold mb-2 uppercase">
          1. Elegibilidad para reembolsos
        </h3>
        <p className="txt-ui-fg-subtle">
          Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de tu
          compra. Si han transcurrido 30 días desde tu compra, no se te ofrecerá
          un reembolso y/o cambio de ningún tipo.
        </p>
        <p className="txt-ui-fg-subtle">
          Tu artículo debe estar sin usar y en las mismas condiciones en que lo
          recibió. El artículo debe estar en el embalaje original. Para
          completar tu devolución, requerimos un recibo o comprobante de compra.
          Solo se pueden reembolsar los artículos de precio regular; los
          artículos de venta no se pueden reembolsar.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 uppercase">2. Cambios</h3>
        <p className="txt-ui-fg-subtle">
          Solo reemplazamos los artículos si están defectuosos o dañados. Si
          necesitas cambiarlo por el mismo artículo, envíanos un email a
          birmingallery@gmail.com y envía tu artículo a:{" "}
          <span className="font-semibold italic text-blue-800">
            San Pelayo de Navia - Rúa Laxielas nº8, Vigo, Galicia
          </span>
          .
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 uppercase">
          3. Bienes Exentos
        </h3>
        <p className="txt-ui-fg-subtle">
          Una vez que se reciba e inspeccione tu devolución, te enviaremos un
          email para notificarte que hemos recibido tu artículo devuelto.
          También te notificaremos la aprobación o el rechazo de tu reembolso.
          Si es aprobado, entonces se procesará tu reembolso y se aplicará un
          crédito automáticamente a tu tarjeta de crédito o método de pago
          original, dentro de un plazo de 10 días.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 uppercase">
          4. Reembolsos atrasados o faltantes
        </h3>
        <p className="txt-ui-fg-subtle">
          Si aún no has recibido un reembolso, primero verifica otra vez tu
          cuenta bancaria. Luego, comunícate con la compañía de tu tarjeta de
          crédito. Puede tomar algún tiempo antes de que se publique
          oficialmente tu reembolso. Si has hecho todo esto y aún no has
          recibido tu reembolso, comunícate con nosotros al email
          birmingallery@gmail.com o al número{" "}
          <span className="font-semibold italic text-blue-800">685884402</span>{" "}
          (Whatsapp).
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 uppercase">5. Envíos</h3>
        <p className="txt-ui-fg-subtle">
          Por favor, la devolución debe enviarse a la siguiente dirección{" "}
          <span className="font-semibold italic text-blue-800">
            San Pelayo de Navia - Rúa Laxielas nº8, Vigo, Galicia
          </span>
          . Usted será responsable de pagar sus propios costos de envío para
          devolver su artículo. Los costos de envío no son reembolsables.
          Dependiendo de dónde vivas, el tiempo que tarde tu producto cambiado
          en llegar a ti puede variar. Por favor, nota que no podemos garantizar
          que recibiremos tu artículo devuelto.
        </p>
      </div>

      <Text className="txt-small-plus txt-ui-fg-subtle text-left">
        © 2024 Birmin Gallery
      </Text>
    </main>
  )
}

export default FAQTemplate
