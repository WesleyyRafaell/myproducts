import { ICategoryEntity, IServerSideBaseProps } from '@/types/commom'
import CategoryGateway from '@/contracts/api/category'
import Controller from './controller'

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
    const { data, meta } = await CategoryGateway.getAllCategories()

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
