import React, { useState } from 'react'
import { searchProducts } from '@/api/product'
import type { Product } from '@/interfaces/interfaces'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPrimitive,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import MiniProductCard from '../MiniProductCard'

import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'

const Search = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const searchQuery = e.target.value
    if (searchQuery.length === 0) {
      setSearchResults([])
      return
    }

    if (searchQuery.length > 2) {
      setIsLoading(true)
      await searchProducts(searchQuery)
        .then((products) => { setSearchResults(products.products) })
      setIsLoading(false)
    } else {
      setSearchResults([])
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='border-2 rounded-xl border-[--bg-100] px-3 items-center flex cursor-pointer gap-7 h-8 text-[--bg-100] font-bold hover:text-[--bg-200] hover:border-[--bg-200] transition-colors'>
          <span>Buscar...</span>
          <FaMagnifyingGlass />
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[25rem] rounded-lg py-0'>
        <DialogHeader>
          <DialogTitle className='text-left pt-3 flex justify-between items-center'>
            <div className='px-3 items-center flex'>
              <FaMagnifyingGlass className='text-[--primary-200] cursor-pointer mr-3' />
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <input type='text' placeholder='Buscar...' className='bg-transparent text-sm focus:outline-none h-7 w-full' onChange={handleSearchChange} />
            </div>
            <DialogPrimitive.Close>
              <FaXmark className='text-[--text-200]' />
            </DialogPrimitive.Close>
          </DialogTitle>
          <Separator />
          <DialogDescription className='text-left text-xs px-3 pt-2'>
            <p>Resultados de busqueda</p>
          </DialogDescription>
        </DialogHeader>
        <div className='w-full mb-5'>
          {
            isLoading
              ? <p className='text-center'><span className="loader"></span></p>
              : searchResults.length > 0 && searchResults.length <= 5
                ? searchResults.map((product: Product) => <MiniProductCard key={product._id} product={product} setSearchResults={setSearchResults} />)
                : null
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Search
