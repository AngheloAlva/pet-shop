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
  categoryRedirect: string
  typeMenu: Array<{
    _id: string
    name: string
    description: string
    image: string
    petType: string[]
  }>
}

const AcordionMenu = ({ categoryName, categoryRedirect, typeMenu }: AcordionMenuProps): JSX.Element => {
  return (
    <AccordionItem value={categoryName} className='border-none'>
      <AccordionTrigger className='text-left text-sm font-semibold border-none'>
        <Link href={`/${categoryRedirect}}`}>
          {categoryName}
        </Link>
      </AccordionTrigger>
      <AccordionContent>
        {
          typeMenu.map((item) => (
            <>
              <Link href={`/category/${item._id}`} key={item._id} className=' px-2 cursor-pointer hover:text-[--accent-200] hover:font-semibold transition-all'>
                <SheetClose>
                  {item.name}
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
