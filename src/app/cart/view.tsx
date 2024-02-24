'use client'

import { Box, Container, Count, Flex, TitlePage } from '@/components/atoms'
import { Footer, Header } from '@/components/molecules'
import Image from 'next/image'

const View = () => {
  return (
    <Box>
      <Header />
      <TitlePage title="Carrinho" />
      <main>
        <Box className="w-full center pt-8">
          <Container>
            <Flex>
              <Box className="flex-1 max-w-[50rem]">
                <Flex className="gap-5 font-bold">
                  <Box className="flex-1">
                    <p>Produto</p>
                  </Box>
                  <Box className="w-[130px] items-center">
                    <p>Preço</p>
                  </Box>
                  <Box className="w-[130px] items-center">
                    <p>Quantidade</p>
                  </Box>
                  <Box className="w-[130px] items-center">
                    <p>Total</p>
                  </Box>
                </Flex>
                <Flex className="gap-5 font-bold border-t border-gray pt-6 mt-7">
                  <Box className="flex-1">
                    <Flex className="items-center gap-4">
                      <Box className="w-[7.75rem] h-[7.125rem] overflow-hidden">
                        <Image
                          src="/camisa2.webp"
                          alt="camisa1"
                          width={124}
                          height={114}
                        />
                      </Box>
                      <p className="text-darkgray">Camisa branca</p>
                    </Flex>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <Box className="h-[40px]">
                      <Count />
                    </Box>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                </Flex>
                <Flex className="gap-5 font-bold border-t border-gray pt-6 mt-7">
                  <Box className="flex-1">
                    <Flex className="items-center gap-4">
                      <Box className="w-[7.75rem] h-[7.125rem] overflow-hidden">
                        <Image
                          src="/camisa2.webp"
                          alt="camisa1"
                          width={124}
                          height={114}
                        />
                      </Box>
                      <p className="text-darkgray">Camisa branca</p>
                    </Flex>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <Box className="h-[40px]">
                      <Count />
                    </Box>
                  </Box>
                  <Box className="w-[130px] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
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
