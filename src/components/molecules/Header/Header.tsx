import { Box, Flex } from '@/components/atoms'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaRegHeart } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/products' },
  { name: 'Favoritos', href: '/favorites' },
]

const Header = () => {
  const pathname = usePathname()

  return (
    <Box className="mb-[5.6125rem]">
      <Flex className="w-full h-[5.625rem] center fixed top-0 left-0 z-50 bg-white">
        <Flex className="w-full max-w-[81.25rem] gap-[3.75rem]">
          <Image
            src="/logomyproducts.png"
            alt="logo protest"
            width={128}
            height={50}
          />
          <Flex className="items-center gap-[2.1875rem] flex-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link key={item.name} href={item.href}>
                  <p
                    className={`font-bold ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`}
                  >
                    {item.name}
                  </p>
                </Link>
              )
            })}
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
    </Box>
  )
}

export default Header
