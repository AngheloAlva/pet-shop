import { useEffect, useState } from 'react'

import { getCategories } from '@/apiRequest/category'
import type { Category } from '@/interfaces/interfaces'

const useCategory = (): { categories: Category[], dogCategories: Category[], catCategories: Category[] } => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategoriesBrands = async (): Promise<void> => {
      const { categories } = await getCategories()
      setCategories(categories)
    }

    void fetchCategoriesBrands()
  }, [])

  const dogCategories = categories.filter((category) => category.petType.includes('dog'))
  const catCategories = categories.filter((category) => category.petType.includes('cat'))

  return { categories, dogCategories, catCategories }
}

export default useCategory
