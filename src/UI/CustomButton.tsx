import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
}

const CustomButton = (props: Props) => {
  const { children, className } = props
  return (
    <button
      className={twMerge(
        'bg-rose-950 text-white py-3 px-6 rounded-full hover:scale-105 duration-200',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default CustomButton
