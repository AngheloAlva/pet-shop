import type { Product } from '../interfaces/interfaces'
import axios from 'axios'

const getProducts = async (
  filters: {
    category?: string
    brand?: string
    petType?: string
    discount?: string
    lifeStage?: string
  } = {},
  limit: number = 15,
  from: number = 0
): Promise<{ total: number, products: Product[] }> => {
  try {
    let url = `http://localhost:3001/products?limit=${limit}&from=${from}&`
    if (filters.category != null) url += `category=${filters.category}&`
    if (filters.brand != null) url += `brand=${filters.brand}&`
    if (filters.petType != null) url += `petType=${filters.petType}&`
    if (filters.discount != null) url += `discount=${filters.discount}&`
    if (filters.lifeStage != null) url += `lifeStage=${filters.lifeStage}&`

    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

const getProductById = async (
  id: string
): Promise<{ msg: string, product: Product }> => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products/${id}`
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

const searchProducts = async (search: string): Promise<{ total: number, products: Product[] }> => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products/search?term=${search}`
    )
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

export {
  getProducts,
  getProductById,
  searchProducts
}
