import React from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { SheetClose } from '../ui/sheet'
import Link from 'next/link'

interface AcordionMenuProps {
  categoryName: string
  typeMenu: Array<{
    title: string
    href: string
    description: string[]
  }>
}

const AcordionMenu = ({ categoryName, typeMenu }: AcordionMenuProps): JSX.Element => {
  return (
    <AccordionItem value={categoryName} className='border-none'>
      <AccordionTrigger className='text-left text-sm font-semibold border-none'>
        <Link href={'#'}>
          {categoryName}
        </Link>
      </AccordionTrigger>
      <AccordionContent className='text-left text-xs'>
        {
          typeMenu.map((item, index) => (
            <>
              <Link href={item.href} key={index} className='py-1 px-2 cursor-pointer hover:font-semibold transition-all'>
                <SheetClose>
                  {item.title}
                </SheetClose>
              </Link>
            </>
          ))
        }
      </AccordionContent>
    </AccordionItem>
  )
}

export default AcordionMenu
