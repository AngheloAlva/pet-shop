'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'
import SheetMenu from './nav/SheetMenu'
import NavMenuItem from './NavMenuItem'
import UserDropdown from './nav/User-dropdown'
import Search from './nav/Search'

import { catMenu, dogMenu, aquaristicMenu, birdMenu, reptileMenu, smallAnimalMenu } from '@/data/NavbarItems'
import Cart from './nav/Cart'

const NavBar = (): JSX.Element => {
  return (
    <nav className='flex flex-col bg-[--bg-100]'>
      <header className='flex justify-between items-center px-2 py-1 bg-[--accent-100] border-b-2 border-[--accent-100]'>
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
