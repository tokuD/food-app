import { CustomButton } from '@/UI'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="bg-rose-900 text-white flex justify-between items-center py-4 px-8 shadow shadow-black">
      <h1 className="text-3xl">ReactMeals</h1>
      <CustomButton className="flex items-center gap-2">
        <BsFillCartFill />
        <span>Your Cart</span>
        <small className="bg-rose-900 rounded-lg px-3 text-sm">{2}</small>
      </CustomButton>
    </nav>
  )
}

export default Navbar
