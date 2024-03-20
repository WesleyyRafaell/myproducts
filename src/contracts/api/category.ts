import {
  ICategoryGateway,
  IGetAllCategoriesResponse,
} from '@/types/contracts/api'
import { getInstance } from './instance'

const CategoryGateway: ICategoryGateway = {
  getAllCategories: async (): Promise<IGetAllCategoriesResponse> => {
    const instance = getInstance()
    const { data } = await instance.get('categories')

    return data as IGetAllCategoriesResponse
  },
}

export default CategoryGateway
