import {
  IGetProductsParams,
  IGetProductsResponse,
  IProductGateway,
} from '@/types/contracts/api'
import { getInstance } from './instance'

const ProductGateway: IProductGateway = {
  getProducts: async (
    params: IGetProductsParams,
  ): Promise<IGetProductsResponse> => {
    const instance = getInstance()
    const { data } = await instance.get(`categories?${params.filters}`)

    return data as IGetProductsResponse
  },
}

export default ProductGateway
