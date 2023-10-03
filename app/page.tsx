'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Carousel from '@/components/Carousel'
import BrandsSlider from '@/components/BrandsSlider'
import ProductsSlide from '@/components/ProductsSlider'

import type { Product, Brand } from '@/interfaces/interfaces'
import { carouselImages, promotionsImages, servicesImages } from '../data/imgsArrays'

import { getBrands } from '@/api/brand'
import { getProducts } from '@/api/product'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState<Product[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  const { user } = useUser()

  useEffect(() => {
    try {
      void getProducts()
        .then((products) => { setProducts(products.products) })
      void getBrands()
        .then((brands) => { setBrands(brands.brands) })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Carousel images={carouselImages} />

      <ProductsSlide slideTitle='Top Ventas' products={products} userId={user?.sub ?? ''} />

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

      <ProductsSlide slideTitle='Nuevos Productos' products={products} userId={user?.sub ?? ''} />

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

      <div className='mx-5 my-5 relative'>
        <Image src={'/imgs/email-subscription.png'} alt='Email Subscription' width={1000} height={400} className='rounded-lg z-0' />
        <div className=''>
          <form action="">
            <input type="email" placeholder='Email...' className='absolute bottom-14 left-5 rounded-lg py-1 px-2 text-[--text-200]' />
            <button type='submit' className='absolute bottom-5 left-5 rounded-lg py-1 px-2 bg-[--accent-100] text-[--text-100] font-semibold'>Suscribirse</button>
          </form>
        </div>
      </div>
    </>
  )
}
