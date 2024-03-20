/* eslint-disable no-useless-constructor */
import {
  ICategoryGateway,
  IGetAllCategoriesResponse,
} from '@/types/contracts/api'

class GetAllCategoriesUseCase {
  constructor(private gateway: ICategoryGateway) {}

  async execute(
    onSuccess: (response: IGetAllCategoriesResponse) => void,
  ): Promise<void> {
    try {
      const response = await this.gateway.getAllCategories()
      onSuccess(response)
    } catch (err: unknown) {
      console.log(`error`, err)
    }
  }
}

export default GetAllCategoriesUseCase
