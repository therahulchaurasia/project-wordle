import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess'

function GuessResult({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, idx) => (
        <Guess key={num} value={guesses[idx]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResult
