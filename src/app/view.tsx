'use client'

import { Box, Button, Flex } from '@/components/atoms'
import {
  Header,
  BannerSlider,
  Footer,
  CardProduct,
} from '@/components/molecules'

const View = () => {
  return (
    <Box>
      <Box className="mb-[5.6125rem]">
        <Header />
      </Box>
      <BannerSlider />
      <main>
        {[1, 2].map((item) => (
          <Box key={item} className="w-full center pt-8">
            <Box className="w-full max-w-[81.25rem]">
              <h3 className="text-[2rem] text-purple font-bold">Camisas</h3>
              <Flex className="justify-center gap-10">
                {[1, 2, 3, 4].map((item) => (
                  <CardProduct key={item} />
                ))}
              </Flex>
              <Box className="center">
                <Button>Ver todos</Button>
              </Box>
            </Box>
          </Box>
        ))}
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
