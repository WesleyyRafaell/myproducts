import { Flex } from '@/components/atoms'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const Count = () => {
  const [total, setTotal] = useState(1)

  const handleTotal = (typeCount: 'minus' | 'plus') => {
    if (typeCount === 'minus') {
      if (total <= 1) return

      setTotal((total) => total - 1)
      return
    }

    setTotal((total) => total + 1)
  }

  return (
    <Flex className="w-[8rem] h-full px-3 justify-between border border-primary rounded-2xl items-center">
      <button
        disabled={total <= 1}
        onClick={() => handleTotal('minus')}
        className="disabled:text-gray"
      >
        <FaMinus className="cursor-pointer " />
      </button>
      <p>{total}</p>
      <button onClick={() => handleTotal('plus')}>
        <FaPlus className="cursor-pointer" />
      </button>
    </Flex>
  )
}

export default Count
