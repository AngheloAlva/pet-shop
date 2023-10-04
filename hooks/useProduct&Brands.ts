import { useEffect, useState } from 'react'

import { getBrands } from '@/api/brand'
import { getProducts } from '@/api/product'
import { useUser } from '@auth0/nextjs-auth0/client'

import type { Product, Brand } from '@/interfaces/interfaces'

interface Filter {
  category?: string
  brand?: string
  petType?: string
  discount?: string
  lifeStage?: string
}

const useProductAndBrands = (filter: Filter = {}): { products: Product[], brands: Brand[], userId: string } => {
  const [products, setProducts] = useState<Product[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  const { user } = useUser()
  const userId = user?.sub ?? ''

  useEffect(() => {
    try {
      void getProducts(filter)
        .then((products) => { setProducts(products.products) })
      void getBrands()
        .then((brands) => { setBrands(brands.brands) })
    } catch (error) {
      throw new Error('Error while fetching products and brands')
    }
  }, [filter])

  return { products, brands, userId }
}

export default useProductAndBrands
