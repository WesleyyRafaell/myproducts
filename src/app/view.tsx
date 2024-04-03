'use client'

import { Box, Button, Container, Flex } from '@/components/atoms'
import {
  Header,
  BannerSlider,
  Footer,
  CardProduct,
} from '@/components/molecules'
import { Home } from '@/types/pages/home'
import { TfiFaceSad } from 'react-icons/tfi'

const View = ({ data }: Home) => {
  return (
    <Box>
      <Header />
      <BannerSlider />
      <main>
        <Box className="w-full center pt-8">
          <Container>
            {data?.map((item) => (
              <Box key={item.id}>
                <h3 className="text-[2rem] text-purple font-bold">
                  {item.title}
                </h3>
                <Flex className="justify-between gap-10 flex-wrap pt-9 pb-10">
                  {item.products?.map((itemProduct, index) => {
                    if (index > 3) return ''
                    return (
                      <CardProduct
                        key={itemProduct.id}
                        name={itemProduct.title}
                        price={itemProduct.price}
                      />
                    )
                  })}
                </Flex>
                <Box className="center">
                  <Button secondary>Ver todos</Button>
                </Box>
              </Box>
            ))}
          </Container>
          {!data?.length && (
            <Flex className="h-[400px] items-center gap-3 ">
              <TfiFaceSad className="text-[1.5rem] mt-1 text-purple font-bold" />
              <h3 className="text-[1.5rem] text-purple font-bold">
                Nenhum produto ainda, volte mais tarde.
              </h3>
            </Flex>
          )}
        </Box>
      </main>
      <Footer />
    </Box>
  )
}

export default View
