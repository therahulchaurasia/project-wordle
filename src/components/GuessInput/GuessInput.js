import React, { useState } from 'react'

function GuessInput({ handleGuesses, gameStatus }) {
  const [guess, setGuess] = useState('')
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault()
        handleGuesses(guess)
        setGuess('')
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        value={guess}
        required={true}
        aria-required='true'
        maxLength={5}
        pattern='^[A-Za-z]{5}$'
        title='Enter exactly 5 letters. No numbers, spaces, or special characters.'
        onChange={(e) => setGuess(e.target.value?.toUpperCase() || '')}
      />
    </form>
  )
}

export default GuessInput
