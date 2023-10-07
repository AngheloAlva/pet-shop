import React from 'react'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  ListItem
} from '@/components/ui/navigation-menu'

import type { NavMenuItemProps } from '../interfaces/interfaces'

const NavMenuItem = ({ navMenuTitle, itemsArray }: NavMenuItemProps): JSX.Element => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='font-bold text-xs flex bg-transparent transition-all data-[state=open]:bg-[--accent-100] data-[state=open]:text-[--text-100] text-[--bg-100] rounded-none'>
        {navMenuTitle}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className='grid gap-1 p-4 grid-cols-3 w-96'>
          {itemsArray.map((item) => (
            <ListItem
              key={item._id}
              title={item.name}
              titleHref={`category/${item._id}`}
            >
            </ListItem>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default NavMenuItem
