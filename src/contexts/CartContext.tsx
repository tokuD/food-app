'use client'
import { DUMMY_MEALS } from '@/constants'
import { CartProps, FoodProps } from '@/types'
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react'

const initCart: CartProps = DUMMY_MEALS.map((food) => {
  return { ...food, amount: 0 }
})

const CartValueContext = createContext<CartProps>(initCart)
const CartSetContext = createContext<Dispatch<ActionProps>>(() => {})

type ActionProps =
  | {
      type: 'ADD' | 'REMOVE'
      payload: FoodProps
    }
  | {
      type: 'RESET'
    }

const cartCtxReducer = (state: CartProps, action: ActionProps) => {
  switch (action.type) {
    case 'ADD':
      return state.map((food) =>
        food.id === action.payload.id
          ? { ...food, amount: food.amount + 1 }
          : food,
      )
    case 'REMOVE':
      return state.map((food) =>
        food.id === action.payload.id
          ? { ...food, amount: Math.max(food.amount - 1, 0) }
          : food,
      )
    case 'RESET':
      return initCart
  }
}

const CartValueContextProvider = (props: {
  children: ReactNode
  value: CartProps
}) => {
  const { children, value } = props
  return (
    <CartValueContext.Provider value={value}>
      {children}
    </CartValueContext.Provider>
  )
}

const CartSetContextProvider = (props: {
  children: ReactNode
  value: Dispatch<ActionProps>
}) => {
  const { children, value } = props
  return (
    <CartSetContext.Provider value={value}>{children}</CartSetContext.Provider>
  )
}

export const CartContextProvider = (props: { children: ReactNode }) => {
  const [cartCtx, cartCtxDispatch] = useReducer(cartCtxReducer, initCart)
  return (
    <CartValueContextProvider value={cartCtx}>
      <CartSetContextProvider value={cartCtxDispatch}>
        {props.children}
      </CartSetContextProvider>
    </CartValueContextProvider>
  )
}

export const useCartValueContext = () => useContext(CartValueContext)

export const useCartSetContext = () => useContext(CartSetContext)
