import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from '@/components/ui/separator'

import { FaMapLocationDot, FaPhone, FaClock } from 'react-icons/fa6'

const page = (): JSX.Element => {
  return (
    <>
      <div className="bg-[url('/imgs/nuestras-tiendas-banner.png')] bg-cover bg-center h-[25vw] bg-no-repeat " />

      <div className='flex justify-center items-center gap-5 -mt-10 relative flex-col md:flex-row'>
        <div className='w-80 border-2 rounded-lg border-[--bg-300] overflow-hidden h-[27rem] flex flex-col md:w-96'>
          <Link href={'/nosotros/tiendas/santiago-centro'} passHref className='h-64 relative w-full rounded-md overflow-hidden'>
            <Image src={'/imgs/tienda-santiago-centro.png'} alt='tienda-santiago-centro' layout='fill' objectFit='cover' />
          </Link>
          <div className='pt-5 px-3 bg-[--bg-100]'>
            <Link href={'/nosotros/tiendas/santiago-centro'} passHref>
              <h2 className='font-bold text-[--accent-200]'>Tienda Santiago Centro</h2>
            </Link>
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaMapLocationDot /> José Toribio Medina 99</p>
            <Separator />
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaPhone /> 939332328</p>
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaClock /> Lunes a Sabados de 11:00 a 19:00 hrs.</p>
          </div>
        </div>

        <div className='w-80 border-2 rounded-lg border-[--bg-300] overflow-hidden h-[27rem] flex flex-col md:w-96'>
          <Link href={'/nosotros/tiendas/nunoa'} passHref className='h-64 relative w-full  rounded-md overflow-hidden'>
            <Image src={'/imgs/tienda-nunoa.jpg'} alt='tienda-nunoa' layout='fill' objectFit='cover' />
          </Link>
          <div className='pt-5 px-3 bg-[--bg-100]'>
            <Link href={'/nosotros/tiendas/nunoa'} passHref>
              <h2 className='font-bold text-[--accent-200]'>Tienda Ñuñoa</h2>
            </Link>
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaMapLocationDot /> Avenida Salvador 2536</p>
            <Separator />
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaPhone /> 939332330</p>
            <p className='flex gap-3 items-center my-2 ml-3 text-sm text-[--text-200]'><FaClock /> Lunes a Sabados de 11:00 a 19:00 hrs.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
