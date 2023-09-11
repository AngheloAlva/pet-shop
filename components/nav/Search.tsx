import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = (): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='border-2 rounded-xl border-[--primary-200] px-3 items-center flex'>
          <input type='search' placeholder='Buscar...' className='bg-transparent text-xs focus:outline-none h-7' />
          <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer' />
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[25rem] rounded-lg py-0'>
        <DialogHeader>
          <DialogTitle className='text-left pt-3'>
            <div className='px-3 items-center flex'>
              <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer mr-3' />
              <input type='search' placeholder='Buscar...' className='bg-transparent text-sm focus:outline-none h-7' />
            </div>
          </DialogTitle>
          <Separator />
          <DialogDescription className='text-left text-xs px-3 py-2'>
            <p>Resultados de busqueda</p>
          </DialogDescription>
        </DialogHeader>
        <div className='w-full'>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Search
