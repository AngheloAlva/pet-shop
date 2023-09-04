import axios from 'axios'
import type { Product } from '@/interfaces/interfaces'

export const getProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
): Promise<void> => {
  try {
    const response = await axios.get<{ products: Product[] }>(
      'http://localhost:3001/products'
    )
    setProducts(response.data.products)
  } catch (error) {
    console.error(error)
  }
}

export const getProductById = async (
  id: string
): Promise<Product> => {
  try {
    const response = await axios.get<Product>(
      `http://localhost:3001/products/${id}`
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
