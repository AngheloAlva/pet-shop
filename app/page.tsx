'use client'

import { useEffect, useState } from 'react'
import { getBrands, getProducts } from '@/api/api'
import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'

import type { Product, Brand } from '@/interfaces/interfaces'
import { carouselImages, promotionsImages, servicesImages } from '../data/imgsArrays'
import ProductsSlide from '@/components/ProductsSlider'
import BrandsSlider from '@/components/BrandsSlider'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState<Product[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    try {
      void getProducts(setProducts)
      void getBrands(setBrands)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Carousel images={carouselImages} />

      <ProductsSlide slideTitle='Top Ventas' products={products} />

      <h2 className='text-xl font-bold mb-3 mt-5 pl-5'>Promociones</h2>
      <div className='flex flex-col gap-3 px-5'>
        {
          promotionsImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-md overflow-hidden'>
              <Image key={index} src={image.src} alt={`Promotion ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <ProductsSlide slideTitle='Nuevos Productos' products={products} />

      <div className='flex flex-col w-full px-5 my-7 gap-3'>
        {
          servicesImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-md overflow-hidden shadow-xl'>
              <Image src={image.src} alt={`Service ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <h2 className='text-xl font-bold mb-3 mt-5 pl-5'>Marcas</h2>
      <div className='mx-5'>
        <BrandsSlider brands={brands} />
      </div>
    </>
  )
}
