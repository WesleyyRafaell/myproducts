import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const Box = ({ children, className, ...rest }: ComponentProps<'div'>) => {
  return (
    <div
      {...rest}
      data-testid="box-element"
      className={twMerge('flex flex-col', className)}
    >
      {children}
    </div>
  )
}

export default Box
