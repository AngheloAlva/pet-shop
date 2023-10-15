import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col justify-between text-xs px-5 py-12 md:py-20 xl:py-32 mt-10 bg-[--text-100] text-[--bg-100] items-center md:text-sm'>
      <ul className='w-full flex flex-col items-center justify-center max-w-md'>
        <Image src={'/logo.png'} alt="Logo" width={100} height={100} className='md:w-32' />
        <li className='my-2 text-center'>En PetShop, encuentra todo lo que necesitas para cuidar de tu mascota. Con más de 10.000 productos y alimentos para perros, gatos, aves, chinchillas, conejos y hurones, y envío gratis y rápido en Santiago, hacer que tus mascotas sean felices es fácil.</li>
      </ul>
      <div className='flex flex-col sm:flex-row my-10 gap-y-10 font-semibold sm:gap-x-[10vw] justify-center sm:items-start lg:gap-x-[15vw]'>
        <div className='flex flex-row items-start gap-x-10 w-full sm:w-auto sm:gap-x-[10vw] lg:gap-x-[15vw]'>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            <li><h3 className='mb-3 text-sm'>CLIENTES</h3></li>
            <li><Link href={'/clientes/como-comprar'} passHref>¿Cómo Comprar?</Link></li>
            <li><Link href={'/clientes/preguntas-frecuentes'} passHref>Preguntas Frecuentes</Link></li>
          </ul>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            <li><h3 className='mb-3 text-sm'>LINKS DE INTERES</h3></li>
            <li><Link href={'/links/terminos-y-condiciones'} passHref>Terminos y Condiciones</Link></li>
            <li><Link href={'/links/'} passHref>Politica de Envio</Link></li>
          </ul>
        </div>
        <ul className='flex flex-col gap-3 items-center justify-center'>
            <li><h3 className='mb-3 text-sm'>NOSOTROS</h3></li>
            <li><Link href={'/nosotros/quienes-somos'} passHref>Quienes somos</Link></li>
            <li><Link href={'/nosotros/tiendas/santiago-centro'} passHref>Tienda Santiago Centro</Link></li>
            <li><Link href={'/nosotros/tiendas/nunoa'} passHref>Tienda Ñuñoa</Link></li>
            <li><Link href={'/nosotros/peluqueria'} passHref>Peluqueria Canina</Link></li>
            <li><Link href={'/nosotros/veterinaria'} passHref>Veterinaria</Link></li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer
