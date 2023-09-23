'use client'
import { useModalIsOpen, useSetModalIsOpen } from '@/contexts/ModalContext'
import React from 'react'
import { Card } from '.'

type Props = {
  children: React.ReactNode
}

const ModalContainer = (props: Props) => {
  const { children } = props
  const modalIsOpen = useModalIsOpen()
  const setModalIsOpen = useSetModalIsOpen()
  if (modalIsOpen) {
    return (
      <div
        onClick={() => setModalIsOpen(false)}
        className="absolute top-0 left-0 right-0
        bottom-0 bg-black/70 z-10 flex justify-center items-center"
      >
        <Card
          className="bg-white"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </Card>
      </div>
    )
  }
  return
}

export default ModalContainer
