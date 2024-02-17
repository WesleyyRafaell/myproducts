'use client'
import { Box, Flex } from '@/components/atoms'
import { Footer, Header } from '@/components/molecules'
import Image from 'next/image'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const arrayImages = [
  { id: 1, url: '/camisa3.webp' },
  { id: 2, url: '/camisa2.webp' },
  { id: 3, url: '/camisa1.webp' },
]

const View = () => {
  const [selectedImage, setSelectedImage] = useState(arrayImages[0].url)

  const handleSelectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  return (
    <Box>
      <Header />
      <main>
        <Box className="w-full center pt-8">
          <Box className="w-full max-w-[81.25rem]">
            <Flex className="justify-between">
              <Box className="w-[50%]">
                <Flex className="justify-between items-start">
                  <Box className="gap-4">
                    {arrayImages?.map((item) => (
                      <Box
                        key={item.id}
                        className="w-[7.75rem] h-[7.125rem] overflow-hidden cursor-pointer"
                        onClick={() => handleSelectImage(item.url)}
                      >
                        <Image
                          src={item.url}
                          alt="camisa1"
                          width={124}
                          height={114}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Box className="flex-1 center">
                    <Box className="overflow-hidden cursor-pointer">
                      <Image
                        src={selectedImage}
                        alt="camisa1"
                        width={289}
                        height={389}
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Box className="w-[45%]">
                <h3 className="text-[2.8rem] text-primary font-bold mb-3">
                  Camisa preta
                </h3>
                <p className="text-[1.25rem] font-bold mb-3">R$ 125.99</p>
                <p>
                  Phasellus ut ante ipsum primis in leo nec tellus. Cras ut
                  nibh. Cras commodo magna, scelerisque pede id mauris mattis
                  id, bibendum leo, suscipit sed, congue vel , nisl.
                </p>
                <Flex className="pt-5 gap-5">
                  <Flex className="w-[8rem] px-3 justify-between border border-primary rounded-2xl items-center">
                    <FaMinus className="cursor-pointer" />
                    <p>1</p>
                    <FaPlus className="cursor-pointer" />
                  </Flex>
                  <button className="bg-secondary text-white px-[5.5625rem] py-3 rounded-2xl">
                    Adicionar ao carrinho
                  </button>
                </Flex>
                <Box className="pt-6">
                  <p className="text-gray">
                    Categorias:{' '}
                    <span className="text-purple"> Roupas, sapatos, geral</span>
                  </p>
                </Box>
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
