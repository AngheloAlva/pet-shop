import type { ItemCart } from '@/interfaces/interfaces'
import axios from 'axios'

const getCart = async (userId: string): Promise<{ msg: string, cart: ItemCart[] }> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users/${userId}/cart`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const updateCart = async (
  userId: string,
  productId: string,
  quantity: number
): Promise<{ msg: string, cart: ItemCart[] }> => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users/cart`, {
      userId,
      productId,
      quantity
    })
    return response.data.cart
  } catch (error) {
    console.error(error)
    throw error
  }
}

const addProductToCart = async (
  userId: string,
  productId: string,
  quantity: number,
  optionSelectedIndex: number
): Promise<{ msg: string, cart: ItemCart[] }> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users/cart`, {
      userId,
      productId,
      quantity,
      optionSelectedIndex
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const createCheckoutSession = async (
  items: Array<{ productId: string, quantity: number, optionSelectedIndex: number }>,
  payShipping: boolean,
  userId: string
): Promise<{ msg: string, url: string }> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/payment`, { items, payShipping, userId }
    )
    return response.data.url
  } catch (error) {
    console.log(error)
    throw error
  }
}

export {
  getCart,
  updateCart,
  addProductToCart,
  createCheckoutSession
}
