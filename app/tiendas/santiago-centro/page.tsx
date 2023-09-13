import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaLocationDot } from 'react-icons/fa6'

const page = (): JSX.Element => {
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <div className='flex justify-between flex-col my-4 border-2 rounded-lg overflow-hidden p-6 gap-10 w-[90vw]'>
        <div className=''>
          <h2 className='font-bold text-[--accent-200] text-xl'>Tienda Santiago Centro</h2>
          <p className='text-[--text-200] text-sm my-2'>Nuestra primera tienda, en ella encontrarás una gran variedad de productos para tu mascota, y además podrás encontrar a tus nuevas mascotas, desde conejos hasta peces. Nuestros vendedores estarán siempre disponibles para ayudarte y guiarte en tu compra.</p>
          <Link href={'https://www.google.com/maps/place/Pethome/@-33.4438746,-70.6677551,16.5z/data=!4m15!1m8!3m7!1s0x9662c5abdcc6ce63:0x618534a31b4c0b87!2sPethome!8m2!3d-33.4442419!4d-70.6639927!10e1!16s%2Fg%2F11c3ttvnw4!3m5!1s0x9662c5abdcc6ce63:0x618534a31b4c0b87!8m2!3d-33.4442419!4d-70.6639927!16s%2Fg%2F11c3ttvnw4?entry=ttu'} passHref className='flex items-center gap-4' target='_blank'>
            <FaLocationDot className='text-[--bg-100] bg-[--accent-200] cursor-pointer w-10 h-10 p-2 mt-4 rounded-full' />
            <p className='text-[--text-200] font-medium mt-4'>Google Maps</p>
          </Link>
        </div>
        <div className='w-full h-[20rem] relative rounded-lg overflow-hidden'>
          <Image
            src={'/imgs/tienda-santiago-centro.png'}
            alt='tienda-santiago-centro'
            layout='fill'
            objectFit='cover'
          />
        p</div>
      </div>

      <div className='flex justify-between flex-col my-2 border-2 rounded-lg overflow-hidden p-6 gap-4 w-[90vw]'>
        <div>
          <h3 className='text-[--accent-200] text-lg font-semibold my-2'>¿Donde estamos?</h3>
          <p className='text-[--text-200] text-sm'>José Toribio Medina 99, Santiago Centro</p>
        </div>
        <Separator />
        <div>
          <h3 className='text-[--accent-200] text-lg font-semibold my-2'>Horarios de Atencion</h3>
          <p className='text-[--text-200] text-sm'>Lunes a Sabados de 11:00 a 19:00 hrs.</p>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6658.416957656004!2d-70.6677551!3d-33.4438746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5abdcc6ce63%3A0x618534a31b4c0b87!2sPethome!5e0!3m2!1ses-419!2scl!4v1694022404177!5m2!1ses-419!2scl'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-96 ' />
      </div>
    </div>
  )
}

export default page
