export interface Product {
  _id: string
  name: string
  petType: string[]
  miniDescription: string
  description: Description[]
  image: string[]
  options: ProductOption[]
  brand: Brand
  lifeStage: string[]
  category: Category
}

export interface Description {
  title: string
  description: string
}

interface ProductOption {
  option: string
  price: number | string
  stock: number | string
  discount: number | string
}

export interface NavMenuItemProps {
  navMenuTitle: string
  itemsArray: Category[]
  petType?: string
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
  userId: string
  href: string
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
  role: string
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
    isApartment: boolean
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
  _id: string
  userId: string
  products: Array<{
    price_data: {
      currency: string
      product_data: {
        name: string
        description: string
      }
      unit_amount: number
    }
    quantity: number
    _id: string
  }>
  total: number
  shippingMethod: string
  shippingAddress: {
    street: string
    number: number
    zipCode: number
    city: string
    region: string
    isApartament: boolean
    apartamentNumber: number
  }
  paid: boolean
  createdAt: Date
}

export interface ItemCart {
  product: Product
  quantity: number
  optionSelectedIndex: number
  _id: string
}

export interface Category {
  _id: string
  name: string
  description: string
  image: string
  petType: string[]
}

export interface Filter {
  category?: string
  brand?: string
  petType?: string
  lifeStage?: string
  brandLimit?: number
  productLimit?: number
  productFrom?: number
}
