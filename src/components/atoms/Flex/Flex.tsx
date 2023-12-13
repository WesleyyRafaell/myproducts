import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const Flex = ({ children, className, ...rest }: ComponentProps<'div'>) => {
  return (
    <div
      {...rest}
      data-testid="flex-element"
      className={twMerge('flex', className)}
    >
      {children}
    </div>
  )
}

export default Flex
