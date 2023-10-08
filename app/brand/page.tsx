'use client'

import useProductAndBrands from '@/hooks/useProduct&Brands'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandsPage = (): JSX.Element => {
  const { brands } = useProductAndBrands({ brandLimit: 99 })

  return (
    <div className='grid grid-cols-2 gap-4 p-5'>
      {
        brands.map((brand) => (
          <Link href={`/brand/${brand._id}`} key={brand._id} className='flex h-36 flex-col items-center hover:bg-[--accent-100] transition-colors justify-center bg-[--bg-200] text-[--text-100] font-bold border-2 border-[--bg-300] hover:border-[--accent-200] rounded-sm'>
            <div className='max-h-32 max-w-[8rem] overflow-hidden'>
              <Image src={brand.image} alt={brand.name} width={100} height={50} />
            </div>
            <h1>{brand.name}</h1>
          </Link>
        ))
      }
    </div>
  )
}

export default BrandsPage
