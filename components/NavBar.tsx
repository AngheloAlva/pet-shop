'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import SheetMenu from './nav/SheetMenu'

import { catMenu, dogMenu, aquaristicMenu, birdMenu, reptileMenu, smallAnimalMenu } from '@/data/NavbarItems'
import NavMenuItem from './NavMenuItem'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaEnvelope,
  FaCircleUser,
  FaArrowRightFromBracket,
  FaBagShopping
} from 'react-icons/fa6'
import Search from './nav/Search'

const NavBar = (): JSX.Element => {
  return (
    <nav className='flex flex-col bg-[--bg-100]'>
      <ul className='text-[.62rem] flex py-1 px-2 bg-[--accent-100] justify-between font-bold text-[--bg-100]'>
        <div className='flex items-center'>
          <Link href={'/'} passHref className='pr-2 hover:text-[--text-200]'>
            <li>INICIO</li>
          </Link>
          <Separator orientation='vertical' className='max-h-[1rem]' />
          <Link href={'/tiendas'} passHref className='px-2 hover:text-[--text-200]'>
            <li>TIENDAS</li>
          </Link>
          <Separator orientation='vertical' className='max-h-[1rem]' />
          <Link href={'/veterinaria'} passHref className='px-2 hover:text-[--text-200]'>
            <li>VETERINARIA</li>
          </Link>
          <Separator orientation='vertical' className='max-h-[1rem]' />
          <Link href={'/peluqueria'} passHref className='px-2 hover:text-[--text-200]'>
            <li>PELUQUERIA</li>
          </Link>
        </div>

        <div className='content-center hidden'>
          <li className='pr-2'><FaSquareFacebook className='mt-[.156rem]' /></li>
          <li className='pr-3'><FaSquareInstagram className='mt-[.156rem]' /></li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaEnvelope className='mt-[.156rem]' /> CONTACTENOS</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaCircleUser className='mt-[.156rem]' /> REGISTRO</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 pl-3'><FaArrowRightFromBracket className='mt-[.156rem]' /> LOG IN</li>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <SignInButton children={'INICIAR SESION'} afterSignInUrl='/' afterSignUpUrl='/' mode='modal' />
        </SignedOut>
      </ul>

      <header className='flex justify-between items-center px-2 py-3 bg-[--bg-100] border-b-2 border-[--accent-100]'>
        <div className="flex items-center gap-2">
          <Link href={'/'} passHref>
            <Image src={'/color-logo.png'} alt='logo' width={45} height={45} />
          </Link>
          <SheetMenu />
        </div>

        <div className='flex gap-2 items-center'>
          <Search />
          <FaBagShopping className='text-3xl text-[--bg-100] cursor-pointer bg-[--accent-100] p-1 rounded-xl hover:bg-[--accent-200]' />
        </div>
      </header>

      <NavigationMenu className='bg-[--accent-200] hidden'>
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
