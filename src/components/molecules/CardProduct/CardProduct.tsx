import { Box, Flex } from '@/components/atoms'
import Image from 'next/image'

import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { ICardProduct } from '@/types/components/card-product'
import { formatCurrency } from '@/utils/formatters'

const CardProduct = ({ name, price }: ICardProduct) => {
  return (
    <Box>
      <Flex>
        <Box className="w-[15.625rem]">
          <Image src="/camisa.png" width={250} height={150} alt="camisa" />
          <Box className="pt-[.9375rem] pb-4 bg-[#F1E6D6] px-4">
            <h4 className="text-[1.2rem] font-bold">{name}</h4>
            <Flex className="pt-2 justify-between">
              <p className="text-secondary text-[1.25rem] font-bold">
                {formatCurrency(price)}
              </p>
              <Flex className="gap-3">
                <FaRegHeart className="text-[1.125rem]" />
                <FiShoppingCart className="text-[1.25rem]" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default CardProduct
