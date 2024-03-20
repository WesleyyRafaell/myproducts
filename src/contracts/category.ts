import GetAllCategoriesUseCase from './usecases/category/get-all-categories/get-all-categories.usecase'
import CategoryGateway from './api/category'

const CategoryContract = {
  getAllCategories: new GetAllCategoriesUseCase(CategoryGateway),
}

export default CategoryContract
