'use client'

import { Box, Flex } from '@/components/atoms'
import { Header, BannerSlider } from '@/components/molecules'

const View = () => {
  return (
    <Box>
      <Header />
      <BannerSlider />
      <main>
        <Box className="w-full h-[5.625rem] center">
          <Box className="w-full max-w-[81.25rem]">
            <h3 className="text-[2rem] text-purple font-bold">Camisas</h3>
            <Box>
              <Flex></Flex>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  )
}

export default View
