'use client'

import React, { useContext } from 'react'

import { Popover, PopoverContent, PopoverTrigger, PopoverPrimitive } from '@/components/ui/popover'
import ProductCart from './ProductCart'
import { FaBagShopping } from 'react-icons/fa6'

import { useUser } from '@auth0/nextjs-auth0/client'
import { CartContext } from '@/context/CartContext'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Cart = (): JSX.Element => {
  const { cart, cartItems } = useContext(CartContext)
  const { user } = useUser()

  return (
    <Popover>
      <PopoverTrigger>
        <FaBagShopping className='text-3xl text-[--bg-100] cursor-pointer p-[.1rem] rounded-full border-[--bg-100] border-2 hover:text-[--bg-200] hover:border-[--bg-200] transition-colors' />
      </PopoverTrigger>
      <PopoverContent className='w-auto max-w-[85vw] flex flex-col'>
        <h3 className='font-bold text-xl mb-2 text-[--text-100]'>Carrito</h3>
        <Separator />
        <div className='flex flex-col gap-2 mt-4 overflow-y-scroll max-h-96'>
          {
            cartItems.length > 0
              ? cart.map((product, index) => (
                  <ProductCart
                    key={product?._id}
                    userId={user?.sub ?? ''}
                    product={product}
                    quantity={cartItems[index]?.quantity}
                    optionSelectedIndex={cartItems[index]?.optionSelectedIndex}
                  />
              ))
              : (
                <div className='flex flex-col text-[--text-200] items-center gap-5 py-2'>
                  <p className='font-semibold'>Aun no tienes productos en tu carrito</p>
                  <PopoverPrimitive.Close className='bg-[--accent-100] text-[--text-100] font-bold py-2 w-3/4 rounded-lg hover:text-[--bg-100] hover:bg-[--accent-200] transition-colors'>
                    Comienza a comprar
                  </PopoverPrimitive.Close>
                </div>
                )
          }
        </div>
        {
          cartItems.length > 0 && (
            <>
              <Separator className='my-5' />
              <Link href={'/shipping'} className='bg-[--accent-100] text-[--text-100] hover:text-[--bg-100] transition-colors font-bold py-2 rounded-lg hover:bg-[--accent-200] text-base text-center'>
                <PopoverPrimitive.Close>
                  Continuar al checkout
                </PopoverPrimitive.Close>
              </Link>
            </>
          )
        }
      </PopoverContent>
    </Popover>
  )
}

export default Cart
