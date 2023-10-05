import Image from 'next/image'
import React from 'react'

const SimpleProduct = ({ product, item, index }): JSX.Element => {
  return (
    <div className='flex gap-3 mt-4'>
      <Image src={product.image[0]} alt={product.name} className='rounded-sm' width={100} height={100} />
      <div className='flex text-[--text-200] justify-between w-full'>
        <div className='flex flex-col'>
          <p className='font-semibold'>{product.name}</p>
          {
            Number(product?.options[item.optionSelectedIndex].discount) > 0
              ? (
                  <>
                    <span className='line-through mr-2 text-xs'>${product?.options[item.optionSelectedIndex].price.toLocaleString('es-CL')}</span>
                    <span>${(Number(product?.options[item.optionSelectedIndex].price) * (1 - Number(product?.options[item.optionSelectedIndex].discount) / 100)).toLocaleString('es-CL')}</span>
                  </>
                )
              : `$${product?.options[item.optionSelectedIndex].price.toLocaleString('es-CL')}`
          }
        </div>
        <p className='text-sm'>Cantidad: {item?.quantity}</p>
      </div>
    </div>
  )
}

export default SimpleProduct
