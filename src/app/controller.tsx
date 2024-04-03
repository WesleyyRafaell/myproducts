'use client'
import { formatStrapiResponse } from '@/utils/formatters'
import View from './view'
import { ICategoryEntity, IServerSideBaseProps } from '@/types/commom'
import { useEffect, useState } from 'react'
import { ICategoriesAndProductsHome } from '@/types/pages/home'

export default function Controller({
  data,
  meta,
}: IServerSideBaseProps<ICategoryEntity>) {
  const [productsToShowInHome, setProductsToShowInHome] =
    useState<ICategoriesAndProductsHome[]>()
  const categoriesAndProductsFormatted = formatStrapiResponse(data)

  useEffect(() => {
    const onlyProductsInStock = categoriesAndProductsFormatted.map(
      (item: ICategoriesAndProductsHome) => {
        const filteredItems = item.products.filter(
          (itemProduct) => itemProduct.in_stock,
        )
        return {
          ...item,
          products: filteredItems,
        }
      },
    )

    setProductsToShowInHome(onlyProductsInStock)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <View data={productsToShowInHome} />
}
