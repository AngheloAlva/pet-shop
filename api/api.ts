import axios from 'axios'
import type { Brand, Product, SimpleUser, User } from '@/interfaces/interfaces'

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

export const getCategories = async (
  setCategories: React.Dispatch<React.SetStateAction<object>>
): Promise<void> => {
  try {
    const response = await axios.get<{ categories: object }>('http://localhost:3001/categories')
    setCategories(response.data)
  } catch (error) {
    console.error(error)
  }
}

export const getBrands = async (
  setBrands: React.Dispatch<React.SetStateAction<Brand[]>>
): Promise<void> => {
  try {
    const response = await axios.get<{ brands: Brand[] }>('http://localhost:3001/brands')
    setBrands(response.data.brands)
  } catch (error) {
    console.error(error)
  }
}

export const getProductsBySearch = async (
  search: string,
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
): Promise<void> => {
  try {
    const response = await axios.get<{ products: Product[] }>(
      `http://localhost:3001/products/search?term=${search}`
    )
    setProducts(response.data.products)
  } catch (error) {
    console.error(error)
  }
}

export const postUser = async (user: SimpleUser): Promise<void> => {
  try {
    await axios.post('http://localhost:3001/users', user)
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async (id: string): Promise<User> => {
  try {
    const response = await axios.get<User[]>(`http://localhost:3001/users/${id}`)
    return response.data[0]
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateUser = async (user: User): Promise<void> => {
  try {
    await axios.put(`http://localhost:3001/users/${user.id}`, user)
  } catch (error) {
    console.error(error)
  }
}
