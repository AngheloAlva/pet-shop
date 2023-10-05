'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

import { FaCartPlus, FaShop, FaTruckFast, FaShieldHalved, FaTruckArrowRight } from 'react-icons/fa6'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

import { addProductToCart } from '@/api/cart'
import { CartContext } from '@/context/CartContext'
import type { Product } from '@/interfaces/interfaces'
import { useUser } from '@auth0/nextjs-auth0/client'
import useProduct from '@/hooks/useProduct'
import { useToast } from '@/components/ui/use-toast'

export default function ProductView ({ params }: { params: { productID: string } }): JSX.Element {
  const { toast } = useToast()

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [optionSelected, setOptionSelected] = useState<Product['options'][0]>()

  const productID = params.productID
  const { product } = useProduct({ productID, setOptionSelected })
  const { user } = useUser()

  const { refreshCart } = useContext(CartContext)

  const handleOptionChange = (option: string): void => {
    const optionSelected = product?.options.find(op => op.option === option)

    if (optionSelected != null) {
      setOptionSelected(optionSelected)
      setQuantity(1)
    }
  }

  const increaseQuantity = (): void => {
    if (optionSelected?.stock !== undefined && quantity < Number(optionSelected.stock)) {
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

  const addToCart = async (): Promise<void> => {
    const optionSelectedIndex = product?.options.findIndex(op => op.option === optionSelected?.option)

    if (user === undefined || user === '') {
      toast({
        title: 'Error al agregar el producto al carrito',
        description: 'Debes iniciar sesión para agregar productos al carrito',
        variant: 'destructive',
        className: 'text-xl py-10'
      })

      return
    }

    try {
      await addProductToCart(user?.sub ?? '', product?._id ?? '', quantity, optionSelectedIndex)
      await refreshCart()
    } catch (error) {
      throw new Error()
    }
  }

  return (
    <>
      <div className='flex pt-4 flex-col px-5 gap-4 sm:flex-row'>
        <div className='flex gap-2 sm:flex-col'>
          <div className='border-2 rounded-sm overflow-hidden mb-3'>
            <Image
              src={product?.image[selectedImage] ?? ''}
              alt={product?.name ?? ''}
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className='flex gap-2 flex-col sm:flex-row'>
              {
                product?.image.map((image, index) => (
                  <div key={index} className='border-2 rounded-sm overflow-hidden cursor-pointer'>
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

        <div className='flex flex-col sm:w-4/5'>
          <h1 className='text-2xl font-semibold text-[--primary-200]'>{product?.name}</h1>
          <Link href={`/brand/${product?.brand._id}`} className='text-[--accent-200] font-medium text-base mt-1 mb-3 cursor-pointer'>
            {product?.brand.name}
          </Link>
          <hr />
          <p className='text-sm font-medium mt-2 mb-4 text-[--text-200]'>
            {product?.miniDescription}
          </p>
          <hr />
          <div className='flex gap-2 mt-6 mb-4'>
            {
              product?.options.map((op) => (
                <button className={`text-[--text-100] pl-3 pr-10 rounded-sm py-2 transition-all select-none flex flex-col
                  ${op.option === optionSelected?.option
                    ? 'bg-[--accent-100]'
                    : 'bg-[--bg-300] text-[--text-200] hover:bg-[--accent-200] hover:text-[--bg-100]'
                  }`}
                  key={op.option}
                  onClick={() => { handleOptionChange(op.option) }}
                >
                  <div className='font-bold text-sm'>
                    {op.option}
                  </div>
                  <div className='font-semibold text-lg'>
                    ${op.price}
                  </div>
                </button>
              ))
            }
          </div>
          <hr />
          <div className='flex gap-10 items-center mt-4'>
            <div className='flex gap-1'>
              <button className={`w-7 h-7 bg-[--bg-300] text-[--text-200] rounded-sm transition-all hover:bg-[--accent-200] hover:text-[--bg-100] flex items-center justify-center ${quantity === 1 ? 'opacity-80 cursor-not-allowed' : ''}`}
                onClick={decreaseQuantity}>
                -
              </button>
              <div className='w-7 h-7 bg-[--bg-300] select-none text-[--text-200] rounded-sm transition-all flex items-center justify-center'>
                {quantity}
              </div>
              <button
                className={`w-7 h-7 bg-[--bg-300] text-[--text-200] rounded-sm transition-all hover:bg-[--accent-200] hover:text-[--bg-100] flex items-center justify-center ${quantity === optionSelected?.stock ? 'opacity-80 cursor-not-allowed' : ''}`}
                onClick={increaseQuantity}>
                +
              </button>
            </div>

            <button onClick={addToCart} className='flex items-center font-semibold tracking-wide justify-center gap-2 h-10 w-full bg-[--accent-100] text-[--text-200] rounded-sm transition-all hover:bg-[--accent-200] hover:text-[--bg-100]'>
              <FaCartPlus />Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 mx-5 my-12 border-2 py-5 px-4 rounded-sm sm:grid-cols-4'>
        <div className='flex text-xs flex-col w-40'>
          <FaTruckArrowRight className='text-4xl text-[--bg-100] bg-[--primary-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Envios Gratis</p>
          <p>¡Conoce cuales comunas aqui!</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
          <FaShieldHalved className='text-4xl text-[--bg-100] bg-[--primary-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Pagos Seguros</p>
          <p>100% protegido</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
          <FaTruckFast className='text-4xl text-[--bg-100] bg-[--primary-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Envio Express</p>
          <p>¡Recibe el mismo dia!</p>
        </div>
        <div className='flex text-xs flex-col w-40'>
        <FaShop className='text-4xl text-[--bg-100] bg-[--primary-200] rounded-full w-10 h-10 p-1 mb-2' />
          <p className='font-semibold text-sm'>Tiendas</p>
          <p>Atencion de Lunes a Sabados</p>
        </div>
      </div>

      <div className='px-5'>
        <h2 className='text-xl font-semibold text-[--text-100] mb-3'>Descripción</h2>
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
    </>
  )
}
