import React, { useContext, useEffect } from 'react'

import type { Product } from '@/interfaces/interfaces'
import Image from 'next/image'
import { FaRegTrashCan } from 'react-icons/fa6'

import { updateCart } from '@/api/api'
import { CartContext } from '@/context/CartContext'

interface ProductCartProps {
  userId: string
  product: Product
  quantity: number
  optionSelectedIndex: number
}

const ProductCart = ({ userId, product, quantity, optionSelectedIndex }: ProductCartProps): JSX.Element => {
  const [quantityProduct, setQuantityProduct] = React.useState<number>(quantity)
  let timeoutId: string | number | NodeJS.Timeout | null | undefined = null

  const { refreshCart } = useContext(CartContext)

  const updateCartDebounced = (userId: string, productId: string, quantity: number): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      void updateCart(userId, productId, quantity)
    }, 500)
  }

  useEffect(() => {
    updateCartDebounced(userId, product._id, quantityProduct)
  }, [quantityProduct])

  const quantityLess = (): void => {
    if (quantityProduct === 1) return
    setQuantityProduct(quantityProduct - 1)
  }

  const quantityMore = (): void => {
    if (product.stock === quantityProduct) return
    setQuantityProduct(quantityProduct + 1)
  }

  const deleteProduct = async (): Promise<void> => {
    await updateCart(userId, product._id, 0)
    await refreshCart()
  }

  return (
    <div className='w-full flex text-[--text-200] text-sm gap-2'>
      <Image src={product.image[0]} alt={product.name} width={70} height={60} />
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-1'>
          <p className='font-bold'>
            {product.name}
          </p>
          <p className='font-semibold'>
            $ {product.weightOptions[optionSelectedIndex]?.price.toLocaleString()}
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <button onClick={quantityProduct === 1 ? deleteProduct : quantityLess} className={`px-1 rounded-l-md transition-colors h-5 ${quantityProduct === 1 ? 'bg-red-200 hover:bg-red-600 text-red-600 hover:text-[--bg-100]' : 'bg-[--bg-300] hover:bg-[--bg-200]'}`}>
            {
              quantityProduct === 1
                ? <FaRegTrashCan className='' />
                : ' - '
            }
          </button>
          <span className='bg-[--bg-300] px-1 h-5'>
            {quantityProduct}
          </span>
          <button onClick={quantityMore} className='px-1 bg-[--bg-300] rounded-r-md hover:bg-[--bg-200] transition-colors h-5'> + </button>
      </div>
      </div>
    </div>
  )
}

export default ProductCart
