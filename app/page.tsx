'use client'

import Link from 'next/link'
import Image from 'next/image'

import Carousel from '@/components/Carousel'
import BrandsSlider from '@/components/BrandsSlider'
import ProductsSlide from '@/components/ProductsSlider'

import { carouselImages, promotionsImages, servicesImages } from '../data/imgsArrays'

import useProductAndBrands from '@/hooks/useProduct&Brands'

export default function Home (): JSX.Element {
  const { products, brands, userId } = useProductAndBrands({ })
  const acanaProducts = products.filter(product => product.brand.name === 'Acana')
  const acanaId = acanaProducts[0]?.brand?._id

  const carrierAndBagsProducts = products.filter(product => product.category._id === '6521f6ca842661091b698d40')
  const carrierAndBagsId = carrierAndBagsProducts[0]?.category?._id

  return (
    <>
      <Carousel images={carouselImages} />

      <ProductsSlide slideTitle='Top Ventas' products={products} userId={userId} href='/products' />

      <h2 className='text-xl font-bold text-[--text-100] mb-3 mt-5 pl-5'>Promociones</h2>
      <div className='grid grid-cols-1 gap-3 px-5 lg:grid-cols-2'>
        {
          promotionsImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-sm overflow-hidden'>
              <Image key={index} src={image.src} alt={`Promotion ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <ProductsSlide slideTitle='Productos de ACANA' products={acanaProducts} userId={userId} href={`/brand/${acanaId}`} />

      <div className='flex flex-col w-full px-5 my-7 gap-3 lg:flex-row'>
        {
          servicesImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-sm overflow-hidden shadow-xl'>
              <Image src={image.src} alt={`Service ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <div className='px-5 flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>Marcas</h2>
          <Link href='/brand' className='text-[--text-200] px-2 hover:underline py-0 transition-colors font-semibold'>Ver todas</Link>
        </div>
        <BrandsSlider brands={brands} />
      </div>

      <ProductsSlide slideTitle='Nuestros Bolsos y Transportadores' products={carrierAndBagsProducts} userId={userId} href={`/category/${carrierAndBagsId}`} />
    </>
  )
}
