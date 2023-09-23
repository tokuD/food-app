'use client'
import { CustomButton } from '@/UI'
import { useCartValueContext } from '@/contexts/CartContext'
import { useSetModalIsOpen } from '@/contexts/ModalContext'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

type Props = {}

const Navbar = (props: Props) => {
  const cartCtx = useCartValueContext()
  const setModalIsOpen = useSetModalIsOpen()

  return (
    <nav className="bg-rose-900 text-white  py-4 px-8 shadow shadow-black">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <h1 className="text-3xl">ReactMeals</h1>
        <CustomButton
          onClick={() => setModalIsOpen(true)}
          className="flex items-center gap-2 hover:bg-rose-600"
        >
          <BsFillCartFill />
          <span>Your Cart</span>
          <small className="bg-rose-900 rounded-lg px-3 text-sm">
            {cartCtx
              .map((food) => food.amount)
              .reduce((sum, now) => sum + now, 0)}
          </small>
        </CustomButton>
      </div>
    </nav>
  )
}

export default Navbar
