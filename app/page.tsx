'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Home (): JSX.Element {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:3001/products')
        setProducts((response.data.products))
      } catch (error) {
        console.error(error)
      }
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getProducts()
    } catch (error) {
      console.error(error)
    }
  }, [])

  // { category: '64f222ee811be8e9842f15f1', petType: Array(1), name: 'Alimento Free Run Poultry', miniDescription: 'Los dos primeros ingredientes son pollo y pavo fre…zado para un delicioso sabor que su perro deseará', …}
  // { category: '64f222ee811be8e9842f15f1', petType: Array(1), name: 'Alimento Light & Fit para Control del Peso', miniDescription: 'Acana® son recetas cuidadosamente elaboradas de pr…ara ayudarlos a vivir una vida saludable y feliz.', …}
  // { category: '64f222ee811be8e9842f15f1', petType: Array(1), name: 'Alimento para cachorro Recipe Grain Free', miniDescription: 'Por naturaleza, todos los cachorros se desarrollan…s sintéticos En algunos alimentos para cachorros.', …}
  // { category: '64f222ee811be8e9842f15f1', petType: Array(1), name: 'Alimento Raza mediana y grande', miniDescription: 'Agility Adultos Raza Mediana y Grande es un alimen… y balanceado indicado para perros de 1 a 7 años.', …}
  // { category: '64f222ee811be8e9842f15f1', petType: Array(1), name: 'Alimento Raza Pequeña', miniDescription: 'Agility Adultos Raza Pequeña es un alimento comple… y balanceado indicado para perros de 1 a 7 años.', …}

  /* {products.map((product, index) => (
    <li key={index}>
      {product.name}
    </li>
  ))} */
  return (
    <>
      <h2 className='text-xl font-bold my-5 pl-4'>Top Ventas</h2>
      <div className='flex gap-2 px-4 flex-wrap'>
        {
          products.map((product, index) => (
            <div className='bg-white border-2 border-[--bg-300] rounded-xl p-3 w-64' key={index}>
              <div className='w-full flex items-center justify-center mb-4'>
                <Image src={product.image[0]} alt={product.name} width={200} height={400} />
              </div>
              <p className='text-[--text-100] font-medium text-base'>{product.brand} - {product.name}</p>
              <p className='text-xs text-[--primary-300] pt-1 pb-3'>{product.brand}</p>
              <p className='font-semibold mb-5'>${product.weightOptions[0].price}</p>
              <p className='border-2 max-w-[4rem] items-center justify-center flex text-xs font-semibold bg-[--accent-200] text-[--bg-100] rounded-lg py-1 transition-all cursor-pointer'>{product.weightOptions[0].weight}</p>
              <button className='p-2 my-2 w-full bg-[--accent-100] text-[--bg-100] rounded-lg transition-all hover:bg-[--accent-200]'>Agregar</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
