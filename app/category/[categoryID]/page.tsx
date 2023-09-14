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
    <div className='mx-5'>
      <h1 className='font-bold mt-7 mb-3'>
        Productos de {products[0]?.brand.name}
      </h1>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
          products.map((product, index) => (
            index < 10 && (
              <ProductCard key={product._id} product={product} className='w-auto flex flex-col justify-between sm:block' />
            )
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPage
