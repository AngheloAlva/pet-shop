'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getProducts } from '@/api/api'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <>
      <h2 className='text-xl font-bold my-5 pl-4'>Top Ventas</h2>
      <div className='flex gap-2 px-4 flex-wrap'>
        {
          products.map((product, index) => (
            <div className='bg-white border-2 border-[--bg-300] rounded-xl p-3 w-64' key={index}>
              <div className='w-full flex items-center justify-center mb-4'>
                <Image src={product.image[0]} alt={product.name} width={200} height={400} />
              </div>
              <p className='text-[--text-100] font-medium text-base'>{product.brand} - {product.name}</p>
              <p className='text-xs text-[--primary-300] pt-1 pb-3'>{product.brand}</p>
              <p className='font-semibold mb-5'>${product.weightOptions[0].price}</p>
              <p className='border-2 max-w-[4rem] items-center justify-center flex text-xs font-semibold bg-[--accent-200] text-[--bg-100] rounded-lg py-1 transition-all cursor-pointer'>{product.weightOptions[0].weight}</p>
              <button className='p-2 my-2 w-full bg-[--accent-100] text-[--bg-100] rounded-lg transition-all hover:bg-[--accent-200]'>Agregar</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
