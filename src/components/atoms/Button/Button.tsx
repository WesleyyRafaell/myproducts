type ButtonProps = {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-[1.125rem] text-primary font-bold bg-salmon px-[4.375rem] py-[.625rem] rounded-[.9375rem]">
      {children}
    </button>
  )
}

export default Button
