'use client'
import React from 'react'
import type { FoodProps } from '@/types'
import { CustomButton } from '@/UI'
import { useCartSetContext } from '@/contexts/CartContext'

type Props = {
  food: FoodProps & { amount: number }
}

const FoodItem = (props: Props) => {
  const { food } = props
  const dispatchCartCtx = useCartSetContext()
  return (
    <div className="pb-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">{food.name}</h3>
          <p className="text-sm italic">{food.description}</p>
          <p className="text-orange-800 font-bold">${food.price}</p>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <div className="flex justify-end gap-4">
            <span>Amount</span>
            <span className="text-center px-4 border rounded-lg">
              {food.amount}
            </span>
          </div>
          <CustomButton
            onClick={() => dispatchCartCtx({ type: 'ADD', payload: food })}
            className="py-1"
          >
            +Add
          </CustomButton>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default FoodItem
