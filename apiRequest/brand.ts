import type { Brand } from '@/interfaces/interfaces'
import axios from 'axios'

const getBrands = async (limit: number = 15, from: number = 0): Promise<{ total: number, brands: Brand[] }> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/brands?limit=${limit}&from=${from}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error while fetching brands')
  }
}

export {
  getBrands
}
