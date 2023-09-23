import { ModalContainer } from '@/UI'
import { CartModal, Navbar } from '@/components'
import { CartContextProvider } from '@/contexts/CartContext'
import { ModalContextProvider } from '@/contexts/ModalContext'
import React, { Fragment } from 'react'

type Props = {
  children: React.ReactNode
}

const HomeTemplate = (props: Props) => {
  return (
    <CartContextProvider>
      <ModalContextProvider>
        <ModalContainer>
          <CartModal />
        </ModalContainer>
        <Navbar />
        {props.children}
      </ModalContextProvider>
    </CartContextProvider>
  )
}

export default HomeTemplate
