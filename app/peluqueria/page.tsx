'use client'

import Form from '@/components/Form'
import React from 'react'

const page = (): JSX.Element => {
  return (
    <>
      <main className='py-5 px-12'>
        <h1 className='font-bold text-3xl py-5 mb-14 text-[--text-100] border-b-2 w-full flex justify-center'>
          Agenda tu hora para Peluqueria Canina
        </h1>
        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          Contamos con un espacio para tu peludo de 4 patas, donde encontraran un lugar para disfrutar sin estrés, mientras son consentidos por un profesional. Estamos especializados en higiene y estética, además tenemos como objetivo preservar la salud de ellos.
        </p>
        <p className='text-base text-[--text-200] mb-5 font-light text-left'>
          Es super importante un buen profesional en peluquería canina ya que un peluquero no se encarga solo de peinar y cortar el pelo, sino de inspeccionar la salud de tu mascota. Cuando un profesional realiza un baño a nuestros amigos peludos no solo lo asea, sino que le realiza una inspección minuciosa que podría avisarnos con tiempo de algún problema de salud que pueda acarrear tu mascota y que no hayamos visto a simple vista. Para consultas te puedes comunicar a nuestro WhatsApp +56 939332330
        </p>
        <p className='text-base text-[--text-200] mb-2 font-light text-left'>
          Los valores de peluquería dependen del tamaño y condición del pelaje de tu mascota, rellena el formulario que te presentamos a continuación. <br /> <br />
          Tenemos a tu disposición:
        </p>
        <ol className='list-decimal mb-5 font-light text-left ml-10 text-[--text-200]'>
          <li>Baño</li>
          <li>Corte de pelo</li>
          <li>Corte de uñas</li>
          <li>Limpieza de oidos</li>
        </ol>
      </main>

      <Form service='peluqueria' />
    </>
  )
}

export default page
