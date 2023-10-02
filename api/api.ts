import axios from 'axios'
import type { Brand, Category, ItemCart, Order, Product, SimpleUser, User, UserUpdate } from '@/interfaces/interfaces'

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

export const createProduct = async (product: Product): Promise<void> => {
  try {
    await axios.post('http://localhost:3001/products', product)
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
    return response.data.product
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>('http://localhost:3001/categories')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getBrands = async (): Promise<Brand[]> => {
  try {
    const response = await axios.get<{ brands: Brand[] }>('http://localhost:3001/brands')
    return response.data.brands
  } catch (error) {
    console.error(error)
    throw error
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

export const updateUser = async (user: UserUpdate): Promise<void> => {
  try {
    await axios.put(`http://localhost:3001/users/${user.id}`, user)
  } catch (error) {
    console.error(error)
  }
}

export const addProductToCart = async (
  userId: string,
  productId: string,
  quantity: number,
  optionSelectedIndex: number
): Promise<void> => {
  try {
    await axios.post('http://localhost:3001/users/cart', {
      userId,
      productId,
      quantity,
      optionSelectedIndex
    })
  } catch (error) {
    console.error(error)
  }
}

export const getCart = async (userId: string): Promise<ItemCart[]> => {
  try {
    const response = await axios.get<ItemCart[]>(`http://localhost:3001/users/${userId}/cart`)
    return response.data.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      optionSelectedIndex: item.optionSelectedIndex,
      _id: item._id
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateCart = async (
  userId: string,
  productId: string,
  quantity: number
): Promise<void> => {
  try {
    await axios.put('http://localhost:3001/users/cart', {
      userId,
      productId,
      quantity
    })
  } catch (error) {
    console.error(error)
  }
}

export const createCheckoutSession = async (
  items: Array<{ productId: string, quantity: number, optionSelectedIndex: number }>
): Promise<string | undefined> => {
  try {
    const response = await axios.post(
      'http://localhost:3001/payment', { items }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createOrder = async (order: Order): Promise<Order> => {
  try {
    const response = await axios.post<Order>('http://localhost:3001/orders', order)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
