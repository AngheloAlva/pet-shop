import React, { useContext } from 'react'
import type { Product } from '@/interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { addProductToCart } from '@/api/api'
import { CartContext } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
  className?: string
  userId: string
}

const ProductCard = ({ product, className, userId }: ProductCardProps): JSX.Element => {
  console.log(product)
  const producCardClass = 'bg-white border-2 border-[--bg-300] rounded-xl px-3 py-2 w-64 relative overflow-hidden'

  const [selectedOption, setSelectedOption] = React.useState(product.options[0])
  const { refreshCart } = useContext(CartContext)

  const handleWeightChange = (option: string): void => {
    const selectedOption = product.options.find(op => op.option === option)

    if (selectedOption != null) {
      setSelectedOption(selectedOption)
    }
  }

  const addToCart = async (): Promise<void> => {
    const optionSelectedIndex = product.options.findIndex(op => op.option === selectedOption.option)
    try {
      await addProductToCart(userId, product._id, 1, optionSelectedIndex)
      await refreshCart()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={cn(producCardClass, className)} >
      {/* {
        product.discount > 0 && (
          <div className='absolute -top-2 -left-12 bg-[--primary-100] text-[--text-200] font-bold rounded-lg px-14 py-4 -rotate-45'>
            -{product.discount}%
          </div>
        )
      } */}
      <Link href={`/product/${product._id}`} passHref>
        <div className='w-full flex items-center justify-center mb-4'>
          <Image
            src={product.image[0]}
            alt={product.name}
            width={200}
            height={200}
            className='cursor-pointer'
            />
        </div>
      </Link>
      <Link href={`/product/${product._id}`} passHref>
        <p className='text-[--text-100] font-medium text-base cursor-pointer'>
          {product.brand.name} - {product.petType} {product.name}
        </p>
      </Link>
      <Link href={`/brand/${product.brand._id}`} className='text-xs text-[--primary-300] cursor-pointer'>
        {product.brand.name}
      </Link>
      <p className='text-[--text-200] font-semibold text-lg mb-5'>
        {/* ${selectedOption.price.toLocaleString('es-CL')} */}
      </p>
      <div className='flex gap-2 mt-2 flex-wrap'>
        {
          product.options.map(op => (
            <p className={`
              text-[--text-100] text-sm px-2 rounded-lg py-1 cursor-pointer transition-all select-none
              ${op.option === selectedOption.option
                ? 'bg-[--accent-100]'
                : 'bg-[--bg-300] text-[--text-100] hover:bg-[--accent-200] hover:text-[--bg-100]'
              }
            `}
            key={op.option}
              onClick={() => { handleWeightChange(op.option) }}>
              {op.option}
            </p>
          ))
        }
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={addToCart} className='p-2 my-2 w-full bg-[--accent-100] text-[--text-200] rounded-lg transition-all hover:bg-[--accent-200] hover:text-[--bg-100]'>
        Agregar
      </button>
    </div>
  )
}

export default ProductCard
