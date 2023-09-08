import React from 'react'
import type { NavMenuItemProps } from '../interfaces/interfaces'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  ListItem
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

const NavMenuItem = ({ navMenuTitle, itemsArray }: NavMenuItemProps): JSX.Element => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className='font-bold text-xs flex bg-transparent transition-all data-[state=open]:bg-[--accent-100] data-[state=open]:text-[--text-100] text-[--bg-100] rounded-none'>
        {navMenuTitle}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className='grid gap-1 p-4 grid-cols-3 w-[95vw]'>
          {itemsArray.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              titleHref={component.href}
            >
              <ul>
                <li className='flex flex-col'>
                  {component.description.map((description) => (
                    <Link
                      href='#'
                      key={description}
                      className='hover:text-[--text-100] hover:font-semibold transition-all cursor-pointer'
                    >
                      {description}
                    </Link>
                  ))}
                </li>
              </ul>
            </ListItem>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default NavMenuItem
