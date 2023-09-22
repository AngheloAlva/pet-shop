'use client'

import React, { useContext } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import ProductCart from './ProductCart'
import { FaBagShopping } from 'react-icons/fa6'

import { useUser } from '@auth0/nextjs-auth0/client'
import { CartContext } from '@/context/CartContext'

const Cart = (): JSX.Element => {
  const { cart, cartItems } = useContext(CartContext)
  const { user } = useUser()

  return (
    <Popover>
      <PopoverTrigger>
        <FaBagShopping className='text-3xl text-[--bg-100] cursor-pointer p-[.1rem] rounded-full border-[--bg-100] border-2 hover:text-[--bg-200] hover:border-[--bg-200] transition-colors' />
      </PopoverTrigger>
      <PopoverContent className='w-auto max-w-[85vw]'>
        <div className='flex flex-col gap-2'>
          {cartItems.length > 0 && cart.map((product, index) => (
            <ProductCart
              key={index}
              userId={user?.sub ?? ''}
              product={product}
              quantity={cartItems[index].quantity}
              optionSelectedIndex={cartItems[index].optionSelectedIndex}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Cart
