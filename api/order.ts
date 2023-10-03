import type { Order } from '@/interfaces/interfaces'
import axios from 'axios'

const createOrder = async (order: Order): Promise<{ msg: string, order: Order }> => {
  try {
    const response = await axios.post('http://localhost:3001/orders', order)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  createOrder
}
