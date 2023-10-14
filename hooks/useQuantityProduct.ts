import { useContext, useEffect, useState } from 'react'
import { updateCart } from '@/api/cart'
import { CartContext } from '@/context/CartContext'
import type { Product } from '@/interfaces/interfaces'

interface UseQuantityProductProps {
  userId: string
  product: Product
  quantity: number
  optionSelectedIndex: number
}

const useQuantityProduct = ({
  userId,
  product,
  quantity,
  optionSelectedIndex
}: UseQuantityProductProps
): {
    quantityProduct: number
    quantityLess: () => void
    quantityMore: () => void
    deleteProduct: () => void
  } => {
  const [quantityProduct, setQuantityProduct] = useState<number>(quantity)
  const { refreshCart } = useContext(CartContext)

  const updateCartImmediately = async (
    userId: string, productId: string, quantity: number
  ): Promise<void> => {
    await updateCart(userId, productId, quantity)
    await refreshCart()
  }

  useEffect(() => {
    void updateCartImmediately(userId, product._id, quantityProduct)
  }, [quantityProduct])

  const quantityLess = (): void => {
    if (quantityProduct === 1) return
    setQuantityProduct(quantityProduct - 1)
  }

  const quantityMore = (): void => {
    if (product.options[optionSelectedIndex].stock === quantityProduct) return
    setQuantityProduct(quantityProduct + 1)
  }

  const deleteProduct = async (): Promise<void> => {
    await updateCart(userId, product._id, 0)
    await refreshCart()
  }

  return {
    quantityProduct,
    quantityLess,
    quantityMore,
    deleteProduct
  }
}

export default useQuantityProduct
