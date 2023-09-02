import React from 'react'
import type { Product } from '@/interfaces/interfaces'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedWeight, setSelectedWeight] = React.useState(product.weightOptions[0])

  const handleWeightChange = (weight: string): void => {
    const selectedWeight = product.weightOptions.find(option => option.weight === weight)

    if (selectedWeight != null) {
      setSelectedWeight(selectedWeight)
    }
  }

  return (
    <div className='bg-white border-2 border-[--bg-300] rounded-xl p-3 w-64'>
      <div className='w-full flex items-center justify-center mb-4'>
        <Image
          src={product.image[0]}
          alt={product.name}
          width={200}
          height={200}
          />
      </div>
      <p className='text-[--text-100] font-medium text-base'>
        {product.brand} - {product.name}
      </p>
      <p className='text-xs text-[--primary-300] pt-1 pb-3'>
        {product.brand}
      </p>
      <div className='flex gap-2 mt-2 mb-6'>
        {
          product.weightOptions.map(option => (
            <p className={`text-[--text-100] text-sm px-2 rounded-lg py-1 cursor-pointer transition-all ${option.weight === selectedWeight.weight ? 'bg-[--accent-100] text-[--bg-300]' : 'bg-[--bg-300] text-[--text-100]'}}`}
            key={option.weight}
              onClick={() => { handleWeightChange(option.weight) }}>
              {option.weight}
            </p>
          ))
        }
      </div>
      <p className='text-[--text-200] font-semibold text-lg'>
        ${selectedWeight.price.toLocaleString('es-CL')}
      </p>
      <button className='p-2 my-2 w-full bg-[--accent-100] text-[--text-200] rounded-lg transition-all hover:bg-[--accent-200]'>
        Agregar
      </button>
    </div>
  )
}

export default ProductCard
