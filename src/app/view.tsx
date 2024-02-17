'use client'

import { Box, Button, Container, Flex } from '@/components/atoms'
import {
  Header,
  BannerSlider,
  Footer,
  CardProduct,
} from '@/components/molecules'

const View = () => {
  return (
    <Box>
      <Header />
      <BannerSlider />
      <main>
        <Box className="w-full center pt-8">
          <Container>
            {[1, 2].map((item) => (
              <Box key={item}>
                <h3 className="text-[2rem] text-purple font-bold">Camisas</h3>
                <Flex className="justify-center gap-10">
                  {[1, 2, 3, 4].map((item) => (
                    <CardProduct key={item} />
                  ))}
                </Flex>
                <Box className="center">
                  <Button secondary>Ver todos</Button>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  )
}

export default View
