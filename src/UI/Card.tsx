import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
}

const Card = (props: Props) => {
  const { children, className } = props
  return (
    <div className={twMerge('rounded-xl p-6 shadow shadow-black', className)}>
      {children}
    </div>
  )
}

export default Card
