import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  const ele = checkGuess(value, answer)
  return (
    <p className='guess'>
      {range(5).map((cell, idx) => (
        <span className={`cell ${value ? ele[idx].status : ''}`} key={idx}>
          {value ? ele[idx].letter : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
