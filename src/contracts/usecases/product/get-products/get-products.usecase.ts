/* eslint-disable no-useless-constructor */
import { IGetProductsResponse, IProductGateway } from '@/types/contracts/api'
import { IGetProductsDTO } from '@/types/contracts/usecases'

class GetProductsUseCase {
  constructor(private gateway: IProductGateway) {}

  async execute(
    dto: IGetProductsDTO,
    onSuccess: (response: IGetProductsResponse) => void,
  ): Promise<void> {
    try {
      const response = await this.gateway.getProducts(dto)
      onSuccess(response)
    } catch (err: unknown) {
      console.log(`error`, err)
    }
  }
}

export default GetProductsUseCase
