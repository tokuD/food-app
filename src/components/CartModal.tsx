'use client'
import { useCartSetContext, useCartValueContext } from '@/contexts/CartContext'
import React from 'react'
import CartItem from './CartItem'
import { CustomButton } from '@/UI'
import { useSetModalIsOpen } from '@/contexts/ModalContext'

type Props = {}

const CartModal = (props: Props) => {
  const cartCtx = useCartValueContext()
  const setCartCtx = useCartSetContext()
  const setModalIsOpen = useSetModalIsOpen()

  const orderHandler = () => {
    console.log(cartCtx)
    setCartCtx({ type: 'RESET' })
    setModalIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-2">
      {cartCtx.map((food) => (
        <CartItem
          food={food}
          key={food.id}
        />
      ))}
      <div className="flex justify-between font-bold text-xl">
        <h2 className="">Total Amount</h2>
        <p>
          $
          {cartCtx
            .map((food) => food.price * food.amount)
            .reduce((sum, now) => sum + now, 0).toFixed(2)}
        </p>
      </div>

      <div className="flex justify-end gap-4">
        <CustomButton
          onClick={() => setModalIsOpen(false)}
          className="py-1"
        >
          Close
        </CustomButton>
        <CustomButton
          onClick={orderHandler}
          className="py-1"
        >
          Order
        </CustomButton>
      </div>
    </div>
  )
}

export default CartModal
