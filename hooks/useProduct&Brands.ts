import { useEffect, useState } from 'react'

import { getBrands } from '@/apiRequest/brand'
import { getProducts } from '@/apiRequest/product'
import { useUser } from '@auth0/nextjs-auth0/client'

import type { Product, Brand, Filter } from '@/interfaces/interfaces'

const useProductAndBrands = ({
  category, brand, petType, lifeStage, brandLimit = 15, productLimit = 15, productFrom = 0, setLoading
}: Filter): {
  products: Product[]
  brands: Brand[]
  userId: string
  totalProducts: number
} => {
  const [products, setProducts] = useState<Product[]>([])
  const [totalProducts, setTotalProducts] = useState<number>(0)
  const [brands, setBrands] = useState<Brand[]>([])

  const { user } = useUser()
  const userId = user?.sub ?? ''

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const data = await getProducts({ category, brand, petType, lifeStage }, productLimit, productFrom)
      setProducts(data.products)
      setTotalProducts(data.total)
      if (setLoading != null) setLoading(false)
    }

    const fetchBrands = async (): Promise<void> => {
      const data = await getBrands(brandLimit)
      setBrands(data.brands)
    }

    void fetchProducts()
    void fetchBrands()
  }, [category, brand, petType, lifeStage, productFrom])

  return { products, brands, userId, totalProducts }
}

export default useProductAndBrands
