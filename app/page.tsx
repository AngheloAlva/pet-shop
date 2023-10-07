'use client'

import Link from 'next/link'
import Image from 'next/image'

import Carousel from '@/components/Carousel'
import BrandsSlider from '@/components/BrandsSlider'
import ProductsSlide from '@/components/ProductsSlider'

import { carouselImages, promotionsImages, servicesImages } from '../data/imgsArrays'

import useProductAndBrands from '@/hooks/useProduct&Brands'

export default function Home (): JSX.Element {
  const { products, brands, userId } = useProductAndBrands({})
  const acanaProducts = products.filter(product => product.brand.name === 'Acana')
  const acanaId = acanaProducts[0]?.brand?._id

  return (
    <>
      <Carousel images={carouselImages} />

      <ProductsSlide slideTitle='Top Ventas' products={products} userId={userId} href='/products' />

      <h2 className='text-xl font-bold text-[--text-100] mb-3 mt-5 pl-5'>Promociones</h2>
      <div className='flex flex-col gap-3 px-5'>
        {
          promotionsImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-sm overflow-hidden'>
              <Image key={index} src={image.src} alt={`Promotion ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <ProductsSlide slideTitle='Productos de ACANA' products={acanaProducts} userId={userId} href={`/brand/${acanaId}`} />

      <div className='flex flex-col w-full px-5 my-7 gap-3'>
        {
          servicesImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-sm overflow-hidden shadow-xl'>
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
        <Image src={'/imgs/email-subscription.png'} alt='Email Subscription' width={1000} height={400} className='rounded-sm z-0' />
        <div className=''>
          <form action="">
            <input type="email" placeholder='Email...' className='absolute bottom-14 left-5 rounded-sm py-1 px-2 text-[--text-200]' />
            <button type='submit' className='absolute bottom-5 left-5 rounded-sm py-1 px-2 bg-[--accent-100] text-[--text-100] font-semibold'>Suscribirse</button>
          </form>
        </div>
      </div>
    </>
  )
}
