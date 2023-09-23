'use client'
import { Card } from '@/UI'
import React from 'react'
import FoodItem from './FoodItem'
import { DUMMY_MEALS } from '@/constants'
import { useCartValueContext } from '@/contexts/CartContext'

type Props = {}

const FoodList = (props: Props) => {
  const cartCtx = useCartValueContext()
  return (
    <Card className="bg-white w-[700px] flex flex-col gap-2 mt-8">
      {cartCtx.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
        />
      ))}
    </Card>
  )
}

export default FoodList
