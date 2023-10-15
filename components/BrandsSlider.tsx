import type { Brand } from '@/interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Skeleton } from './ui/skeleton'

interface BrandsSliderProps {
  brands: Brand[]
}

const BrandsSlider = ({ brands }: BrandsSliderProps): JSX.Element => {
  return (
    <Swiper slidesPerView={'auto'} spaceBetween={15} autoplay className='w-full'>
      {
        brands.length > 0
          ? brands.map((brand, index) => (
            <SwiperSlide key={index} className='max-w-[7rem] md:max-w-[9rem]'>
              <Link href={`/brand/${brand._id}`}>
                <div className='h-14 w-full bg-[--accent-100] rounded-sm shadow-lg md:h-20'>
                  <Image src={brand.image} alt={brand.name} objectFit='contain' objectPosition='center' fill />
                </div>
              </Link>
            </SwiperSlide>
          ))
          : (
              <Skeleton className='h-14 w-full bg-[--accent-100] rounded-sm shadow-lg md:h-20' />
            )
      }
    </Swiper>
  )
}

export default BrandsSlider
