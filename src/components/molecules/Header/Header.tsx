import { Flex } from '@/components/atoms'
import Image from 'next/image'

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
        <Flex className="items-center gap-[2.1875rem]">
          <p className="font-bold text-primary hover:text-primary">Home</p>
          <p className="font-bold hover:text-primary">Produtos</p>
          <p className="font-bold hover:text-primary">Favoritos</p>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
