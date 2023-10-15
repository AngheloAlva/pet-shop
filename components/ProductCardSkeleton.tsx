import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

const ProductCardSkeleton = (): JSX.Element => {
  return (
    <Skeleton className='bg-[--bg-300] rounded-sm w-64 px-3 py-3'>
      <Skeleton className='w-full h-44' />
      <Skeleton className='w-full h-7 mt-2' />
      <Skeleton className='w-1/3 h-5 mt-2 bg-[--primary-100]' />
      <Skeleton className='w-1/2 h-8 mt-2' />
      <div className='flex gap-2 mt-4'>
        <Skeleton className='w-1/5 h-7 mt-2 bg-[--accent-100]' />
        <Skeleton className='w-1/5 h-7 mt-2 bg-[--accent-100]' />
      </div>
      <Skeleton className='w-full h-10 mt-2 bg-[--accent-100]' />
    </Skeleton>
  )
}

export default ProductCardSkeleton
