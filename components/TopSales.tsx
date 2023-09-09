import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SwiperCore from 'swiper/modules'

import type { Product } from '@/interfaces/interfaces'

interface TopSalesProps {
  products: Product[]
}

const TopSales = ({ products }: TopSalesProps): JSX.Element => {
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
        <h2 className='text-xl font-bold my-5'>
          Top Ventas
        </h2>
        <div className='flex gap-2'>
          <button onClick={handlePrevClick} className='bg-[--accent-100] rounded-lg text-[--bg-100] py-1 px-1 text-base transition-all hover:bg-[--accent-200]' >
            <FaAngleLeft />
          </button>
          <button onClick={handleNextClick} className='bg-[--accent-100] rounded-lg text-[--bg-100] py-1 px-1 text-base transition-all hover:bg-[--accent-200]' >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        ref={swiperRef}
        breakpoints={{
          320: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 5
          },
          1280: {
            slidesPerView: 6
          }
        }}
      >
        {
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default TopSales
