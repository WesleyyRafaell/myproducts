export interface IGetProductsParams {
  filters: string
}

export interface IGetProductsResponse {
  data: [
    {
      id: number
      attributes: {
        title: string
        description: string
        price: number
        in_stock: true
        createdAt: string
        updatedAt: string
        publishedAt: string
        title_url: string
      }
    },
  ]
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
