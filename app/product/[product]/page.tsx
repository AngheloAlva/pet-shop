'use client'

import React, { useEffect, useState } from 'react'
import { getProductById } from '@/api/api'
import type { Product } from '@/interfaces/interfaces'

export default function ProductView ({ params }: { params: { product: string } }): JSX.Element {
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    getProductById(params.product)
      .then((data) => { setProduct(data) })

      .catch((error) => { console.log(error) })
  }, [params.product])

  return (
    <div>
      <h1>{product?.name}</h1>
    </div>
  )
}
