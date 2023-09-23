'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const ModalValueContext = createContext<boolean>(false)
const ModalSetContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {},
)

const ModalValueContextProvider = (props: {
  children: ReactNode
  value: boolean
}) => {
  return (
    <ModalValueContext.Provider value={props.value}>
      {props.children}
    </ModalValueContext.Provider>
  )
}

const ModalSetContextProvider = (props: {
  children: ReactNode
  value: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <ModalSetContext.Provider value={props.value}>
      {props.children}
    </ModalSetContext.Provider>
  )
}

export const ModalContextProvider = (props: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <ModalSetContextProvider value={setModalIsOpen}>
      <ModalValueContextProvider value={modalIsOpen}>
        {props.children}
      </ModalValueContextProvider>
    </ModalSetContextProvider>
  )
}

export const useModalIsOpen = () => useContext(ModalValueContext)
export const useSetModalIsOpen = () => useContext(ModalSetContext)
