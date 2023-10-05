'use client'

import React, { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { createCheckoutSession } from '@/api/cart'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import { FaAngleLeft } from 'react-icons/fa6'
import { useUserDB } from '@/hooks/useUser'
import PersonalInfo from '@/components/profile/Personal-info'

const page = (): JSX.Element => {
  const { cart, cartItems } = useContext(CartContext)
  const { user } = useUserDB()

  const [shippingMethod, setShippingMethod] = useState<string>('')
  const [paymentActive, setPaymentActive] = useState<boolean>(false)

  const subTotal = cartItems.reduce((acc, item, index) => {
    const price = cart[index]?.options[item.optionSelectedIndex]?.price
    if (typeof price === 'number') {
      return acc + (price * item.quantity)
    }
    return acc
  }, 0)

  const handleShippingMethod = (value: string): void => {
    setShippingMethod(value)
    if (user?.address?.street !== undefined && user?.address?.street !== '') {
      setPaymentActive(true)
    }
  }

  const handleCheckout = async (): Promise<void> => {
    const items = cartItems.map(item => ({
      id: item.product,
      quantity: item.quantity,
      optionSelectedIndex: item.optionSelectedIndex
    }))

    let payShippment
    if (shippingMethod === 'payShippment') {
      payShippment = subTotal < 20000
    }

    const session = await createCheckoutSession(items, payShippment)
    window.location.href = session
  }

  return (
    <div className='py-8 px-5'>
      <div className='border-2 rounded-sm p-4 bg-[--bg-200] border-[--bg-300]'>
        <div className='flex justify-between text-[--text-100]'>
          <Link href='/'>
            <FaAngleLeft className='text-lg' />
          </Link>
          <h2 className='text-lg font-semibold'>Resumen</h2>
        </div>
        <div className='flex flex-col gap-2'>
          {
            cartItems.length > 0
              ? cart.map((product, index) => (
                  <div className='flex gap-3 mt-4 items-center'>
                    <Image src={product.image[0]} alt={product.name} className='rounded-sm' width={100} height={100} />
                    <div className='flex flex-col text-[--text-200]'>
                      <p className='font-semibold'>{product.name}</p>
                      <p className='font-semibold'>$ {product?.options[cartItems[index].optionSelectedIndex].price.toLocaleString()}</p>
                      <p className='text-sm mt-2'>Cantidad: {cartItems[index]?.quantity}</p>
                    </div>
                  </div>
              ))
              : (
                <div className='flex flex-col text-[--text-200] items-center gap-5 py-2'>
                  <p className='font-semibold'>Aun no tienes productos en tu carrito</p>
                  <Link href='/' className='bg-[--accent-100] text-[--bg-100] font-bold py-2 w-3/4 rounded-sm hover:bg-[--accent-200] text-base text-center'>
                    Comienza a comprar
                  </Link>
                </div>
                )
          }
        </div>
      </div>
      {
        cartItems.length > 0 && (
          <>
            <div className='border-2 rounded-sm p-4 mt-2 bg-[--bg-200] border-[--bg-300]'>
              {
                user?.address?.region === undefined
                  ? (
                      <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Aun no tienes una direccion de envio</p>
                        <Dialog>
                          <DialogTrigger>
                            <button className='border-2 rounded-sm px-3 border-[--bg-300] bg-[--bg-100] py-1 my-3 w-full'>
                              Agregar direccion
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Agregar direccion
                              </DialogTitle>
                            </DialogHeader>
                            <PersonalInfo user={user} />
                          </DialogContent>
                        </Dialog>
                      </div>
                    )
                  : (
                    <>
                      <h2 className='text-lg font-semibold'>Datos de envio</h2>
                      <div className='flex flex-col gap-2 mt-2'>
                        <p className='font-semibold'>Nombre: {user.name} {user.lastName}</p>
                        <p className='font-semibold'>Email: {user.email}</p>
                        <p className='font-semibold'>Telefono: {user.phone}</p>
                        <p className='font-semibold'>Direccion:</p>
                        <p className='font-semibold ml-4'>Comuna: {user.address?.comuna}</p>
                        <p className='font-semibold ml-4'>Region: {user.address?.region}</p>
                        <p className='font-semibold ml-4'>Calle: {user.address?.street} {user.address?.number}</p>
                        <p className='font-semibold ml-4'>Codigo postal: {user.address?.zipCode}</p>
                      </div>
                    </>
                    )
              }
            </div>

            <div className='border-2 rounded-sm p-4 mt-2 bg-[--bg-200] border-[--bg-300]'>
              <h2 className='text-lg font-semibold mb-3'>Metodo de envio</h2>
              <RadioGroup className='ml-5' onValueChange={handleShippingMethod}>
                <div className='flex space-x-2'>
                  <RadioGroupItem value={'payShippment'} id={shippingMethod} />
                  <Label htmlFor={'payShippment'} className='flex gap-2'>Reparto a Domicilio</Label>
                </div>
                <div className='flex space-x-2'>
                  <RadioGroupItem value={'pickup'} id={shippingMethod} />
                  <Label htmlFor={'pickup'} className='flex gap-2'>Retiro en Tienda</Label>
                </div>
              </RadioGroup>
            </div>

            <div className='border-2 rounded-sm p-4 mt-2 bg-[--bg-200] border-[--bg-300]'>
            {
              cartItems.length > 0 && (
                <div className='flex flex-col mt-5 font-semibold'>
                  <p>
                    Subtotal: $ {
                      cartItems.reduce((acc, item, index) => {
                        const price = cart[index]?.options[item.optionSelectedIndex]?.price
                        if (typeof price === 'number') {
                          return acc + (price * item.quantity)
                        }
                        return acc
                      }, 0).toLocaleString()
                    }
                  </p>
                  <p>Descuento: $ 0</p>
                  <p>
                    Envio: $
                    {
                      shippingMethod === 'payShippment'
                        ? subTotal > 20000
                          ? '0'
                          : '3000'
                        : '0'
                    }
                  </p>
                  <p>
                    Total: $ { (subTotal + (shippingMethod === 'payShippment' ? (subTotal > 20000 ? 0 : 3000) : 0)).toLocaleString() }
                  </p>
                  <button
                    className={`bg-[--accent-100] mt-4 text-[--text-100] font-bold py-2 rounded-sm text-base text-center transition-colors ${!paymentActive ? 'select-none opacity-70 cursor-not-allowed' : 'hover:bg-[--accent-200] hover:text-[--bg-100]'}`}
                    disabled={!paymentActive}
                    onClick={handleCheckout}
                  >
                    Continuar con el pago
                  </button>
                </div>
              )
            }
            </div>
          </>
        )
      }
    </div>
  )
}

export default withPageAuthRequired(page)
