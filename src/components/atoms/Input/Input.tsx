'use client'

import { ComponentProps, ElementType, useId } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IInput extends Omit<ComponentProps<'input'>, 'disabled'> {
  icon?: ElementType
  isDisabled?: boolean
  className?: string
}

const Input = ({
  name = '',
  placeholder = '',
  isDisabled = false,
  maxLength = 200,
  icon: Icon,
  className,
  onChange,
  ...rest
}: IInput) => {
  const inputId = useId()

  return (
    <div
      className={twMerge(
        'flex justify-start items-center border border-gray p-3 rounded-3xl h-full w-full',
        className,
      )}
    >
      {Icon && <Icon />}

      <input
        {...rest}
        id={inputId}
        disabled={isDisabled}
        maxLength={maxLength}
        placeholder={placeholder}
        className="bg-transparent outline-none ml-2 h-full w-full"
      />
    </div>
  )
}

export default Input
