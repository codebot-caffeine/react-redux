import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase,decrease } from '../redux-initiation/actions'

//css imports
import "./counter.css"

export function Count() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increase())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrease())}
        >
          Decrement
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}