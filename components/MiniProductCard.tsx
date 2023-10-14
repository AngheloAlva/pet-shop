import React from 'react'

import type { Product } from '@/interfaces/interfaces'
import Link from 'next/link'

import { DialogPrimitive } from '@/components/ui/dialog'
import Image from 'next/image'

interface MiniProductCardProps {
  product: Product
  setSearchResults: React.Dispatch<React.SetStateAction<Product[]>>
}

const MiniProductCard = ({ product, setSearchResults }: MiniProductCardProps): JSX.Element => {
  let lowestPrice = Number.MAX_SAFE_INTEGER
  let highestPrice = Number.MIN_SAFE_INTEGER

  product.options.forEach((option) => {
    if (Number(option.price) < lowestPrice) {
      lowestPrice = Number(option.price)
    }
    if (Number(option.price) > highestPrice) {
      highestPrice = Number(option.price)
    }
  })

  return (
    <Link href={`/product/${product._id}`} onClick={() => { setSearchResults([]) }}>
      <DialogPrimitive.Close className='flex items-center gap-2 px-3 py-2 hover:bg-[--bg-300] rounded-lg cursor-pointer w-full'>
        <Image src={product.image[0]} alt={product.name} className='w-16 h-16 rounded-lg' width={200} height={200} />
        <div className='flex flex-col items-start'>
          <p className='text-[--text-100] font-medium text-base text-left'>
            {product.name}
          </p>
          <p className='text-[--text-200] font-semibold text-lg'>
            {
              lowestPrice === highestPrice
                ? `$${lowestPrice.toLocaleString('es-CL')}`
                : `$${lowestPrice.toLocaleString('es-CL')} - $${highestPrice.toLocaleString('es-CL')}`
            }
            {/* ${product.options[0].price.toLocaleString('es-CL')} */}
          </p>
        </div>
      </DialogPrimitive.Close>
    </Link>
  )
}

export default MiniProductCard
