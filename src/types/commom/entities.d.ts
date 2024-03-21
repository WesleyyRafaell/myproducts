export interface IProductEntity {
  id: number
  attributes: {
    title: string
    description: string
    price: number
    in_stock: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    title_url: string
  }
}

export interface ICategoryEntity {
  id: number
  attributes: {
    title: string
    isHome: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    title_url: string
    products: {
      data: IProductEntity[]
    }
  }
}
