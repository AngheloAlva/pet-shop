import axios from 'axios'
import type { Order } from '@/interfaces/interfaces'

const getOrders = async (
  userId: string,
  limit: number = 10,
  from: number = 0
): Promise<{ total: number, orders: Order[] }> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/orders/${userId}?limit=${limit}&from=${from}`
    )
    return response.data
  } catch (error) {
    throw new Error()
  }
}

export default getOrders
