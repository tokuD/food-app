import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Card = (props: Props) => {
  const { children, className, onClick } = props
  return (
    <div
      onClick={onClick}
      className={twMerge('rounded-xl p-6 shadow shadow-black', className)}
    >
      {children}
    </div>
  )
}

export default Card
