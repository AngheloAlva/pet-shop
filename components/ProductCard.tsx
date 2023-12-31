import React, { useContext } from 'react'
import type { Product } from '@/interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { addProductToCart } from '@/apiRequest/cart'
import { CartContext } from '@/context/CartContext'
import { useToast } from './ui/use-toast'

interface ProductCardProps {
  product: Product
  className?: string
  userId: string
}

const ProductCard = ({ product, className, userId }: ProductCardProps): JSX.Element => {
  const { toast } = useToast()

  const producCardClass = 'bg-white border-2 border-[--bg-200] rounded-sm px-3 py-2 relative overflow-hidden'

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

    if (userId === undefined || userId === '') {
      toast({
        title: 'Error al agregar el producto al carrito',
        description: 'Debes iniciar sesión para agregar productos al carrito',
        variant: 'destructive',
        className: 'text-xl py-10'
      })

      return
    }

    try {
      await addProductToCart(userId, product._id, 1, optionSelectedIndex)
      await refreshCart()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={cn(producCardClass, className)} >
      {
        Number(selectedOption.discount) > 0 && (
          <div className='absolute top-1 -left-16 bg-[--primary-100] text-[--text-200] select-none font-bold rounded-lg px-20 py-4 -rotate-45'>
            -{selectedOption.discount}%
          </div>
        )
      }
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
      <div className=''>
        <Link href={`/product/${product._id}`} passHref>
          <p className='text-[--text-100] font-medium text-base cursor-pointer'>
            {product.name}
          </p>
        </Link>
        <Link href={`/brand/${product.brand._id}`} className='text-xs text-[--primary-200] font-semibold cursor-pointer'>
          {product.brand.name}
        </Link>
        <p className='text-[--text-200] font-semibold text-lg mb-5'>
          {
            Number(selectedOption.discount) > 0
              ? (
                  <>
                    <span className='line-through mr-2 text-sm'>${selectedOption.price.toLocaleString('es-CL')}</span>
                    <span>${(Number(selectedOption.price) * (1 - Number(selectedOption.discount) / 100)).toLocaleString('es-CL')}</span>
                  </>
                )
              : `$${selectedOption.price.toLocaleString('es-CL')}`
          }
        </p>
      </div>
      <div className='flex gap-2 mt-2 flex-wrap'>
        {
          product.options.map(op => (
            <p className={`
              text-[--text-100] text-sm px-2 font-semibold rounded-sm py-1 cursor-pointer transition-all select-none
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
      <button onClick={addToCart} className='p-2 my-2 w-full bg-[--accent-100] text-[--text-100] font-semibold rounded-sm transition-all hover:bg-[--accent-200] hover:text-[--bg-100]'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
