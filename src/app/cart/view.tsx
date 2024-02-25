'use client'

import {
  Box,
  Button,
  Container,
  Count,
  Flex,
  Input,
  TitlePage,
} from '@/components/atoms'
import { Footer, Header } from '@/components/molecules'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'

const View = () => {
  return (
    <Box>
      <Header />
      <TitlePage title="Carrinho" />
      <main>
        <Box className="w-full center pt-8">
          <Container>
            <Flex className="justify-between">
              <Box className="flex-1 max-w-[50rem]">
                <Flex className="gap-5 font-bold">
                  <Box className="flex-1">
                    <p>Produto</p>
                  </Box>
                  <Box className="w-[8.125rem] items-center">
                    <p>Preço</p>
                  </Box>
                  <Box className="w-[8.125rem] items-center">
                    <p>Quantidade</p>
                  </Box>
                  <Box className="w-[8.125rem] items-center">
                    <p>Total</p>
                  </Box>
                  <Box className="w-[1.875rem]"></Box>
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
                  <Box className="w-[8.125rem] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[8.125rem] justify-center items-center">
                    <Box className="h-[40px]">
                      <Count />
                    </Box>
                  </Box>
                  <Box className="w-[8.125rem] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[1.875rem] justify-center items-center">
                    <IoMdClose className="text-darkgray text-[1.25rem]" />
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
                  <Box className="w-[8.125rem] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[8.125rem] justify-center items-center">
                    <Box className="h-[40px]">
                      <Count />
                    </Box>
                  </Box>
                  <Box className="w-[8.125rem] justify-center items-center">
                    <p className="text-darkgray">R$ 66.05</p>
                  </Box>
                  <Box className="w-[1.875rem] justify-center items-center">
                    <IoMdClose className="text-darkgray text-[1.25rem]" />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Box className="w-[23.375rem] bg-salmon rounded-[.375rem] overflow-hidden">
                  <Box className="p-[1.5rem]">
                    <h3 className="font-bold text-[1.2rem]">
                      Resumo do pedido
                    </h3>
                    <Box className="pt-7 gap-4">
                      <Input
                        className="bg-white border-0 rounded-2xl"
                        placeholder="Nome"
                      />
                      <Input
                        className="bg-white border-0 rounded-2xl"
                        placeholder="Email"
                      />
                      <Input
                        className="bg-white border-0 rounded-2xl"
                        placeholder="Telefone"
                      />
                    </Box>
                  </Box>
                  <Flex className="bg-[#E5CBAF] p-[1.5625rem] justify-between">
                    <p className="text-[1.25rem]">Total</p>
                    <p className="text-[1.25rem]">R$ 518.65</p>
                  </Flex>
                </Box>
                <Box className="mt-5">
                  <Button>Realizar cotação</Button>
                </Box>
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
