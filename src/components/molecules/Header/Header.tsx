import { Box, Flex } from '@/components/atoms'
import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'

const Header = () => {
  return (
    <Flex className="w-full h-[5.625rem] center">
      <Flex className="w-full max-w-[81.25rem] gap-[3.75rem]">
        <Image
          src="/logomyproducts.png"
          alt="logo protest"
          width={128}
          height={50}
        />
        <Flex className="items-center gap-[2.1875rem] flex-1">
          <p className="font-bold text-primary hover:text-primary">Home</p>
          <p className="font-bold hover:text-primary">Produtos</p>
          <p className="font-bold hover:text-primary">Favoritos</p>
        </Flex>
        <Flex className="gap-7 items-center">
          <Box className="relative">
            <FaRegHeart className="text-purple text-lg" />
            <Box className="absolute top-[-0.9563rem] right-[-1.1938rem] bg-secondary center rounded-full w-[1.25rem] h-[1.25rem]">
              <p className="text-white text-sm">0</p>
            </Box>
          </Box>
          <Box className="relative">
            <RiShoppingCartLine className="text-purple text-lg" />
            <Box className="absolute top-[-0.9563rem] right-[-1.1938rem] bg-secondary center rounded-full w-[1.25rem] h-[1.25rem]">
              <p className="text-white text-sm">0</p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
