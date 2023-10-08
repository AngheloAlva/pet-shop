import React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Accordion
} from '@/components/ui/accordion'

import { FaBars } from 'react-icons/fa6'

import AcordionMenu from './AcordionMenu'
import useCategoryBrands from '@/hooks/useCategory'

const SheetMenu = (): JSX.Element => {
  const { catCategories, dogCategories } = useCategoryBrands()

  return (
    <Sheet>
      <SheetTrigger asChild className='md:hidden'>
        <button className='text-2xl text-[--bg-100]'>
          <FaBars />
        </button>
      </SheetTrigger>
      <SheetContent side={'left'} className='overflow-y-scroll w-60'>
        <SheetHeader>
          <SheetTitle className='text-left'>
            Categorias:
          </SheetTitle>
        </SheetHeader>
        <Accordion type='single' collapsible>
          <AcordionMenu
            typeMenu={dogCategories}
            categoryRedirect='dogs'
            categoryName='PERROS'
            petType='dog'
          />
          <AcordionMenu
            typeMenu={catCategories}
            categoryRedirect='cats'
            categoryName='GATOS'
            petType='cat'
          />
        </Accordion>
        <SheetFooter>
          <SheetClose />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu
