import React from 'react'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
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
        <p>{categoryName}</p>
      </AccordionTrigger>
      <AccordionContent className='text-left text-xs'>
        {
          typeMenu.map((item, index) => (
            <>
              <Link href={'#'} key={index} className='py-1 px-2 hover:bg-[--accent-100] hover:cursor-pointer'>
                {item.title}
              </Link>
            </>
          ))
        }
      </AccordionContent>
    </AccordionItem>
  )
}

export default AcordionMenu
