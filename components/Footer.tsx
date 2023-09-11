import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex justify-between text-xs px-5 py-10 mt-10 bg-[--text-100] text-[--bg-100]'>
      <ul className='max-w-[10rem]'>
        <Image src={'/logo.png'} alt="Logo" width={100} height={100} />
        <li className='mt-3'>En PetShop, encuentra todo lo que necesitas para cuidar de tu mascota. Con más de 10.000 productos y alimentos para perros, gatos, aves, chinchillas, conejos y hurones, y envío gratis y rápido en Santiago, hacer que tus mascotas sean felices es fácil.</li>
      </ul>
      <ul className='flex flex-col gap-3'>
        <li><h3 className='mb-3 text-sm font-semibold'>EMPRESA</h3></li>
        <li><Link href={'/'} passHref>Quienes somos</Link></li>
        <li><Link href={'/'} passHref>Terminos y Condiciones</Link></li>
        <li><Link href={'/'} passHref>Acceso a Clientes</Link></li>
        <li><Link href={'/'} passHref>Registro</Link></li>
        <li><Link href={'/'} passHref>Preguntas Frecuentes</Link></li>
      </ul>
      <ul className='flex flex-col gap-3'>
        <li><h3 className='mb-3 text-sm font-semibold'>SERVICIOS</h3></li>
        <li><Link href={'/'} passHref>Politicas de envio</Link></li>
        <li><Link href={'/'} passHref>Estado de mi envio</Link></li>
        <li><Link href={'/'} passHref>Servicio Veterinario</Link></li>
        <li><Link href={'/'} passHref>Peluqueria Canina</Link></li>
        <li><Link href={'/'} passHref>¿Como Comprar?</Link></li>
      </ul>
      <ul className='flex flex-col gap-3'>
        <li><h3 className='mb-3 text-sm font-semibold'>TIENDAS</h3></li>
        <li><Link href={'/'} passHref>Tienda Santiago Centro</Link></li>
        <li><Link href={'/'} passHref>Tienda Ñuñoa</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
