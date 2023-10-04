import type { Brand } from '@/interfaces/interfaces'
import axios from 'axios'

const getBrands = async (): Promise<{ total: number, brands: Brand[] }> => {
  try {
    const response = await axios.get('http://localhost:3001/brands')
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error while fetching brands')
  }
}

export {
  getBrands
}
