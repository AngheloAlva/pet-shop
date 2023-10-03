import { getCart } from '@/api/cart'
import { getProductById } from '@/api/product'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect } from 'react'
import type { ItemCart, Product } from '@/interfaces/interfaces'

export const CartContext = React.createContext({
  cart: [] as Product[],
  cartItems: [] as ItemCart[],
  refreshCart: async (): Promise<void> => {}
})

export const CartProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [cart, setCart] = React.useState<Product[]>([])
  const [cartItems, setCartItems] = React.useState<ItemCart[]>([])
  const { user } = useUser()

  const refreshCart = async (): Promise<void> => {
    if (user == null) return
    const cartItems = await getCart(user.sub ?? '')
    setCartItems(cartItems.cart)

    const productPromises = cartItems.cart.map(async item => await getProductById(item.product as unknown as string))
    const products = await Promise.all(productPromises)
    if (products.length === 0) return
    setCart(products.map(product => product.product))
  }

  useEffect(() => {
    void refreshCart()
  }, [user])

  return (
    <CartContext.Provider value={{ cart, cartItems, refreshCart }}>
      {children}
    </CartContext.Provider>
  )
}
