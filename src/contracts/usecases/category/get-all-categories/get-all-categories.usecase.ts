/* eslint-disable no-useless-constructor */
import {
  ICategoryGateway,
  IGetAllCategoriesResponse,
} from '@/types/contracts/api'
import { IGetAllCategoriesDTO } from '@/types/contracts/usecases/category'

class GetAllCategoriesUseCase {
  constructor(private gateway: ICategoryGateway) {}

  async execute(
    dto: IGetAllCategoriesDTO,
    onSuccess: (response: IGetAllCategoriesResponse) => void,
  ): Promise<void> {
    try {
      const response = await this.gateway.getAllCategories(dto)
      onSuccess(response)
    } catch (err: unknown) {
      console.log(`error`, err)
    }
  }
}

export default GetAllCategoriesUseCase
