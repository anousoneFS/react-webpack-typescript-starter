import React, { ReactElement } from 'react'
import './styles.css'
import Img from './rule2.jpeg'
import Counter from './Counter'

export const App = (): ReactElement => {
  const myname = 'anousone'
  return (
    <>
      <h1>
        Edited react template {process.env.NODE_ENV} : {process.env.name}:{' '}
        {myname}
      </h1>
      <img src={Img} alt="my rule" width="300" height="300" />
      <Counter />
    </>
  )
}
