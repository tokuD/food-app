import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton = (props: Props) => {
  const { children, className, onClick } = props
  return (
    <button
      className={twMerge(
        `bg-rose-950 text-white py-3 px-6
        rounded-full hover:scale-105 duration-200
        active:scale-100 hover:bg-rose-900
        `,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
