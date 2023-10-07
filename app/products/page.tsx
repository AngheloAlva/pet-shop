'use client'
import React, { useState } from 'react'
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
import { Label } from '@/components/ui/label'
import { FormSelect } from '@/components/ui/FormSelect'
import { FaFilter } from 'react-icons/fa6'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

import type { Filter } from '@/interfaces/interfaces'
import useCategory from '@/hooks/useCategory'

const BrandPage = (): JSX.Element => {
  const [filters, setFilters] = useState<Filter>({
    brand: '',
    lifeStage: '',
    petType: '',
    category: ''
  })

  const petTypes = [{ name: 'Dog', _id: 'dog' }, { name: 'Cat', _id: 'cat' }]
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

  const { products, userId, brands } = useProductAndBrands(filters)
  const { categories } = useCategory()

  const handleFilterChange = (filterName: string, filterValue: string): void => {
    setFilters({
      ...filters,
      [filterName]: filterValue
    })
  }

  return (
    <div className='mx-5'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold mt-7 mb-3'>
          Nuestros productos
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
            <div className='flex flex-col mt-5'>
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
              <div className='flex flex-col mt-5'>
                <Label>Categoria</Label>
                <div className='flex gap-2 items-center'>
                  <FormSelect
                    field='category'
                    placeholder='Selecciona una categoria'
                    value={filters.category}
                    list={categories}
                    handleFilterChange={handleFilterChange}
                  />
                  <Button variant={'outline'} onClick={() => { handleFilterChange('category', '') }}>
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
              <div className='flex flex-col mt-5'>
                <Label>Tipo de mascota</Label>
                <div className='flex gap-2 items-center'>
                  <FormSelect
                    field='petType'
                    placeholder='Selecciona un tipo de mascota'
                    value={filters.petType}
                    list={petTypes}
                    handleFilterChange={handleFilterChange}
                  />
                  <Button variant={'outline'} onClick={() => { handleFilterChange('petType', '') }}>
                    Limpiar
                  </Button>
                </div>
              </div>
            </SheetDescription>
            <SheetFooter>
              <Button variant={'destructive'} className='mt-10 w-full' onClick={() => { setFilters({ ...filters, brand: '', lifeStage: '', category: '', petType: '' }) }}>
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
    </div>
  )
}

export default BrandPage
