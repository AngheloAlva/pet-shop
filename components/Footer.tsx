import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col justify-between text-xs px-5 py-10 mt-10 bg-[--text-100] text-[--bg-100] items-center'>
      <ul className='w-full flex flex-col items-center justify-center max-w-xs'>
        <Image src={'/logo.png'} alt="Logo" width={100} height={100} />
        <li className='my-2 text-center'>En PetShop, encuentra todo lo que necesitas para cuidar de tu mascota. Con más de 10.000 productos y alimentos para perros, gatos, aves, chinchillas, conejos y hurones, y envío gratis y rápido en Santiago, hacer que tus mascotas sean felices es fácil.</li>
      </ul>
      <div className='flex flex-col sm:flex-row my-10 gap-y-10 font-semibold sm:gap-x-[10vw] justify-center sm:items-start lg:gap-x-[15vw]'>
        <div className='flex flex-row gap-x-10 w-full sm:w-auto sm:gap-x-[10vw] lg:gap-x-[15vw]'>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            <li><h3 className='mb-3 text-sm'>EMPRESA</h3></li>
            <li><Link href={'/'} passHref>Quienes somos</Link></li>
            <li><Link href={'/'} passHref>Terminos y Condiciones</Link></li>
            <li><Link href={'/'} passHref>Acceso a Clientes</Link></li>
            <li><Link href={'/'} passHref>Registro</Link></li>
            <li><Link href={'/'} passHref>Preguntas Frecuentes</Link></li>
          </ul>
          <ul className='flex flex-col gap-3 items-center justify-center'>
            <li><h3 className='mb-3 text-sm'>SERVICIOS</h3></li>
            <li><Link href={'/'} passHref>Politicas de envio</Link></li>
            <li><Link href={'/'} passHref>Estado de mi envio</Link></li>
            <li><Link href={'/'} passHref>Servicio Veterinario</Link></li>
            <li><Link href={'/'} passHref>Peluqueria Canina</Link></li>
            <li><Link href={'/'} passHref>¿Como Comprar?</Link></li>
          </ul>
        </div>
        <ul className='flex flex-col gap-3 items-center justify-center'>
          <li><h3 className='mb-3 text-sm'>TIENDAS</h3></li>
          <li><Link href={'/'} passHref>Tienda Santiago Centro</Link></li>
          <li><Link href={'/'} passHref>Tienda Ñuñoa</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
