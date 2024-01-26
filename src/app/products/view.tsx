'use client'

import { Box, Flex, Input, TitlePage } from '@/components/atoms'
import { CardProduct, Footer, Header } from '@/components/molecules'
import { IoSearchOutline } from 'react-icons/io5'

const View = () => {
  return (
    <Box>
      <Box className="mb-[5.6125rem]">
        <Header />
      </Box>
      <TitlePage title="Produtos" />
      <main>
        <Box className="w-full center pt-8">
          <Box className="w-full max-w-[81.25rem]">
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
          </Box>
        </Box>
      </main>
      <Footer
        contactsInfo={[
          {
            id: '1',
            address:
              'Lorem ipsum dollor asit amet Lorem ipsum dollor asit amet',
            tell: '(98) 989101258',
            email: 'rafaelsanto10s@gmail.com',
          },
          {
            id: '2',
            address:
              'Lorem ipsum dollor asit amet Lorem ipsum dollor asit amet',
            tell: '(98) 989101258',
            email: 'rafaelsanto10s@gmail.com',
          },
        ]}
      />
    </Box>
  )
}

export default View
