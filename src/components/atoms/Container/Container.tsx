import React from 'react'
import { Box } from '@/components/atoms'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <Box className="w-full max-w-[75rem]">{children}</Box>
}

export default Container
