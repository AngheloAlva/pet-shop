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

export interface User {
  id: string
  name: string
  email: string
  lastName: string
  RUT: string
  address: {
    street: string
    number: number
    zipCode: number
    region: string
    comuna: string
    isApartament: boolean
    apartamentNumber: number
  }
  phone: string
  orders: Order[]
  cart: {
    products: Product[]
    quantity: number
  }
  lastProductsViewed: Product[]
}

export interface UserUpdate {
  id: string
  name: string
  lastName: string
  RUT: string
  address: {
    street: string
    number: number
    zipCode: number
    region: string
    comuna: string
    isApartament: boolean
    apartamentNumber: number
  }
  phone: string
}

export interface SimpleUser {
  id: string
  name: string
  email: string
}

export interface Order {
  id: string
  userId: string
  RUT: string
  products: {
    products: Product[]
    quantity: number
    price: number
  }
  total: number
  paymentMethod: string
  paymentStatus: string
  shippingMethod: string
  shippingStatus: string
  shippingAddress: {
    street: string
    number: number
    zipCode: number
    city: string
    region: string
    isApartament: boolean
    apartamentNumber: number
  }
}

export interface ItemCart {
  product: Product
  quantity: number
  optionSelectedIndex: number
  _id: string
}
