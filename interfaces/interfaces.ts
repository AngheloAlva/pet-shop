export interface Product {
  _id: string
  category: string
  petType: string
  name: string
  miniDescription: string
  description: string[]
  image: string
  weightOptions: Array<{ weight: number, price: number }>
  stock: number
  brand: string
  discount: number
  lifeStage: string
}
