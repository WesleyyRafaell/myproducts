import View from './view'
import { ICategoryEntity, IServerSideBaseProps } from '@/types/commom'

export default function Controller({
  data,
  meta,
}: IServerSideBaseProps<ICategoryEntity>) {
  console.log(`data`, data)
  console.log(`meta`, meta)
  return <View />
}
