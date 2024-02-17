'use client'

import { Box, Container, Flex, Input, TitlePage } from '@/components/atoms'
import { CardProduct, Footer, Header } from '@/components/molecules'
import { IoSearchOutline } from 'react-icons/io5'

const View = () => {
  return (
    <Box>
      <Header />
      <TitlePage title="Produtos" />
      <main>
        <Box className="w-full center pt-8">
          <Container>
            <Flex>
              <Box className="w-[30%] gap-2 pt-[8.9812rem] items-start">
                <p className="text-[1.375rem] font-semibold cursor-pointer text-primary">
                  Camisas
                </p>
                <p className="text-[1.375rem] font-semibold cursor-pointer">
                  Camisas
                </p>
                <p className="text-[1.375rem] font-semibold cursor-pointer text-primary">
                  Camisas
                </p>
                <p className="text-[1.375rem] font-semibold cursor-pointer">
                  Camisas
                </p>
              </Box>
              <Box className="w-[70%]">
                <Box className="py-8 w-[21.4375rem]">
                  <Input placeholder="teste" icon={IoSearchOutline} />
                </Box>
                <Flex className="gap-4 justify-between flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <CardProduct key={item} />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  )
}

export default View
