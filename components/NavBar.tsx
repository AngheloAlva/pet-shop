'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'
import SheetMenu from './nav/SheetMenu'
import NavMenuItem from './NavMenuItem'
import UserDropdown from './nav/User-dropdown'
import Search from './nav/Search'
import Cart from './nav/Cart'

import useCategoryBrands from '@/hooks/useCategory'

const NavBar = (): JSX.Element => {
  const { catCategories, dogCategories } = useCategoryBrands()

  return (
    <>
      <nav className='flex flex-col fixed top-0 left-0 right-0 z-50'>
        <div className='bg-[--primary-100] text-[--bg-100] flex items-center justify-center font-bold h-[3vh]'>Envio Gratis por compras sobre $20.000</div>
        <header className='flex justify-between items-center px-2 bg-[--primary-200] h-[6vh] sm:h-[7vh]'>
          <div className="flex items-center gap-2">
            <Link href={'/'} passHref className='flex gap-4 items-center'>
              <Image src={'/simple-logo.png'} alt='logo' width={45} height={45} className='sm:w-14' />
              <h2 className='text-[--bg-100] font-extrabold text-2xl hidden md:block'>Pet Shop</h2>
            </Link>
            <SheetMenu />
          </div>

          <div className='flex gap-2 items-center sm:gap-3'>
            <Search />
            <Cart />
            <UserDropdown />
          </div>
        </header>
        <NavigationMenu className='hidden md:flex w-full backdrop-blur-xl text-[--text-100]'>
          <NavigationMenuList>
            <NavMenuItem navMenuTitle='PERROS' itemsArray={dogCategories} petType='dog' />
            <NavMenuItem navMenuTitle='GATOS' itemsArray={catCategories} petType='cat' />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className='h-[9vh] w-full sm:h-[10vh] md:h-[14vh] bg-white' />
    </>
  )
}

export default NavBar
