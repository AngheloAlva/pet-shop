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
import type { Brand, Category, Description } from '@/interfaces/interfaces'
import { fi } from 'date-fns/locale'

const ProductManagement = (): JSX.Element => {
  const [currentDescription, setCurrentDescription] = React.useState<Description>({ title: '', description: '' })
  const [categories, setCategories] = React.useState<Category[]>([])
  const [brands, setBrands] = React.useState<Brand[]>([])
  const [formData, setFormData] = React.useState({
    name: '',
    category: '',
    brand: '',
    miniDescription: '',
    descriptions: [{ title: '', description: '' }],
    stock: '',
    lifeStage: ''
  })

  React.useEffect(() => {
    void getCategories()
      .then((res) => { setCategories(res) })
    void getBrands()
      .then((res) => { setBrands(res) })
  }, [])

  const handleFieldChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const product = {
      name: formData.name,
      category: formData.category,
      brand: formData.brand,
      miniDescription: formData.miniDescription,
      descriptions: formData.descriptions,
      stock: formData.stock,
      lifeStage: formData.lifeStage
    }

    // void createProduct(product)
    console.log(product)

    // setFormData({ ...formData, name: '', category: '', brand: '', miniDescription: '', descriptions: [{ title: '', description: '' }], stock: '', lifeStage: '' })
  }

  const handleDescriptionChange = (field?: string, value?: string) => {
    if ((field != null) && (value != null)) {
      const updatedDescription = { ...currentDescription, [field]: value }
      setCurrentDescription(updatedDescription)
    }
  }

  const handleAddDescription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormData({ ...formData, descriptions: [...formData.descriptions, currentDescription] })
    setCurrentDescription({ title: '', description: '' })
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
              <Select onValueChange={(e) => { handleFieldChange('category', e.target.value) }}>
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
              <Select onValueChange={(e) => { handleFieldChange('brand', e.target.value) }}>
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
                  className='mb-2'
                  onChange={(e) => { handleDescriptionChange() }}
                />

                <Label htmlFor='description'>Descripción</Label>
                <Textarea
                  id='description'
                  placeholder='Descripción'
                  value={currentDescription.description}
                  className='max-h-20'
                  onChange={(e) => { handleDescriptionChange() }}
                />

                <p className='text-xs mt-1'>* Agrega las descripciones necesarias, al agregar una se limpiaran los campos y podras agregar la siguiente seccion</p>
                <button onClick={handleAddDescription} className='border-2 bg-[--bg-300] text-[--text-100] px-2 py-1 my-2 rounded-lg'>
                  Añadir descripción
                </button>
              </div>
              <Label htmlFor='stock'>Stock</Label>
              <Input id='stock' type='number' placeholder='Stock del producto' className='w-full mb-3' />
              <Label htmlFor='lifeStage'>Etapa de vida</Label>
              <Select onValueChange={(e) => { handleFieldChange('lifeStage', e.target.value) }}>
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
