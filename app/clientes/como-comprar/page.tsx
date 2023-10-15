import Image from 'next/image'
import React from 'react'

const page = (): JSX.Element => {
  return (
    <main className='my-7 mx-5 flex flex-col md:mx-20 lg:mx-[15vw] 2xl:mx-[25vw] md:flex-row gap-5'>
      <section>
        <h1 className='text-xl font-bold text-[--primary-200]'>Paso a paso de como comprar en www.petshop.cl</h1>
        <ul className='list-decimal ml-7 flex flex-col gap-6 mt-4 mb-10'>
          <li>Seleccione el producto o servicio que le interesa y agréguelo a su “carro de compra”.</li>
          <li>En su carrito de compras seleccione la opción de realizar pedido.</li>
          <li>Inicie sesión o registrese con su correo electrónico y contraseña.</li>
          <li>Una vez haya iniciado sesión con tus datos, retornaras al carrito de compra, ahí validas los productos que deseas en cuanto cantidad.</li>
          <li>Una vez haya iniciado sesión con tus datos, retornaras al carrito de compra, ahí validas los productos que deseas en cuanto cantidad.</li>
          <li>Si está de acuerdo, selecciona forma de pago y pulsa el botón "Pagar Ahora".</li>
          <li>Una vez hecha la orden, se desplegará en la pantalla de pago.</li>
          <li>Una vez confirmador el pago se mostrara el número de confirmación de tu compra, el mismo será también enviado a tu correo electrónico registrado.</li>
          <li>La orden luego pasará automáticamente a un proceso de confirmación de identidad, resguardándose siempre la seguridad y privacidad del usuario y del proceso de contratación, disponibilidad, vigencia y cupo del medio de pago que se haya seleccionado.</li>
          <li>Cumplido con lo anterior se perfecciona el contrato haciéndose el cargo en el medio de pago seleccionado, se enviará el comprobante de compra con la boleta o factura que corresponda en formato electrónico y será despachado el producto, de acuerdo al modo de entrega que se hubiera seleccionado.</li>
        </ul>
      </section>
      <Image
        src={'/imgs/petshop-publicity.png'}
        alt='Dog image'
        width={500}
        height={500}
        className='rounded-sm w-full md:w-1/2 md:h-1/2'
      />
    </main>
  )
}

export default page
