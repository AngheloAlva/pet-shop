'use client'

import React, { useEffect, useState } from 'react'
import { getProductById } from '@/api/api'
import type { Product } from '@/interfaces/interfaces'
import Image from 'next/image'
import { FaCartPlus, FaShop, FaTruckFast, FaShieldHalved, FaTruckArrowRight } from 'react-icons/fa6'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export default function ProductView ({ params }: { params: { product: string } }): JSX.Element {
  const [product, setProduct] = useState<Product>()
  const [selectedWeight, setSelectedWeight] = useState<Product['weightOptions'][0]>()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    getProductById(params.product)
      .then((data) => {
        setProduct(data)
        setSelectedWeight(data.weightOptions[0])
      })
      .catch((error) => { console.log(error) })
  }, [params.product])

  const handleWeightChange = (weight: string): void => {
    const selectedWeight = product?.weightOptions.find(option => option.weight === weight)

    if (selectedWeight != null) {
      setSelectedWeight(selectedWeight)
    }
  }

  const increaseQuantity = (): void => {
    if (product?.stock !== undefined && quantity < product?.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleImageChange = (imageIndex: number): void => {
    setSelectedImage(imageIndex)
  }

  return (
    <div>
      <div className='flex pt-4 px-5 gap-4'>
        <div>
          <div className='border-2 rounded-2xl overflow-hidden mb-3'>
            <Image
              src={product?.image[selectedImage] ?? ''}
              alt={product?.name ?? ''}
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className='flex gap-2'>
              {
                product?.image.map((image, index) => (
                  <div key={index} className='border-2 rounded-2xl overflow-hidden cursor-pointer'>
                    <Image
                      src={image}
                      alt={product?.name}
                      width={100}
                      height={100}
                      onClick={() => { handleImageChange(index) }}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col w-1/2'>
          <h1 className='text-2xl font-semibold text-[--accent-200]'>{product?.name}</h1>
          <p className='text-[--text-200] font-medium text-base mt-1 mb-3 cursor-pointer'>
            {product?.brand}
          </p>
          <hr />
          <p className='text-sm mt-2 mb-4'>
            {product?.miniDescription}
          </p>
          <hr />
          <div className='flex gap-2 mt-6 mb-4'>
            {
              product?.weightOptions.map((option) => (
                <button className={`text-[--text-200] pl-3 pr-10 rounded-lg py-2 transition-all select-none flex flex-col
                  ${option.weight === selectedWeight?.weight
                    ? 'bg-[--accent-100]'
                    : 'bg-[--bg-300] text-[--text-200] hover:bg-[--accent-200] hover:text-[--bg-100]'
                  }`}
                  key={option.weight}
                  onClick={() => { handleWeightChange(option.weight) }}
                >
                  <div className='font-bold text-sm'>
                    {option.weight}
                  </div>
                  <div className='font-semibold text-lg'>
                    ${option.price}
                  </div>
                </button>
              ))
            }
          </div>
          <hr />
          <div className='flex gap-10 items-center mt-4'>
            <div className='flex gap-1'>
              <button className={`w-7 h-7 bg-[--bg-300] text-[--text-200] rounded-lg transition-all hover:bg-[--accent-200] hover:text-[--bg-100] flex items-center justify-center ${quantity === 1 ? 'opacity-80 cursor-not-allowed' : ''}`}
                onClick={decreaseQuantity}>
                -
              </button>
              <div className='w-7 h-7 bg-[--bg-300] select-none text-[--text-200] rounded-lg transition-all flex items-center justify-center'>
                {quantity}
              </div>
              <button className={`w-7 h-7 bg-[--bg-300] text-[--text-200] rounded-lg transition-all hover:bg-[--accent-200] hover:text-[--bg-100] flex items-center justify-center ${quantity === product?.stock ? 'opacity-80 cursor-not-allowed' : ''}`}
                onClick={increaseQuantity}>
                +
              </button>
            </div>

            <button className='flex items-center font-semibold tracking-wide justify-center gap-2 h-10 w-full bg-[--accent-100] text-[--text-200] rounded-lg transition-all hover:bg-[--accent-200] hover:text-[--bg-100]'>
              <FaCartPlus />Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <div className='flex mx-5 my-12 border-2 py-5 px-4 justify-between rounded-md'>
        <div className='flex text-xs flex-col w-40'>
          <FaTruckArrowRight className='text-4xl text-[--bg-100] bg-[--accent-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Envios Gratis</p>
          <p>¡Conoce cuales comunas aqui!</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
          <FaShieldHalved className='text-4xl text-[--bg-100] bg-[--accent-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Pagos Seguros</p>
          <p>100% protegido</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
          <FaTruckFast className='text-4xl text-[--bg-100] bg-[--accent-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Envio Express</p>
          <p>¡Recibe el mismo dia!</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
        <FaShop className='text-4xl text-[--bg-100] bg-[--accent-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Tiendas</p>
          <p>Atencion de Lunes a Sabados</p>
        </div>
      </div>

      <div className='px-5'>
        <h2 className='text-xl font-semibold text-[--accent-200] mb-3'>Descripción</h2>
        <Accordion type='single' collapsible className='flex flex-col gap-1'>
          {
            product?.description.map((description, index) => (
              <AccordionItem value={description.title} key={index}>
                <AccordionTrigger>
                  {description.title}
                </AccordionTrigger>
                <AccordionContent>
                  {
                    description.title === 'Cantidad Recomendada'
                      ? <Image
                          className='flex items-center justify-center w-full'
                          src={description.description}
                          width={700}
                          height={400} alt={description.title}
                        />
                      : description.description.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))
                  }
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </div>
  )
}
