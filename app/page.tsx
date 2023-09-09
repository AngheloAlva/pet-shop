'use client'

import { useEffect, useState } from 'react'
import { getProducts } from '@/api/api'
import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/interfaces/interfaces'
import { carouselImages, promotionsImages } from '../data/imgsArrays'
import TopSales from '@/components/TopSales'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    try {
      void getProducts(setProducts)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Carousel images={carouselImages} />

      <TopSales products={products} />

      <h2 className='text-xl font-bold my-5 pl-5'>Promociones</h2>
      <div className='grid grid-cols-2 gap-4 px-5'>
        {
          promotionsImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-md overflow-hidden'>
              <Image key={index} src={image.src} alt={`Promotion ${index + 1}`} width={1000} height={500} />
            </Link>
          ))
        }
      </div>
    </>
  )
}
