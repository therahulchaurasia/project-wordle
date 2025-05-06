import React, { useState } from "react"
import { WORDS, INITIALKEYBOARDROWS } from "../../data"
import { sample } from "../../utils"
import GuessInput from "../GuessInput/index"
import GuessResult from "../GuessResult/GuessResult"
import Banner from "../Banner/Banner"
import { checkGuess } from "../../game-helpers"
import Keyboard from "../Keyboard/Keyboard"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [keyboardRows, setKeyboardRows] = useState(INITIALKEYBOARDROWS)
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState("running")

  const updateKeyStatuses = (statuses) => {
    setKeyboardRows((prevRows) =>
      prevRows.map((row) =>
        row.map((key) => {
          const match = statuses.find((s) => s.letter === key.alphabet)
          if (!match) return key

          if (key.style === "correct") return key // never override
          if (key.style === "misplaced" && match.status === "incorrect")
            return key

          return { ...key, style: match.status }
        })
      )
    )
  }
  const handleGuesses = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess])
    const _guess = checkGuess(guess, answer)
    updateKeyStatuses(_guess)
    if (guess === answer) {
      return setGameStatus("won")
    }
    if (guesses.length === 5) {
      return setGameStatus("lost")
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus} />
      <Keyboard keyboardRows={keyboardRows} />
      <Banner gameStatus={gameStatus} guesses={guesses} answer={answer} />
    </>
  )
}

export default Game
