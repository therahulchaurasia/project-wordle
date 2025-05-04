import React, { useState } from 'react'
import { WORDS } from '../../data'
import { sample } from '../../utils'
import GuessInput from '../GuessInput/index'
import GuessResult from '../GuessResult/GuessResult'
import Banner from '../Banner/Banner'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState('running')
  const handleGuesses = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess])
    let flag = 0
    const _guess = checkGuess(guess, answer)
    _guess.forEach((item) => {
      if (item.status === 'correct') {
        flag = flag + 1
      }
    })
    if (flag === 5) {
      return setGameStatus('won')
    }
    if (guesses.length === 5) {
      return setGameStatus('lost')
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus} />
      <Banner gameStatus={gameStatus} guesses={guesses} answer={answer} />
    </>
  )
}

export default Game
