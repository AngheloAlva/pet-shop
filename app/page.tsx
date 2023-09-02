'use client'

import { useEffect, useState } from 'react'
import { getProducts } from '@/api/api'
import type { Product } from '@/interfaces/interfaces'
import ProductCard from '@/components/ProductCard'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    try {
      void getProducts(setProducts)
    } catch (eror) {
      console.log(eror)
    }
  }, [])

  return (
    <>
      <h2 className='text-xl font-bold my-5 pl-4'>Top Ventas</h2>
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>
    </>
  )
}
