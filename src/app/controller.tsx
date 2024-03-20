import View from './view'
import { ICategoryEntity, IServerSideBaseProps } from '@/types/commom'

export default function Controller({
  data,
  meta,
}: IServerSideBaseProps<ICategoryEntity>) {
  return <View />
}
