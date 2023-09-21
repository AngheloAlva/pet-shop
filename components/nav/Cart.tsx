'use client'

import React, { useEffect } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FaBagShopping } from 'react-icons/fa6'

import { useUser } from '@auth0/nextjs-auth0/client'
import { getCart, getProductById } from '@/api/api'

import type { ItemCart, Product } from '@/interfaces/interfaces'
import ProductCart from './ProductCart'

const Cart = (): JSX.Element => {
  const [cart, setCart] = React.useState<Product[]>([])
  const [cartItems, setCartItems] = React.useState<ItemCart[]>([])

  const { user } = useUser()

  useEffect(() => {
    const getCartData = async (): Promise<void> => {
      const cartItems = await getCart(user?.sub ?? '')
      setCartItems(cartItems)
      const productPromises = cartItems.map(async item => await getProductById(item.product as unknown as string))
      const products = await Promise.all(productPromises)
      if (products.length === 0) return
      setCart(products)
    }
    void getCartData()
  }, [user])

  const refreshCart = async (): Promise<void> => {
    const cartItems = await getCart(user?.sub ?? '')
    setCartItems(cartItems)
    const productPromises = cartItems.map(async item => await getProductById(item.product as unknown as string))
    const products = await Promise.all(productPromises)
    if (products.length === 0) return
    setCart(products)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <FaBagShopping className='text-3xl text-[--bg-100] cursor-pointer p-[.1rem] rounded-full border-[--bg-100] border-2 hover:text-[--bg-200] hover:border-[--bg-200] transition-colors' />
      </PopoverTrigger>
      <PopoverContent className='w-auto'>
        <div className='flex flex-col gap-2'>
          {cartItems.length > 0 && cart.map((product, index) => (
            <ProductCart
              key={index}
              userId={user?.sub ?? ''}
              product={product}
              quantity={cartItems[index].quantity}
              optionSelectedIndex={cartItems[index].optionSelectedIndex}
              refreshCart={refreshCart}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Cart
