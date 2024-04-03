export interface ICategoriesAndProductsHome {
  id: number
  title: string
  isHome: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  title_url: string
  products: {
    id: number
    title: string
    description: string
    price: string
    in_stock: true
    createdAt: string
    updatedAt: string
    publishedAt: string
    title_url: string
  }[]
}

export interface Home {
  data?: ICategoriesAndProductsHome[]
}
