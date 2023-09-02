import axios from 'axios'

interface Product {
  _id: string
  category: string
  petType: string
  name: string
  miniDescription: string
  description: string[]
  image: string
  weightOptions: string[]
  stock: number
  brand: string
  discount: number
  lifeStage: string
}

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
