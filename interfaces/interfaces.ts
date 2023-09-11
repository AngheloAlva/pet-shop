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
  brand: ProductBrand
  discount: number
  lifeStage: string
}

interface Description {
  title: string
  description: string
  _id: string
}

interface ProductBrand {
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

export interface ProductSlideProps {
  slideTitle: string
  products: Product[]
}

export interface Brand {
  _id: string
  name: string
  image: string
}
