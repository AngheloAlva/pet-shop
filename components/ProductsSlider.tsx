import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SwiperCore from 'swiper/modules'

import type { ProductSlideProps } from '@/interfaces/interfaces'

const ProductsSlide = ({ slideTitle, products, userId }: ProductSlideProps): JSX.Element => {
  const swiperRef = useRef(null)

  const handlePrevClick = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextClick = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <div className='px-5'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold mt-4 mb-3'>
          {slideTitle}
        </h2>
        <div className='flex gap-2'>
          <button onClick={handlePrevClick} className='bg-[--accent-100] rounded-sm text-[--bg-100] py-1 px-1 text-base transition-all hover:bg-[--accent-200]' >
            <FaAngleLeft />
          </button>
          <button onClick={handleNextClick} className='bg-[--accent-100] rounded-sm text-[--bg-100] py-1 px-1 text-base transition-all hover:bg-[--accent-200]' >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        ref={swiperRef}
      >
        {
          products.map((product, index) => (
            <SwiperSlide key={index} className='max-w-[16rem]'>
              <ProductCard product={product} className={''} userId={userId} key={index} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default ProductsSlide
