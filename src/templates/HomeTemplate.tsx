import { Navbar } from '@/components'
import React, { Fragment } from 'react'

type Props = {
  children: React.ReactNode
}

const HomeTemplate = (props: Props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  )
}

export default HomeTemplate
