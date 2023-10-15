'use client'

import Link from 'next/link'
import Image from 'next/image'

import Carousel from '@/components/Carousel'
import BrandsSlider from '@/components/BrandsSlider'
import ProductsSlide from '@/components/ProductsSlider'

import { carouselImages, promotionsImages, servicesImages } from '../data/imgsArrays'

import useProductAndBrands from '@/hooks/useProduct&Brands'

export default function Home (): JSX.Element {
  const { products: allProducts, brands, userId } = useProductAndBrands({ })
  const { products: acanaProducts } = useProductAndBrands({ brand: '64f2463f5075cf4abe99904b' })
  const { products: carrierAndBagsProducts } = useProductAndBrands({ category: '65220255842661091b698dc4' })

  const acanaId = acanaProducts[0]?.brand._id
  const carrierAndBagsId = carrierAndBagsProducts[0]?.category._id

  return (
    <>
      <Carousel images={carouselImages} />

      <ProductsSlide slideTitle='Nuestros Productos' products={allProducts} userId={userId} href='/products' />

      <h2 className='text-lg sm:text-xl font-bold text-[--text-100] mb-3 mt-5 ml-5 md:mx-14 lg:mx-[10vw] 2xl:mx-[15vw]'>Promociones</h2>
      <div className='grid grid-cols-1 gap-3 mx-5 md:grid-cols-2 max-w-max md:mx-14 lg:mx-[10vw] 2xl:mx-[15vw]'>
        {
          promotionsImages.map((image, index) => (
            <Link href={image.href} key={image.src} className='rounded-sm overflow-hidden'>
              <Image key={index} src={image.src} alt={`Promotion ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <ProductsSlide slideTitle='Productos de ACANA' products={acanaProducts} userId={userId} href={`/brand/${acanaId}`} />

      <h2 className='text-lg sm:text-xl font-bold text-[--text-100] mb-3 mt-5 ml-5 md:mx-14 lg:mx-[10vw] 2xl:mx-[15vw]'>Servicios</h2>
      <div className='flex flex-col mx-5 mb-7 gap-3 lg:flex-row md:mx-14 lg:mx-[10vw] 2xl:mx-[15vw]'>
        {
          servicesImages.map((image, index) => (
            <Link href={image.href} key={index} className='rounded-sm overflow-hidden shadow-xl'>
              <Image src={image.src} alt={`Service ${index + 1}`} width={1000} height={400} />
            </Link>
          ))
        }
      </div>

      <div className='mx-5 flex flex-col gap-3 md:mx-14 lg:mx-[10vw] 2xl:mx-[15vw]'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg sm:text-xl font-bold'>Marcas</h2>
          <Link href='/brand' className='text-[--text-200] px-2 hover:underline py-0 transition-colors font-semibold'>Ver todas</Link>
        </div>
        <BrandsSlider brands={brands} />
      </div>

      <ProductsSlide slideTitle='Nuestros Bolsos y Transportadores' products={carrierAndBagsProducts} userId={userId} href={`/category/${carrierAndBagsId}`} />
    </>
  )
}
