/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogPrimitive
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { createProduct, getCategories, getBrands } from '@/api/api'
import { set } from 'date-fns'

interface Description {
  title: string
  description: string
}

const ProductManagement = (): JSX.Element => {
  const [categories, setCategories] = React.useState<string[]>([])
  const [brands, setBrands] = React.useState<string[]>([])
  const [descriptions, setDescriptions] = React.useState<Description[]>([{ title: '', description: '' }])
  const [currentDescription, setCurrentDescription] = React.useState<Description>({ title: '', description: '' })
  const [category, setCategory] = React.useState<string>('')
  const [brand, setBrand] = React.useState<string>('')
  const [lifeStage, setLifeStage] = React.useState<string>('')

  React.useEffect(() => {
    void getCategories(setCategories)
    void getBrands(setBrands)
  }, [])

  const handleCategory = (category: string) => {
    setCategory(category)
  }

  const handleBrand = (brand: string) => {
    setBrand(brand)
  }

  const handleLifeStage = (lifeStage: string) => {
    setLifeStage(lifeStage)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(
      {
        name: (document.getElementById('name') as HTMLInputElement).value,
        category,
        brand,
        miniDescription: (document.getElementById('mini-description') as HTMLInputElement).value,
        descriptions,
        stock: (document.getElementById('stock') as HTMLInputElement).value,
        lifeStage
      }
    )

    // e.target.reset()
    // setDescriptions([{ title: '', description: '' }])
  }

  const handleAddDescription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDescriptions([...descriptions, currentDescription])
    setCurrentDescription({ title: '', description: '' })
  }

  const handleDescriptionChange = (field: keyof Description, value: string) => {
    setCurrentDescription({ ...currentDescription, [field]: value })
  }

  return (
    <div className='border-2 rounded-lg px-2 py-4'>
      <Dialog>
        <DialogTrigger className='border-2 rounded-md px-2 py-1 border-[--accent-100] text-[--text-200] font-semibold'>
          Crear Producto
        </DialogTrigger>
        <DialogContent className='w-[90vw] rounded-lg'>
          <DialogTitle>Crear Producto</DialogTitle>
          <DialogDescription>
            <form>
              <Label htmlFor='name'>Nombre</Label>
              <Input id='name' type='text' placeholder='Nombre del producto' className='w-full mb-3' />
              <Label htmlFor='category'>Categoria</Label>
              <Select onValueChange={handleCategory}>
                <SelectTrigger className='w-full mb-3'>
                  <SelectValue placeholder='Seleccione una cateogira' />
                </SelectTrigger>
                <SelectContent className='w-full'>
                  {
                    categories.map((category, index) => (
                      <SelectItem value={category._id} key={index}>{category.name}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <Label htmlFor='brand'>Marca</Label>
              <Select onValueChange={handleBrand}>
                <SelectTrigger className='w-full mb-3'>
                  <SelectValue placeholder='Seleccione una marca' />
                </SelectTrigger>
                <SelectContent className='w-full'>
                  {
                    brands.map((brand, index) => (
                      <SelectItem value={brand._id} key={index}>{brand.name}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <Label htmlFor='mini-description'>Mini Descripcion</Label>
              <Textarea id='mini-description' placeholder='Mini descripcion del producto' className='w-full mb-3 max-h-20' />
              <div>
                <Label htmlFor='title'>Título</Label>
                <Input
                  id='title'
                  type='text'
                  placeholder='Título de la descripción'
                  value={currentDescription.title}
                  onChange={(e) => handleDescriptionChange('title', e.target.value)}
                />

                <Label htmlFor='description'>Descripción</Label>
                <Textarea
                  id='description'
                  placeholder='Descripción'
                  value={currentDescription.description}
                  onChange={(e) => handleDescriptionChange('description', e.target.value)}
                />

                <button onClick={handleAddDescription} className='border-2 bg-[--bg-300] text-[--text-100] px-2 py-1 my-2 rounded-lg'>
                  Añadir descripción
                </button>
              </div>
              <Label htmlFor='stock'>Stock</Label>
              <Input id='stock' type='number' placeholder='Stock del producto' className='w-full mb-3' />
              <Label htmlFor='lifeStage'>Etapa de vida</Label>
              <Select onValueChange={handleLifeStage}>
                <SelectTrigger className='w-full mb-3'>
                  <SelectValue placeholder='Seleccione una etapa de vida' />
                </SelectTrigger>
                <SelectContent className='w-full'>
                  <SelectItem value='all'>Todas las edades</SelectItem>
                  <SelectItem value='puppy'>Cachorro</SelectItem>
                  <SelectItem value='adult'>Adulto</SelectItem>
                  <SelectItem value='senior'>Senior</SelectItem>
                </SelectContent>
              </Select>

              <DialogPrimitive.Close onClick={handleSubmit} className='rounded-md px-5 py-2 bg-[--accent-100] text-[--bg-100] font-semibold hover:bg-[--accent-200] mt-5'>
                Guardar
              </DialogPrimitive.Close>
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductManagement
