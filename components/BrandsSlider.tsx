import type { Brand } from '@/interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

interface BrandsSliderProps {
  brands: Brand[]
}

const BrandsSlider = ({ brands }: BrandsSliderProps): JSX.Element => {
  return (
    <Swiper slidesPerView={'auto'} spaceBetween={15} autoplay>
      {
        brands.map((brand, index) => (
          <SwiperSlide key={index} className='max-w-[7rem] min-h-[5rem]'>
            <Link href={`/brand/${brand._id}`} className='flex h-16 bg-[--accent-100] rounded-sm items-center justify-center shadow-lg'>
              <Image src={brand.image} alt={brand.name} width={90} height={20} />
            </Link>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default BrandsSlider
