'use client'

import React from 'react'

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

import { createOrder } from '@/api/order'
import type { Order } from '@/interfaces/interfaces'

const page = (): JSX.Element => {
  React.useEffect(() => {
    const order: Order = {
    }

    createOrder(order)
  }, [])

  return (
    <div className='flex flex-col items-center py-8'>
      <h1 className='font-bold text-2xl text-[--text-200]'>Gracias por la compra</h1>
    </div>
  )
}

export default withPageAuthRequired(page)
