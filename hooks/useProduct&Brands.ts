import { useEffect, useState } from 'react'

import { getBrands } from '@/api/brand'
import { getProducts } from '@/api/product'
import { useUser } from '@auth0/nextjs-auth0/client'

import type { Product, Brand, Filter } from '@/interfaces/interfaces'

const useProductAndBrands = ({
  category, brand, petType, lifeStage
}: Filter): {
  products: Product[]
  brands: Brand[]
  userId: string
} => {
  const [products, setProducts] = useState<Product[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  const { user } = useUser()
  const userId = user?.sub ?? ''

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const data = await getProducts({ category, brand, petType, lifeStage })
      setProducts(data.products)
    }

    const fetchBrands = async (): Promise<void> => {
      const data = await getBrands()
      setBrands(data.brands)
    }

    void fetchProducts()
    void fetchBrands()
  }, [category, brand, petType, lifeStage])

  return { products, brands, userId }
}

export default useProductAndBrands
