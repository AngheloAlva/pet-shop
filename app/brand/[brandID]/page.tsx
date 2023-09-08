'use client'

import { getProducts } from '@/api/api'
import ProductCard from '@/components/ProductCard'
import type { Product } from '@/interfaces/interfaces'
import React, { useEffect, useState } from 'react'

const BrandPage = ({ params }: { params: { brandID: string } }): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts (): Promise<void> {
      try {
        await getProducts(setProducts, { brand: params.brandID })
      } catch (error) {
        console.error(error)
      }
    }
    void fetchProducts()
  }, [params.brandID])

  return (
    <div>
      {
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default BrandPage
