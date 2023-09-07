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
  brand: string
  discount: number
  lifeStage: string
}

interface Description {
  title: string
  description: string
  _id: string
}

export interface NavMenuItemProps {
  navMenuTitle: string
  itemsArray: Array<{
    title: string
    description: string[]
  }>
}

export interface CarouselProps {
  images: Array<{
    src: string
    href: string
  }>
}
