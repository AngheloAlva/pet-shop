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

import useCategoryBrands from '@/hooks/useCategory&Brands'

const NavBar = (): JSX.Element => {
  const { catCategories, dogCategories } = useCategoryBrands()

  return (
    <nav className='flex flex-col'>
      <header className='flex justify-between items-center px-2 py-2 bg-[--primary-200]'>
        <div className="flex items-center gap-2">
          <Link href={'/'} passHref>
            <Image src={'/simple-logo.png'} alt='logo' width={45} height={45} />
          </Link>
          <SheetMenu />
        </div>

        <div className='flex gap-2 items-center'>
          <Search />
          <Cart />
          <UserDropdown />
        </div>
      </header>
      <NavigationMenu className='hidden md:flex w-full bg-white text-[--text-100]'>
        <NavigationMenuList>
          <NavMenuItem navMenuTitle='PERROS' itemsArray={dogCategories} />
          <NavMenuItem navMenuTitle='GATOS' itemsArray={catCategories} />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default NavBar
