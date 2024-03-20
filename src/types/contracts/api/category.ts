/* eslint-disable no-use-before-define */
export interface ICategoryGateway {
  getAllCategories(): Promise<IGetAllCategoriesResponse>
}

export interface IGetAllCategoriesResponse {
  data: [
    {
      id: number
      attributes: {
        title: string
        isHome: boolean
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
