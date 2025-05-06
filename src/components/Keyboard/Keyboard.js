import React from "react"

function Keyboard({ keyboardRows }) {
  return (
    <div className="keyboard-wrapper">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard">
          {row.map(({ alphabet, style }) => (
            <span className={`key ${style}`} key={alphabet}>
              {alphabet}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
