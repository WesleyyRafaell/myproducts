import GetProductsUseCase from './usecases/product/get-products/get-products.usecase'
import ProductGateway from './api/product'

const ProductContract = {
  getProducts: new GetProductsUseCase(ProductGateway),
}

export default ProductContract
