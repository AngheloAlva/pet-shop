'use client'

import React, { useEffect, useState } from 'react'
import type { Product } from '@/interfaces/interfaces'
import { getProducts } from '@/api/api'
import ProductCard from '@/components/ProductCard'

const CategoryPage = ({ params }: { params: { categoryID: string } }): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts (): Promise<void> {
      try {
        await getProducts(setProducts, { category: params.categoryID })
      } catch (error) {
        console.error(error)
      }
    }
    void fetchProducts()
  }, [params.categoryID])

  return (
    <div>
      {
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default CategoryPage
