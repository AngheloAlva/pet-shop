export interface Product {
  _id: string
  category: string
  petType: string
  name: string
  miniDescription: string
  description: Description[]
  image: string[]
  weightOptions: Array<{ weight: string, price: number }>
  stock: number
  brand: Brand
  discount: number
  lifeStage: string
}

interface Description {
  title: string
  description: string
  _id: string
}

interface Brand {
  _id: string
  name: string
  image: string
}

export interface NavMenuItemProps {
  navMenuTitle: string
  itemsArray: Array<{
    title: string
    href: string
    description: string[]
  }>
}

export interface CarouselProps {
  images: Array<{
    src: string
    href: string
  }>
}
