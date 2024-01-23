'use client'

import { Box, Flex } from '@/components/atoms'
import { Header, BannerSlider } from '@/components/molecules'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'

const View = () => {
  return (
    <Box>
      <Header />
      <BannerSlider />
      <main>
        {[1, 2].map((item) => (
          <Box key={item} className="w-full center pt-8">
            <Box className="w-full max-w-[81.25rem]">
              <h3 className="text-[2rem] text-purple font-bold">Camisas</h3>
              <Flex className="justify-center gap-10">
                {[1, 2, 3, 4].map((item) => (
                  <Box key={item} className="pt-9 pb-10">
                    <Flex>
                      <Box className="w-[15.625rem]">
                        <Image
                          src="/camisa.png"
                          width={250}
                          height={150}
                          alt="camisa"
                        />
                        <Box className="pt-[.9375rem] pb-4 bg-[#F1E6D6] px-4">
                          <h4 className="text-[1.2rem] font-bold">
                            Camisa preta tal marca
                          </h4>
                          <Flex className="pt-2 justify-between">
                            <p className="text-secondary text-[1.25rem] font-bold">
                              R$ 45.50{' '}
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
                ))}
              </Flex>
              <Box className="center">
                <button className="text-[1.125rem] text-[#F2654A] font-bold bg-[#F3D8BB] px-[4.375rem] py-[.625rem] rounded-[.9375rem]">
                  Ver todos
                </button>
              </Box>
            </Box>
          </Box>
        ))}
      </main>
    </Box>
  )
}

export default View
