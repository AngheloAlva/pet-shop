import React from 'react'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  ListItem
} from '@/components/ui/navigation-menu'

import type { NavMenuItemProps } from '../interfaces/interfaces'

const NavMenuItem = ({ navMenuTitle, itemsArray, petType }: NavMenuItemProps): JSX.Element => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='font-bold text-sm w-36 flex transition-all data-[state=open]:bg-[--accent-100] data-[state=open]:text-[--bg-100] rounded-none h-[4vh]'>
        {navMenuTitle}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className='grid gap-1 p-4 grid-cols-3 w-[50vw] lg:w-[40vw]'>
          {itemsArray.map((item) => (
            <ListItem
              key={item._id}
              title={item.name}
              href={`category/${item._id}/${petType}`}
            >
            </ListItem>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default NavMenuItem
