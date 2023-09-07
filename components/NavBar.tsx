'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaEnvelope,
  FaCircleUser,
  FaArrowRightFromBracket,
  FaBagShopping,
  FaMagnifyingGlass
} from 'react-icons/fa6'
import NavMenuItem from './NavMenuItem'

import { catMenu, dogMenu, aquaristicMenu, birdMenu, reptileMenu, smallAnimalMenu } from '@/data/NavbarItems'

const NavBar = (): JSX.Element => {
  return (
    <nav className='flex flex-col bg-[--bg-100]'>
      <ul className='text-[.688rem] flex py-2 px-10 bg-[--accent-100] justify-between  font-extrabold text-[--bg-100]'>
        <div className='flex'>
          <Link href={'/'} passHref className='pr-3 hover:text-[--text-200]'>
            <li>INICIO</li>
          </Link>
          <Separator orientation='vertical' />
          <Link href={'/tiendas'} passHref className='px-3 hover:text-[--text-200]'>
            <li>TIENDAS</li>
          </Link>
          <Separator orientation='vertical' />
          <Link href={'/veterinaria'} passHref className='px-3 hover:text-[--text-200]'>
            <li>VETERINARIA</li>
          </Link>
          <Separator orientation='vertical' />
          <Link href={'/peluqueria'} passHref className='px-3 hover:text-[--text-200]'>
            <li>PELUQUERIA</li>
          </Link>
        </div>
        <div className='flex content-center'>
          <li className='pr-2'><FaSquareFacebook className='mt-[.156rem]' /></li>
          <li className='pr-3'><FaSquareInstagram className='mt-[.156rem]' /></li><Separator orientation='vertical' />
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaEnvelope className='mt-[.156rem]' /> CONTACTENOS</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaCircleUser className='mt-[.156rem]' /> REGISTRO</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 pl-3'><FaArrowRightFromBracket className='mt-[.156rem]' /> LOG IN</li>
        </div>
      </ul>

      <header className='flex justify-between items-center px-10 py-2'>
        <Link href={'/'} passHref>
          <Image src={'/logo.svg'} alt='logo' width={85} height={85} />
        </Link>
        <div className='border-2 rounded-2xl border-[--primary-200] px-3 items-center flex'>
          <input type='search' placeholder='Buscar...' className='bg-transparent text-xs w-56 focus:outline-none h-7' />
          <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer' />
        </div>
        <div className='flex items-center'>
          <FaBagShopping className='text-3xl text-[--accent-100] cursor-pointer' />
          <p className='pl-2 text-[--accent-100] select-none'>$0</p>
        </div>
      </header>

      <NavigationMenu className='bg-[--accent-200]'>
        <NavigationMenuList>
          <NavMenuItem navMenuTitle='PERROS' itemsArray={dogMenu} />
          <NavMenuItem navMenuTitle='GATOS' itemsArray={catMenu} />
          <NavMenuItem navMenuTitle='ACUARISTICA' itemsArray={aquaristicMenu} />
          <NavMenuItem navMenuTitle='AVES' itemsArray={birdMenu} />
          <NavMenuItem navMenuTitle='MASCOTAS PEQUEÑAS' itemsArray={smallAnimalMenu} />
          <NavMenuItem navMenuTitle='REPTILES' itemsArray={reptileMenu} />
        </NavigationMenuList>
      </NavigationMenu>

    </nav>
  )
}

export default NavBar
