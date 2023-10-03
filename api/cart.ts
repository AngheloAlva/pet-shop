import type { ItemCart } from '@/interfaces/interfaces'
import axios from 'axios'

const getCart = async (userId: string): Promise<{ msg: string, cart: ItemCart[] }> => {
  try {
    const response = await axios.get(`http://localhost:3001/users/${userId}/cart`)
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
    const response = await axios.put('http://localhost:3001/users/cart', {
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
    const response = await axios.post('http://localhost:3001/users/cart', {
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
  items: Array<{ productId: string, quantity: number, optionSelectedIndex: number }>
): Promise<{ msg: string, id: string }> => {
  try {
    const response = await axios.post(
      'http://localhost:3001/payment', { items }
    )
    return response.data
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
