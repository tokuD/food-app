interface FoodProps {
  id: string
  name: string
  description: string
  price: number
}

type CartProps = ({ amount: number } & FoodProps)[]

export type { FoodProps, CartProps }
