import axios from 'axios'
import type { Product } from '@/interfaces/interfaces'

export const getProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  options: {
    category?: string
    brand?: string
    petType?: string
    discount?: string
    lifeStage?: string
  } = {}
): Promise<void> => {
  try {
    let url = 'http://localhost:3001/products?'
    if (options.category != null) url += `category=${options.category}&`
    if (options.brand != null) url += `brand=${options.brand}&`
    if (options.petType != null) url += `petType=${options.petType}&`
    if (options.discount != null) url += `discount=${options.discount}&`
    if (options.lifeStage != null) url += `lifeStage=${options.lifeStage}&`

    const response = await axios.get<{ products: Product[] }>(url)
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
