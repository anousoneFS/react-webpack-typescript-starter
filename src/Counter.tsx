import React, { ReactElement } from 'react'

const Counter = (): ReactElement => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <div>Counter</div>
      <button onClick={() => setCount((c) => c + 1)}> count: {count}</button>
    </>
  )
}

export default Counter
