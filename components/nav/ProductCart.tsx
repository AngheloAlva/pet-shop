import React, { useContext, useEffect } from 'react'
import Image from 'next/image'

import { FaRegTrashCan } from 'react-icons/fa6'

import { updateCart } from '@/api/cart'
import { CartContext } from '@/context/CartContext'
import type { Product } from '@/interfaces/interfaces'

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
    updateCartDebounced(userId, product?._id, quantityProduct)
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

  return (
    <div className='w-full flex text-[--text-200] text-sm gap-2'>
      <div>
        <Image src={product?.image[0]} alt={product?.name} width={100} height={60} />
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-1'>
          <p className='font-bold'>
            {product?.name}
          </p>
          <p className='font-semibold'>
            {product?.options[optionSelectedIndex]?.option}
          </p>
          <div className='font-semibold'>
            {
              Number(product?.options[optionSelectedIndex].discount) > 0
                ? (
                    <>
                      <span className='line-through mr-1 text-xs'>${product?.options[optionSelectedIndex].price.toLocaleString('es-CL')}</span>
                      <span>${(Number(product?.options[optionSelectedIndex].price) * (1 - Number(product?.options[optionSelectedIndex].discount) / 100)).toLocaleString('es-CL')}</span>
                    </>
                  )
                : `$${product?.options[optionSelectedIndex].price.toLocaleString('es-CL')}`
            }
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <button onClick={quantityProduct === 1 ? deleteProduct : quantityLess} className={`px-1 rounded-l-md transition-colors h-5 ${quantityProduct === 1 ? 'bg-[--primary-100] hover:bg-[--primary-300] text-[--primary-300] hover:text-[--primary-100]' : 'bg-[--bg-300] hover:bg-[--bg-200]'}`}>
            {
              quantityProduct === 1
                ? <FaRegTrashCan />
                : ' - '
            }
          </button>
          <span className='bg-[--bg-300] px-1 h-5 text-[--text-100]'>
            {quantityProduct}
          </span>
          <button onClick={quantityMore} className='px-1 bg-[--bg-300] text-[--text-100] rounded-r-md hover:bg-[--bg-200] transition-colors h-5'>
            +
          </button>
      </div>
      </div>
    </div>
  )
}

export default ProductCart
