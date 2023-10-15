'use client'

import React from 'react'

import type { User } from '@/interfaces/interfaces'
import useOrders from '@/hooks/useOrders'

interface OrdersHistoryProps {
  user: User
}

const OrdersHistory = ({ user }: OrdersHistoryProps): JSX.Element => {
  const { orders } = useOrders({ userId: user.id })

  if (user === undefined) {
    return (
      <div className='border-2 border-[--bg-300] rounded-lg py-7 px-4 bg-[--bg-200]'>
        <h1 className='text-xl font-semibold mb-4'>
          Historial de compras
        </h1>
        <div className='flex flex-col gap-3'>
          <p className='text-lg font-semibold'>
            No hemos podido encontrar tu historial de compras
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='border-2 rounded-lg py-7 px-4 bg-[--bg-200]'>
        <h1 className='text-xl font-semibold mb-4'>
          Historial de compras
        </h1>
        <div className='flex flex-col gap-3'>
          {orders.total === 0 && (
            <p className='text-lg font-semibold'>
              No has realizado ninguna compra 🥲
            </p>
          )}
          {orders.orders.map((order) => (
            <div key={order._id} className='flex flex-col border-2 bg-[--bg-100] border-[--bg-300] py-4 px-3 rounded-sm'>
              <div className='flex justify-between w-full'>
                <p className='text-base md:text-lg font-semibold'>
                  ID de Orden: {order._id}
                </p>
                <p className='text-base md:text-lg font-semibold text-end'>
                  Total: {order.total.toLocaleString()}
                </p>
              </div>
              {
                order.products.map((product) => (
                  product.price_data.product_data.name === 'Shipping'
                    ? (
                      <div key={product._id} className='flex items-center justify-between my-2'>
                        <p className='text-base md:text-lg font-medium'>Reparto a domicilio</p>
                        <p className='text-sm'>
                          Precio: ${product.price_data.unit_amount.toLocaleString()}
                        </p>
                      </div>
                      )
                    : (
                      <div key={product._id} className='flex items-center justify-between my-2'>
                        <div>
                          <p className='text-base md:text-lg font-medium'>
                            {product.price_data.product_data.name}
                          </p>
                          <p className='text-sm'>
                            Cantidad: {product.quantity.toLocaleString()}
                          </p>
                        </div>
                        <p className='text-sm'>
                          Precio: ${product.price_data.unit_amount.toLocaleString()}
                        </p>
                      </div>
                      )
                ))
              }
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OrdersHistory
