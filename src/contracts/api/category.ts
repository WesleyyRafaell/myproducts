import {
  ICategoryGateway,
  IGetAllCategoriesParams,
  IGetAllCategoriesResponse,
} from '@/types/contracts/api'
import { getInstance } from './instance'

const CategoryGateway: ICategoryGateway = {
  getAllCategories: async (
    params: IGetAllCategoriesParams,
  ): Promise<IGetAllCategoriesResponse> => {
    const instance = getInstance()
    const { data } = await instance.get(`categories?${params.filters}`)

    return data as IGetAllCategoriesResponse
  },
}

export default CategoryGateway
