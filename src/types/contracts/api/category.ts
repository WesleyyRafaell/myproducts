import { IGetProductsResponseData } from '.'

/* eslint-disable no-use-before-define */
export interface ICategoryGateway {
  getAllCategories(
    filters: IGetAllCategoriesParams,
  ): Promise<IGetAllCategoriesResponse>
}

export interface IGetAllCategoriesParams {
  filters: string
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
        products: {
          data: IGetProductsResponseData[]
        }
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
