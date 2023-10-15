import type { Category } from '@/interfaces/interfaces'
import axios from 'axios'

const getCategories = async (): Promise<{ total: number, categories: Category[] }> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/categories`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  getCategories
}
