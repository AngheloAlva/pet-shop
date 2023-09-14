'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import type { CarouselProps } from '@/interfaces/interfaces'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

const Carousel = ({ images }: CarouselProps): JSX.Element => {
  return (
    <Swiper
      className='w-full max-h-[25vw]'
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      centeredSlides
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
    >
      {
        images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={image.href} passHref>
              <Image src={image.src} alt={`Banner ${index + 1}`} height={1000} width={2000} />
            </Link>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Carousel
