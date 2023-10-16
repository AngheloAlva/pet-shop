'use client'

import Link from 'next/link'
import { useUserDB } from '@/hooks/useUserDB'
import React, { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'

import { FaAngleLeft } from 'react-icons/fa6'
import { Label } from '@/components/ui/label'
import SimpleProduct from '@/components/shipping/SimpleProduct'
import ShippinAddress from '@/components/shipping/ShippinAddress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { createCheckoutSession } from '@/apiRequest/cart'
import type { Product } from '@/interfaces/interfaces'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

const page = (): JSX.Element => {
  const { cart, cartItems } = useContext(CartContext)
  const { user } = useUserDB()

  const [shippingMethod, setShippingMethod] = useState<string>('')
  const [paymentActive, setPaymentActive] = useState<boolean>(false)
  const [addressExist, setAddressExist] = useState<boolean>(false)

  const calculateSubtotal = (cartItems: any[], cart: Product[]): number => {
    return cartItems.reduce((acc, item, index) => {
      const price = cart[index]?.options[item.optionSelectedIndex]?.price
      if (typeof price === 'number') {
        return acc + (price * item.quantity)
      }
      return acc
    }, 0)
  }

  const calculateDiscount = (cartItems: any[], cart: Product[]): number => {
    return cartItems.reduce((acc, item, index) => {
      const price = cart[index]?.options[item.optionSelectedIndex]?.price
      const discount = cart[index]?.options[item.optionSelectedIndex]?.discount
      if (typeof price === 'number' && typeof discount === 'number') {
        return acc + (price * item.quantity * discount / 100)
      }
      return acc
    }, 0)
  }

  const calculateShipping = (shippingMethod: string, subTotal: number): number => {
    return shippingMethod === 'payShippment'
      ? subTotal > 20000 ? 0 : 3000
      : 0
  }

  const calculateTotal = (subTotal: number, shipping: number, discount: number): number => {
    return subTotal + shipping - discount
  }

  const subTotal = calculateSubtotal(cartItems, cart)
  const discount = calculateDiscount(cartItems, cart)
  const shipping = calculateShipping(shippingMethod, subTotal)

  const handleShippingMethod = (value: string): void => {
    setShippingMethod(value)
    if (addressExist && value !== '') {
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
    } else {
      payShippment = false
    }

    const session = await createCheckoutSession(items, payShippment, user?.id ?? '')
    window.location.href = session.url
  }

  const handleAddressChange = (newAddress: boolean): void => {
    setAddressExist(newAddress)
    if (shippingMethod !== '') {
      setPaymentActive(true)
    }
  }

  return (
    <div className='my-8 mx-5 md:mx-20 lg:mx-[15vw] 2xl:mx-[20vw]'>
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
                <SimpleProduct product={product} item={cartItems[index]} key={product._id} />
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
            {(user != null) && <ShippinAddress user={user} onAddressChange={handleAddressChange} />}
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
                  <p>Subtotal: $ {subTotal.toLocaleString()}</p>
                  <p>Descuento: $ {discount.toLocaleString()}</p>
                  <p>Envio: $ {shipping.toLocaleString()}</p>
                  <p>Total: $ {calculateTotal(subTotal, shipping, discount).toLocaleString()}</p>
                  <button
                    className={`bg-[--accent-100] mt-4 text-[--text-100] font-bold py-2 rounded-sm text-base text-center transition-colors ${!paymentActive ? 'select-none opacity-70 cursor-not-allowed' : 'hover:bg-[--accent-200] hover:text-[--bg-100]'}`}
                    disabled={!paymentActive}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
