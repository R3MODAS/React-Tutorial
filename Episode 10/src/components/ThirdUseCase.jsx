import React, { useState } from 'react'
import useCounter from '../hooks/useCounter';

function ThirdUseCase() {

    const [state, increment, decrement] = useCounter(0);

    
  return (
    <>
        <button onClick={increment}>+</button>
        <h2>{state}</h2>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default ThirdUseCase