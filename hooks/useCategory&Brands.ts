import { useEffect, useState } from 'react'

import { getCategories } from '@/api/category'
import type { Brand, Category } from '@/interfaces/interfaces'
import { getBrands } from '@/api/brand'

const useCategoryBrands = (): { categories: Category[], brands: Brand[], dogCategories: Category[], catCategories: Category[] } => {
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const fetchCategoriesBrands = async (): Promise<void> => {
      const { categories } = await getCategories()
      const { brands } = await getBrands()
      setCategories(categories)
      setBrands(brands)
    }

    void fetchCategoriesBrands()
  }, [])

  const dogCategories = categories.filter((category) => category.petType.includes('dog'))
  const catCategories = categories.filter((category) => category.petType.includes('cat'))

  return { categories, brands, dogCategories, catCategories }
}

export default useCategoryBrands
