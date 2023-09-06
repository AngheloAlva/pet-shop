import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'

const page = (): JSX.Element => {
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <div className='flex justify-between flex-col my-4 border-2 rounded-lg overflow-hidden p-6 gap-10 w-[90vw]'>
        <div className=''>
          <h2 className='font-semibold text-[--accent-200] text-xl'>Tienda Ñuñoa</h2>
          <p className='text-[--text-200] text-sm my-2'>Nuestra tienda más reciente, full equipada con todo tipo de accesorios y alimentos para todas tus mascotas, cuenta con un excelente servicio veterinario y servicio de peluquería para tus peludos.</p>
          <Link href={'https://www.google.com/maps/place/Pethome/@-33.456173,-70.6411888,14z/data=!3m1!4b1!4m6!3m5!1s0x9662cfa7ad3cf0c3:0x309813d1b149ec0e!8m2!3d-33.4561747!4d-70.6205892!16s%2Fg%2F11fqzdtfp5?entry=ttu'} passHref className='flex items-center gap-4' target='_blank'>
            <FaLocationDot className='text-[--bg-100] bg-[--accent-200] cursor-pointer w-14 h-14 p-2 mt-4 rounded-full' />
            <p className='text-[--text-200] font-medium mt-4'>Google Maps</p>
          </Link>
        </div>
        <div className='w-full h-[40rem] relative'>
          <Image
            src={'/imgs/tienda-nunoa.jpg'}
            alt='tienda-santiago-centro'
            layout='fill'
            objectFit='cover'
          />
        p</div>
      </div>

      <div className='flex justify-between flex-col my-4 border-2 rounded-lg overflow-hidden p-6 gap-10 w-[90vw]'>
        <div>
          <h3 className='text-[--accent-200] text-lg font-semibold my-2'>¿Donde estamos?</h3>
          <p className='text-[--text-200] text-sm'>Avenida Salvador 2536, Ñuñoa, Region Metropolitana</p>
        </div>
        <hr />
        <div>
          <h3 className='text-[--accent-200] text-lg font-semibold my-2'>Horarios de Atencion</h3>
          <p className='text-[--text-200] text-sm'>Lunes a Sabados de 11:00 a 19:00 hrs.</p>
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26629.8913644082!2d-70.64118875197678!3d-33.45617299675783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfa7ad3cf0c3%3A0x309813d1b149ec0e!2sPethome!5e0!3m2!1ses-419!2scl!4v1694023444309!5m2!1ses-419!2scl'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-96 ' />
      </div>
    </div>
  )
}

export default page
