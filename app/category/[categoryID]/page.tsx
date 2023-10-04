'use client'

import React from 'react'
import ProductCard from '@/components/ProductCard'

import useProductAndBrands from '@/hooks/useProduct&Brands'

const CategoryPage = ({ params }: { params: { categoryID: string } }): JSX.Element => {
  const { products, userId } = useProductAndBrands({ category: params.categoryID })

  return (
    <div className='mx-5'>
      <h1 className='font-bold mt-7 mb-3'>
        Categoria: {products[0]?.category.name}
      </h1>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
          products.map((product, index) => (
            index < 10 && (
              <ProductCard key={product._id} userId={userId} product={product} className='w-auto flex flex-col justify-between sm:block' />
            )
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPage
