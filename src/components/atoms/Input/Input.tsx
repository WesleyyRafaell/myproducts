'use client'

import { ComponentProps, ElementType, useId } from 'react'

export interface IInput extends Omit<ComponentProps<'input'>, 'disabled'> {
  icon?: ElementType
  isDisabled?: boolean
}

const Input = ({
  name = '',
  placeholder = '',
  isDisabled = false,
  maxLength = 200,
  icon: Icon,
  onChange,
  ...rest
}: IInput) => {
  const inputId = useId()

  return (
    <div className="flex justify-start items-center border border-gray p-3 rounded-3xl h-full w-full">
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
