import { Card } from '@/UI'
import React from 'react'
import FoodItem from './FoodItem'
import { Food } from '@/types'

type Props = {}

const dummyFoods: Food[] = [
  {
    id: '1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: '2',
    name: 'Schnitzel',
    description: 'A german speciality!',
    price: 16.5,
  },
]

const FoodList = (props: Props) => {
  return (
    <Card className="bg-white w-[700px] flex flex-col gap-2 mt-8">
      {dummyFoods.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
        />
      ))}
    </Card>
  )
}

export default FoodList
