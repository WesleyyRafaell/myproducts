type ButtonProps = {
  children: string
  secondary?: boolean
}

const Button = ({ children, secondary }: ButtonProps) => {
  if (secondary) {
    return (
      <button className="text-[1.125rem] text-primary font-bold bg-salmon px-[4.375rem] py-[.625rem] rounded-[.9375rem]">
        {children}
      </button>
    )
  }

  return (
    <button className="bg-secondary text-white px-[5.5625rem] py-3 rounded-2xl">
      {children}
    </button>
  )
}

export default Button
