import type { Category } from '@/interfaces/interfaces'
import axios from 'axios'

const getCategories = async (): Promise<{ total: number, categories: Category[] }> => {
  try {
    const response = await axios.get('http://localhost:3001/categories')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  getCategories
}
