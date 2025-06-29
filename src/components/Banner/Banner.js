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
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}{' '}
        </strong>
        .
      </p>
      <RestartButton />
    </div>
  )
}

function DefeatBanner({ answer }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton />
    </div>
  )
}

function RestartButton() {
  return (
    <div className='restartWrapper'>
      <p>Would you like to play again?</p>
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  )
}

export default Banner
