import { CustomButton } from '@/UI'
import { useCartSetContext } from '@/contexts/CartContext'
import { FoodProps } from '@/types'
import React from 'react'

type Props = {
  food: FoodProps & { amount: number }
}

const CartItem = (props: Props) => {
  const { food } = props
  const dispatchCartCtx = useCartSetContext()
  return (
    <div className="flex flex-col gap-2 mb-2">
      <div className="flex justify-between w-[600px]">
        <div className="flex justify-between items-end w-[200px]">
          <div>
            <h3>{food.name}</h3>
            <p>{food.price}</p>
          </div>
          <div>
            <p className="border rounded-md px-2">&times; {food.amount}</p>
          </div>
        </div>

        <div className="flex gap-2 items-end">
          <CustomButton
            onClick={() => dispatchCartCtx({ type: 'REMOVE', payload: food })}
            className="py-1 rounded-lg text-xl h-fit"
          >
            -
          </CustomButton>
          <CustomButton
            onClick={() => dispatchCartCtx({ type: 'ADD', payload: food })}
            className="py-1 rounded-lg text-xl h-fit"
          >
            +
          </CustomButton>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default CartItem
