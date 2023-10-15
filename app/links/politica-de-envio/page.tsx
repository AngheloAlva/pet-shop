import Image from 'next/image'
import React from 'react'

const page = (): JSX.Element => {
  return (
    <main className='my-7 mx-5 flex flex-col md:mx-20 lg:mx-[15vw] 2xl:mx-[25vw] md:flex-row gap-5 items-center md:items-start'>
      <div>
        <h1 className='text-xl font-bold text-[--primary-200]'>POLITICA DE ENVIO</h1>
        <ul className='list-disc gap-6 flex flex-col ml-5 my-2'>
          <li>Despachos en la Provincia de Santiago son de 24 a 48 hrs HÁBILES, Despachos Express todas las compras realizadas hasta las 13:00 hrs ¡Recibes el mismo Dia! El lapso de entrega de estas compras es hasta las 23:50 hrs aproximado.</li>
          <li>Envios a regiones desde 72hrs hábiles</li>
          <li>Retiros en Tiendas Santiago y Ñuñoa:  De 24 a 48 hrs HÁBILES, deben esperar el correo de confirmación que indica que el pedido ya esta disponible para retiro. (tienen lapso de retiro de 30 dias hábiles, pasados esos dias su pedido será retornado a nuestra bodega central)</li>
          <li>Retiros en Villa Alemana: en 72hrs HÁBILES. deben esperar el correo de confirmación que indica que el pedido ya está disponible para retiro. Dirección de retiro Almte. Latorre 84, local 6 Villa Alemana (Jugueteria Super kids). Horario de atención de Lunes a Viernes de 10:00 a 19:00 hrs, Sábados de 11:00 a 19:00hrs (Domingo CERRADO)</li>
        </ul>
      </div>
      <Image src={'/imgs/petshop-free-shipping.png'} alt='Envio Gratis' width={500} height={1000} className='mb-7 md:w-2/5 md:h-2/5' />
    </main>
  )
}

export default page
