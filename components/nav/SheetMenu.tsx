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

import { dogMenu, catMenu, aquaristicMenu, birdMenu, reptileMenu, smallAnimalMenu } from '@/data/NavbarItems'
import AcordionMenu from './AcordionMenu'

const SheetMenu = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='text-xl text-[--text-200]'>
          <FaBars />
        </button>
      </SheetTrigger>
      <SheetContent side={'left'} className='overflow-y-scroll'>
        <SheetHeader>
          <SheetTitle className='text-left'>
            Categorias:
          </SheetTitle>
        </SheetHeader>
        <Accordion type='single' collapsible>
          <AcordionMenu typeMenu={dogMenu} categoryName='PERROS' />
          <AcordionMenu typeMenu={catMenu} categoryName='GATOS' />
          <AcordionMenu typeMenu={aquaristicMenu} categoryName='AQUARISTICA' />
          <AcordionMenu typeMenu={birdMenu} categoryName='AVES' />
          <AcordionMenu typeMenu={reptileMenu} categoryName='REPTILES' />
          <AcordionMenu typeMenu={smallAnimalMenu} categoryName='PEQUEÑOS ANIMALES' />
        </Accordion>
        <SheetFooter>
          <SheetClose />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu
