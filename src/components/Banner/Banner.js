import React from 'react'

function Banner({ gameStatus, guesses, answer }) {
  return (
    <>
      {gameStatus === 'won' && <VictoryBanner guesses={guesses} />}
      {gameStatus === 'lost' && <DefeatBanner answer={answer} />}
    </>
  )
}

function VictoryBanner({ guesses }) {
  return (
    <div class='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  )
}

function DefeatBanner({ answer }) {
  return (
    <div class='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default Banner
