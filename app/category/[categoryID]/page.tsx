'use client'

import React, { useEffect, useState } from 'react'
import type { Product } from '@/interfaces/interfaces'
import { getProducts } from '@/api/product'
import ProductCard from '@/components/ProductCard'

import { useUser } from '@auth0/nextjs-auth0/client'

const CategoryPage = ({ params }: { params: { categoryID: string } }): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([])
  const { user } = useUser()

  useEffect(() => {
    async function fetchProducts (): Promise<void> {
      try {
        await getProducts()
          .then((res) => {
            const products = res.products
            const filteredProducts = products.filter((product: Product) => product.brand._id === params.categoryID)
            setProducts(filteredProducts)
          })
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
              <ProductCard key={product._id} userId={user?.sub ?? ''} product={product} className='w-auto flex flex-col justify-between sm:block' />
            )
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPage
