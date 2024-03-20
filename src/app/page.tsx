import { ICategoryEntity, IServerSideBaseProps } from '@/types/commom'
import CategoryGateway from '@/contracts/api/category'
import Controller from './controller'
import ProductContract from '@/contracts/product'

export default async function Home() {
  const paginationProps = {
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0,
  }
  const props: IServerSideBaseProps<ICategoryEntity> = {
    data: [],
    meta: {
      pagination: paginationProps,
    },
  }

  try {
    ProductContract.getProducts.execute({ filters: '' }, (response) => {})
    const { data, meta } = await CategoryGateway.getAllCategories({
      filters: 'filters[isHome][$eq]=true',
    })

    props.data = data
    props.meta = meta
  } catch (error) {
    props.data = []
    props.meta = {
      pagination: paginationProps,
    }
  }

  return <Controller {...props} />
}
