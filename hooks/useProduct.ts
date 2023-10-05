import { useEffect, useState } from 'react'

import { getProductById } from '@/api/product'
import type { Product } from '@/interfaces/interfaces'

interface UseProduct {
  productID: string
  setOptionSelected: (option: Product['options'][0]) => void
}

const useProduct = ({ productID, setOptionSelected }: UseProduct): { product: Product } => {
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    getProductById(productID)
      .then((data) => {
        setProduct(data.product)
        setOptionSelected(data.product.options[0])
      })
      .catch((error) => { console.log(error) })
  }, [productID])

  return { product }
}

export default useProduct
