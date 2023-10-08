'use client'

import React, { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import useProductAndBrands from '@/hooks/useProduct&Brands'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { FaFilter } from 'react-icons/fa6'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { FormSelect } from '@/components/ui/FormSelect'

import type { Filter } from '@/interfaces/interfaces'
import useCategoryBrands from '@/hooks/useCategory'

const CategoryPage = ({ params }: { params: { categoryID: string } }): JSX.Element => {
  const productsPerPage = 15
  const [page, setPage] = useState<number>(1)

  const [filters, setFilters] = useState<Filter>({
    category: params.categoryID[0],
    brand: '',
    lifeStage: '',
    petType: params.categoryID[1],
    productLimit: productsPerPage,
    productFrom: 0
  })

  const petType = [{ name: 'Perro', _id: 'dog' }, { name: 'Gato', _id: 'cat' }]
  const lifeStages = [
    {
      name: 'Puppy',
      _id: 'puppy'
    }, {
      name: 'Adult',
      _id: 'adult'
    }, {
      name: 'Senior',
      _id: 'senior'
    }, {
      name: 'All Life Stages',
      _id: 'allLifeStages'
    }
  ]

  const { products, userId, brands, totalProducts } = useProductAndBrands(filters)
  const { categories } = useCategoryBrands()

  const handleFilterChange = (filterName: string, filterValue: string): void => {
    setFilters({
      ...filters,
      [filterName]: filterValue
    })
  }

  const handlePageChange = (newPage: number): void => {
    setPage(newPage)
    setFilters({
      ...filters,
      productFrom: (newPage - 1) * productsPerPage
    })
  }

  return (
    <div className='mx-5'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold mt-7 mb-3'>
          Categoria: {categories.find(category => category._id === params.categoryID[0])?.name}
        </h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='flex items-center gap-2'>
              Filtros <FaFilter className='text-lg cursor-pointer' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>Selecciona los filtros que deseas aplicar</SheetDescription>
            </SheetHeader>
            <SheetDescription className='py-5'>
              <div className="flex flex-col">
                <Label>Marca</Label>
                <div className='flex gap-2 items-center'>
                  <FormSelect
                    field='brand'
                    placeholder='Selecciona una marca'
                    value={filters.brand}
                    list={brands}
                    handleFilterChange={handleFilterChange}
                  />
                  <Button variant={'outline'} onClick={() => { handleFilterChange('brand', '') }}>
                    Limpiar
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <Label>Edad</Label>
                <div className='flex gap-2 items-center'>
                  <FormSelect
                    field='lifeStage'
                    placeholder='Selecciona una etapa de vida'
                    value={filters.lifeStage}
                    list={lifeStages}
                    handleFilterChange={handleFilterChange}
                  />
                  <Button variant={'outline'} onClick={() => { handleFilterChange('lifeStage', '') }}>
                    Limpiar
                  </Button>
                </div>
              </div>
              {
                params.categoryID[1] !== null && (
                  <div className="flex flex-col mt-5">
                    <Label>Tipo de mascota</Label>
                    <div className='flex gap-2 items-center'>
                      <FormSelect
                        field='petType'
                        placeholder='Selecciona una etapa de vida'
                        value={filters.petType}
                        list={petType}
                        handleFilterChange={handleFilterChange}
                      />
                      <Button variant={'outline'} onClick={() => { handleFilterChange('petType', '') }}>
                        Limpiar
                      </Button>
                    </div>
                  </div>
                )
              }
            </SheetDescription>
            <SheetFooter>
              <Button variant={'destructive'} className='mt-10 w-full' onClick={() => { setFilters({ ...filters, brand: '', lifeStage: '' }) }}>
                Limpiar filtros
              </Button>
              <SheetClose className='mt-10 w-full'>
                <Button className='w-full'>
                  Aplicar filtros
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
          products.length !== 0
            ? products.map((product) => (
              <ProductCard key={product._id} userId={userId} product={product} className='w-auto flex flex-col justify-between sm:block' />
            ))
            : (
              <>
                <h1 className='font-bold text-xl col-span-3 my-4'>Lo lamentamos 😢. No hay productos para estos filtros</h1>
                <Button className='mb-72' onClick={() => { setFilters({ ...filters, brand: '', lifeStage: '' }) }}>
                  Limpiar filtros
                </Button>
              </>
              )
        }
      </div>
      {
        totalProducts > productsPerPage
          ? (
            <div className='flex justify-center items-center gap-2 mt-10 mb-20'>
              <Button
                variant={page === 1 ? 'outline' : 'default'}
                onClick={() => { handlePageChange(page - 1) }}
                disabled={page === 1}
              >
                Anterior
              </Button>
              <Button
                variant={page === Math.ceil(totalProducts / productsPerPage) ? 'outline' : 'default'}
                onClick={() => { handlePageChange(page + 1) }}
                disabled={page === Math.ceil(totalProducts / productsPerPage)}
              >
                Siguiente
              </Button>
            </div>
            )
          : null
      }
    </div>
  )
}

export default CategoryPage
