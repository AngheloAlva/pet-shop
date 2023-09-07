'use client'

import Form from '@/components/Form'
import React from 'react'

const page = (): JSX.Element => {
  return (
    <>
      <main className='py-5 px-12'>
        <h1 className='font-bold text-3xl py-5 mb-5 text-[--text-100] border-b-2 w-full flex justify-center'>
          Agenda tu Consulta Veterinaria
          </h1>
        <h5 className='text-xs py-8'>
          Horarios de atencion de lunes a sabado, horario continuado <br />
          Todos los servicios Veterinarios son en nuestra Tienda ubicada en Avenida Salvador 2536, Ñuñoa, Region Metropolitana
        </h5>

        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          El veterinario es importante para la salud de tu mascota, no solo es útil en el tratamiento de enfermedades, también cumple una función muy importante en su prevención. Ya que el veterinario es la persona que mejor conoce a tu mascota, por lo que te aconsejará mejor que nadie. Ten en cuenta que es de suma importancia que tu mascota cuente con un plan de vacunas, es la mejor forma de prevenir enfermedades que resultan ser de mucho cuidado, brindarle  la inmunidad necesaria es la mejor forma de protegerlos.
        </p>
        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          Con la finalidad de ofrecer un servicio completo, podrás realizar procedimientos como esterilización, vacunación, implantación de microchip, limpieza dental y mucho más.
        </p>
        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          Para consultas o dudas te puedes comunicar a nuestros teléfonos de contacto WhatsApp +569 39332330
        </p>
        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          Para agendar hora llena el formulario a continuación
        </p>
      </main>

      <Form service='veterinaria' />
    </>
  )
}

export default page
