import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        <div className="counter-container">
          <div className="count-display">{count}</div>
          <div className="buttons">
            <button className="btn btn-decrement" onClick={decrement}>
              Decrease
            </button>
            <button className="btn btn-reset" onClick={reset}>
              Reset
            </button>
            <button className="btn btn-increment" onClick={increment}>
              Increase
            </button>
          </div>
        </div>
        <p className="description">
          A simple React counter application built with Vite
        </p>
      </header>
    </div>
  )
}

export default App