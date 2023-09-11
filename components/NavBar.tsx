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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import NavMenuItem from './NavMenuItem'

import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaEnvelope,
  FaCircleUser,
  FaArrowRightFromBracket,
  FaBagShopping,
  FaMagnifyingGlass
} from 'react-icons/fa6'

import { catMenu, dogMenu, aquaristicMenu, birdMenu, reptileMenu, smallAnimalMenu } from '@/data/NavbarItems'

const NavBar = (): JSX.Element => {
  return (
    <nav className='flex flex-col bg-[--bg-100]'>
      <ul className='text-[.6rem] flex py-1 px-2 bg-[--accent-100] justify-between font-bold text-[--bg-100]'>
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

        {/* <div className='flex content-center'>
          <li className='pr-2'><FaSquareFacebook className='mt-[.156rem]' /></li>
          <li className='pr-3'><FaSquareInstagram className='mt-[.156rem]' /></li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaEnvelope className='mt-[.156rem]' /> CONTACTENOS</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 px-3'><FaCircleUser className='mt-[.156rem]' /> REGISTRO</li>
          <Separator orientation='vertical' />
          <li className='flex gap-2 pl-3'><FaArrowRightFromBracket className='mt-[.156rem]' /> LOG IN</li>
        </div> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='flex gap-2 border-2 border-[--bg-100] rounded-md px-3 text-xs'>
              Cuenta
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-40'>
            <DropdownMenuGroup className='flex flex-col w-full'>
              <DropdownMenuItem className='text-xs flex gap-2 items-center'>
                <FaEnvelope /> CONTACTENOS
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-xs flex gap-2 items-center'>
                <FaCircleUser /> REGISTRO
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-xs flex gap-2 items-center'>
                <FaArrowRightFromBracket /> LOG IN
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>

      <header className='flex justify-between items-center px-2 py-2 bg-[--bg-100] border-b-2 border-[--accent-100]'>
        <Link href={'/'} passHref>
          <Image src={'/color-logo.png'} alt='logo' width={45} height={45} />
        </Link>

        <div className='flex gap-2 items-center'>
        <Dialog>
            <DialogTrigger asChild>
              <div className='border-2 rounded-xl border-[--primary-200] px-3 items-center flex'>
                <input type='search' placeholder='Buscar...' className='bg-transparent text-xs focus:outline-none h-7' />
                <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer' />
              </div>
            </DialogTrigger>
            <DialogContent className='max-w-[25rem] rounded-lg py-0'>
              <DialogHeader>
                <DialogTitle className='text-left pt-3'>
                  <div className='px-3 items-center flex'>
                    <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer mr-3' />
                    <input type='search' placeholder='Buscar...' className='bg-transparent text-sm focus:outline-none h-7' />
                  </div>
                </DialogTitle>
                <Separator />
                <DialogDescription className='text-left text-xs px-3 py-2'>
                  <p>Resultados de busqueda</p>
                </DialogDescription>
              </DialogHeader>
              <div className='w-full'>

              </div>
            </DialogContent>
          </Dialog>
          <FaBagShopping className='text-3xl text-[--bg-100] cursor-pointer bg-[--accent-200] p-1 rounded-xl' />
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
