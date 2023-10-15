import Image from 'next/image'
import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const page = (): JSX.Element => {
  return (
    <main className='my-7 mx-5 flex flex-col md:mx-20 lg:mx-[15vw] 2xl:mx-[20vw]'>
      <h1 className='text-xl font-bold'>PREGUNTAS FRECUENTES</h1>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Image src={'/imgs/petshop-faq.png'} alt='petshop-image' width={500} height={500} className='md:w-1/2 md:h-1/2' />
        <Accordion type='multiple' className='flex flex-col gap-1'>
          <AccordionItem value='question-1'>
            <AccordionTrigger className='text-left'>
              <h3>¿Cómo puedo hacer una devolucion?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Si no estás satisfecho con tu producto, puedes devolverlo dentro de los 10 días naturales. Puedes hacerlo por los siguientes motivos: Defectuoso / No funciona bien Diferente a la descripción de la Web El producto no me queda No es el producto comprado Se excedió la fecha estimada de entrega Sin embargo existen productos que por su naturaleza debe considerar que su devolución debe hacerse bajo estas condiciones: tienen que estar en su empaque original, con sus sellos, cubierta o celofan segun corresponda. En caso de que el producto haya llegado en mala condición (abierto, sucio, entre otros), puede solicitar inmediatamente la devolución de estos, siempre entregando todos los argumentos y detalles, adicional te sugerimos fotografiar el estado del producto en caso que te solicitemos evidencias.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-2'>
            <AccordionTrigger className='text-left'>
              <h3>¿Puedo cambiar la dirección de entrega después de realizar mi pedido?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Si aún no ha recibido un correo confirmando el envío, puede comunicarte con nuestros canales de atención al cliente Indicando el número de tu pedido e Indicando los datos de envío correctos.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-3'>
            <AccordionTrigger className='text-left'>
              <h3>Formas de Entrega</h3>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='list-disc ml-4'>
                <li>Despachos a domicilio en Santiago</li>
                <li>Envíos a regiones por Alas</li>
                <li>Envíos express por Recibelo</li>
                <li>Retiros en tienda</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-4'>
            <AccordionTrigger className='text-left'>
              <h3>¿Cómo sé cuando llegará mi pedido?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Cuando tu compra entre en ruta de despacho, recibirás un correo electrónico confirmando que tu pedido ha pasado a manos de la paquetería colocada. El correo es un medio para comunicarte que pronto recibirás tu pedido, sin embargo, este último no llegará nunca el mismo día en que recibas la notificación. Si tu pedido ha sido enviado por alguna empresa de encomiendas, en el mensaje encontrarás la información necesaria para que puedas rastrearlo directamente en el sitio web de cada paquetería.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-5'>
            <AccordionTrigger className='text-left'>
              <h3>¿Cuál es el tiempo y costo de envío?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Haz clic en el botón “Comprar ahora” para agregar el producto que deseas a tu carrito de compras. Para calcular el costo de envío, identifica la sección “Ver Carrito” a la derecha de la página y en la sección “Datos de Facturación” selecciona la Región y Comuna de la dirección a la cual deseas que llegue tu producto. Contamos con despacho gratis en compras superiores a los 20.000 en algunas comunas. Tras colocar tus datos de envío la plataforma te indicará si tu compra cuenta con el beneficio de Envío Gratis, de lo contrario te indicará el monto de envío.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-6'>
            <AccordionTrigger className='text-left'>
              <h3>¿Qué hacer si mi método de pago no funciona?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>En primer lugar verifica que la clave dinámica que ingresaste sean las correctas, esta clave dinámica es la que obtienes de tu Digipass o Tarjeta de coordenadas; si no tienes uno de estos, por favor contacta a tu banco para que te lo entreguen. Revisa que tu cuenta / línea de crédito tenga fondos suficientes para poder realizar la compra. Si tu cuenta es RUT o Vista, por favor verifica que esté habilitada y que tengas la clave para realizar compras a través de Internet. Si realizaste previamente realizaste compras en otros comercios electrónicos significa que tu tarjeta está habilitada; de no ser el caso, puede habilitarla en la página web de su banco o llamando. Si tu cuenta es RUT o Vista, también debes verificar que está habilitada para transacciones más del monto total de tu compra, esto también lo puedes ver con tu banco. En algunos casos el banco puede rechazar una compra por error, por tal motivo te recomendamos a intentar finalizar la compra una vez más. En caso de que el error, persista, por favor contacta a tu banco o intenta con otra forma de pago.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-7'>
            <AccordionTrigger className='text-left'>
              <h3>Formas de Pago</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Puedes realizar tu pago de diferentes formas, transferencia, crédito o débito. En caso de que elija la opción de crédito, recuerde que su tarjeta de crédito debe cubrir el monto total de la compra, claramente, los datos proporcionados deben ser correctos. Al finalizar, te enviaremos un correo electrónico para informarte que tu pago está siendo procesado. Cuando tu pago sea confirmado, te indicaremos si fue aprobado. Ten en cuenta que es importante que esperes el aviso de confirmación de tu compra pues, en caso de volver a intentar este proceso, podrías tener compras duplicadas.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-8'>
            <AccordionTrigger className='text-left'>
              <h3>¿Cómo puedo comprar?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Selecciona tu producto utilizando las múltiples opciones de búsqueda. Si aplica, elige la talla, color o medidas. Haz clic en el botón “Comprar ahora” y añade el producto a tu carrito de compras. Si lo deseas, puedes seguir navegando en la página y agregar más productos a tu carrito. Haz clic en el botón “Finalizar compra”. Si aún no te has registrado en nuestra página, deberás llenar algunos campos de registro y dirección de entrega. Elige el método de pago que más te convenga: tarjeta de crédito, redcompra o transferencia. Si tienes un cupón, haz clic en "Agregar cupón" e ingresa el código respetando mayúsculas, minúsculas y números. Recuerda revisar la vigencia y restricciones del cupón.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='question-9'>
            <AccordionTrigger className='text-left'>
              <h3>¿Cómo puedo comprar?</h3>
            </AccordionTrigger>
            <AccordionContent>
              <p>Selecciona tu producto utilizando las múltiples opciones de búsqueda. Si aplica, elige la talla, color o medidas. Haz clic en el botón “Comprar ahora” y añade el producto a tu carrito de compras. Si lo deseas, puedes seguir navegando en la página y agregar más productos a tu carrito. Haz clic en el botón “Finalizar compra”. Si aún no te has registrado en nuestra página, deberás llenar algunos campos de registro y dirección de entrega. Elige el método de pago que más te convenga: tarjeta de crédito, redcompra o transferencia. Si tienes un cupón, haz clic en "Agregar cupón" e ingresa el código respetando mayúsculas, minúsculas y números. Recuerda revisar la vigencia y restricciones del cupón.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}

export default page
