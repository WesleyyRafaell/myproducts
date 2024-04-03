export interface IGetProductsParams {
  filters: string
}

export interface IGetProductsResponseData {
  id: number
  attributes: {
    title: string
    description: string
    price: string
    in_stock: true
    createdAt: string
    updatedAt: string
    publishedAt: string
    title_url: string
  }
}

export interface IGetProductsResponse {
  data: IGetProductsResponseData[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface IProductGateway {
  getProducts(filters: IGetProductsParams): Promise<IGetProductsResponse>
}
