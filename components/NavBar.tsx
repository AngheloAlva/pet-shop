import Image from 'next/image'
import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaEnvelope, FaCircleUser, FaArrowRightFromBracket, FaBagShopping, FaMagnifyingGlass, FaAngleDown } from 'react-icons/fa6'

const NavBar = (): JSX.Element => {
  return (
    <nav className='flex flex-col bg-[--bg-100]'>
      <ul className='text-[.688rem] flex py-2 px-10 bg-[--accent-100] justify-between  font-extrabold text-[--bg-100]'>
        <div className='flex'>
          <li className='pr-3 border-r-2 border-[--primary-100] hover:text-[--text-200]'>INICIO</li>
          <li className='px-3 border-r-2 border-[--primary-100] hover:text-[--text-200]'>TIENDA</li>
          <li className='px-3 border-r-2 border-[--primary-100] hover:text-[--text-200]'>VETERINARIA</li>
          <li className='px-3 font-extrabold text-[--bg-100] hover:text-[--text-200]'>PELUQUERIA</li>
        </div>
        <div className='flex content-center'>
          <li className='pr-2'><FaSquareFacebook className='mt-[.156rem]' /></li>
          <li className='pr-3 border-r-2 border-[--primary-100]'><FaSquareInstagram className='mt-[.156rem]' /></li>
          <li className='flex gap-2 px-3 border-r-2 border-[--primary-100]'><FaEnvelope className='mt-[.156rem]' /> CONTACTENOS</li>
          <li className='flex gap-2 px-3 border-r-2 border-[--primary-100]'><FaCircleUser className='mt-[.156rem]' /> REGISTRO</li>
          <li className='flex gap-2 pl-3'><FaArrowRightFromBracket className='mt-[.156rem]' /> LOG IN</li>
        </div>
      </ul>

      <div className='flex justify-between items-center px-10 py-2'>
        <Image src={'/logo.svg'} alt='logo' width={85} height={85} />
        <div className='border-2 rounded-2xl border-[--primary-200] px-3 items-center flex'>
          <input type='search' placeholder='Buscar...' className='bg-transparent text-xs w-56 focus:outline-none h-7' />
          <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer' />
        </div>
        <div className='flex items-center'>
          <FaBagShopping className='text-3xl text-[--accent-100] cursor-pointer' />
          <p className='pl-2 text-[--accent-100] select-none'>$0</p>
        </div>
      </div>

      <ul className='flex bg-[--accent-200] text-[--bg-100] text-[13px] font-semibold px-10 justify-between'>
        <li className='py-2 px-2 flex items-center gap-[.2rem cursor-pointer select-none hover:bg-slate-600'>INICIO</li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-pink-500'>ESPECIAL INVIERNO <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-teal-500'>PERROS <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-yellow-500'>GATOS <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-green-500'>ACUARISTICA <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-red-500'>AVES <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-yellow-900'>MASCOTAS PEQUEÑAS <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-orange-300'>REPTILES <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-stone-900'>MASCOTAS <FaAngleDown /></li>
        <li className='py-2 px-2 flex items-center gap-[.2rem] cursor-pointer select-none hover:bg-teal-200'>LIQUIDACION <FaAngleDown /></li>
      </ul>
    </nav>
  )
}

export default NavBar
