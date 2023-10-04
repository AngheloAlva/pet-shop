'use client'

import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'

import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0/client'
import { getUser } from '@/api/user'
import { createCheckoutSession } from '@/api/cart'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

import type { User } from '@/interfaces/interfaces'

import { FaAngleLeft } from 'react-icons/fa6'

const page = (): JSX.Element => {
  const { cart, cartItems } = useContext(CartContext)
  const { user } = useUser()

  const [userDb, setUserDb] = React.useState<User>([])
  const [shippingMethod, setShippingMethod] = React.useState<string>('')

  const shippingMethods = [
    { value: 'CHILEXPRESS', label: 'ChileExpress' },
    { value: 'STARKEN', label: 'Starken' },
    { value: 'BLUE EXPRESS', label: 'Blue Express' },
    { value: 'PICKUP', label: 'Retiro en Tienda' },
    { value: 'SHOP DELIVERY', label: 'Reparto de la tienda' }
  ]

  const handleCheckout = async (): Promise<void> => {
    const items = cartItems.map(item => ({
      id: item.product,
      quantity: item.quantity,
      optionSelectedIndex: item.optionSelectedIndex
    }))

    const session = await createCheckoutSession(items)
    window.location.href = session.url
  }

  React.useEffect(() => {
    const getUserDb = async (): Promise<void> => {
      const userDb = await getUser(user?.sub ?? '')
      setUserDb(userDb)
    }

    if (user != null) {
      void getUserDb()
    }
  }, [user])

  const handleShippingMethod = (value: string): void => {
    setShippingMethod(value)
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
                userDb.address?.region === undefined
                  ? (
                      <div className='flex flex-col gap-2'>
                        <p className='font-semibold'>Aun no tienes una direccion de envio</p>
                        <Link href='/profile'>
                          <button className='border-2 rounded-sm px-3 border-[--bg-300] bg-[--bg-100] py-1 my-3 w-full'>
                            Agregar direccion
                          </button>
                        </Link>
                      </div>
                    )
                  : (
                    <>
                      <h2 className='text-lg font-semibold'>Datos de envio</h2>
                      <div className='flex flex-col gap-2 mt-2'>
                        <p className='font-semibold'>Nombre: {userDb.name} {userDb.lastName}</p>
                        <p className='font-semibold'>Email: {userDb.email}</p>
                        <p className='font-semibold'>Telefono: {userDb.phone}</p>
                        <p className='font-semibold'>Direccion:</p>
                        <p className='font-semibold ml-4'>Comuna: {userDb.address?.comuna}</p>
                        <p className='font-semibold ml-4'>Region: {userDb.address?.region}</p>
                        <p className='font-semibold ml-4'>Calle: {userDb.address?.street} {userDb.address?.number}</p>
                        <p className='font-semibold ml-4'>Codigo postal: {userDb.address?.zipCode}</p>
                      </div>
                      <button className='border-2 rounded-sm px-3 py-1 my-3 border-[--bg-300] w-full'>
                        Usar otra direccion
                      </button>
                    </>
                    )
              }
            </div>

            <div className='border-2 rounded-sm p-4 mt-2 bg-[--bg-200] border-[--bg-300]'>
              <h2 className='text-lg font-semibold mb-3'>Metodo de envio</h2>
              <RadioGroup className='ml-5' onValueChange={handleShippingMethod}>
                {
                  shippingMethods.map(method => (
                    <div className='flex space-x-2'>
                      <RadioGroupItem value={method.value} id={method.value} />
                      <Label htmlFor={method.value} className='flex gap-2'>
                        {method.label}
                      </Label>
                    </div>
                  ))
                }
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
                      shippingMethod === 'CHILEXPRESS'
                        ? ' 3.000'
                        : shippingMethod === 'STARKEN'
                          ? ' 2.000'
                          : shippingMethod === 'BLUE EXPRESS'
                            ? ' 2.000'
                            : shippingMethod === 'PICKUP'
                              ? ' 0'
                              : shippingMethod === 'SHOP DELIVERY'
                                ? ' 0'
                                : ' 0'
                    }
                  </p>
                  <p>
                    Total: $ {
                      cartItems.reduce((acc, item, index) => {
                        const price = cart[index]?.options[item.optionSelectedIndex]?.price
                        if (typeof price === 'number') {
                          return acc + (price * item.quantity)
                        }
                        return acc
                      }, 0) + (shippingMethod === 'CHILEXPRESS' ? 3000 : shippingMethod === 'STARKEN' ? 2000 : shippingMethod === 'BLUE EXPRESS' ? 2000 : 0)
                    }
                  </p>
                  <button className='bg-[--accent-100] mt-4 text-[--text-100] font-bold py-2 rounded-sm hover:bg-[--accent-200] hover:text-[--bg-100] text-base text-center transition-colors' onClick={handleCheckout}>
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
