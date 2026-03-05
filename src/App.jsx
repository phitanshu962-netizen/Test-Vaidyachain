import React, { useState, useEffect } from 'react'
import { auth } from './firebase'
import { counterService } from './services/counterService'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Initialize counter from Firebase on component mount
  useEffect(() => {
    const initializeCounter = async () => {
      try {
        setLoading(true)
        const initialCount = await counterService.getCounter()
        setCount(initialCount)
      } catch (err) {
        setError('Failed to load counter from Firebase')
        console.error('Error initializing counter:', err)
      } finally {
        setLoading(false)
      }
    }

    initializeCounter()
  }, [])

  const increment = async () => {
    try {
      setLoading(true)
      const newCount = await counterService.incrementCounter()
      setCount(newCount)
    } catch (err) {
      setError('Failed to increment counter')
      console.error('Error incrementing counter:', err)
    } finally {
      setLoading(false)
    }
  }

  const decrement = async () => {
    try {
      setLoading(true)
      const newCount = await counterService.decrementCounter()
      setCount(newCount)
    } catch (err) {
      setError('Failed to decrement counter')
      console.error('Error decrementing counter:', err)
    } finally {
      setLoading(false)
    }
  }

  const reset = async () => {
    try {
      setLoading(true)
      const newCount = await counterService.resetCounter()
      setCount(newCount)
    } catch (err) {
      setError('Failed to reset counter')
      console.error('Error resetting counter:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Counter App</h1>
          <div className="counter-container">
            <div className="count-display">Loading...</div>
          </div>
          <p className="description">
            Connecting to Firebase...
          </p>
        </header>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter App</h1>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        <div className="counter-container">
          <div className="count-display">{count}</div>
          <div className="buttons">
            <button className="btn btn-decrement" onClick={decrement} disabled={loading}>
              Decrease
            </button>
            <button className="btn btn-reset" onClick={reset} disabled={loading}>
              Reset
            </button>
            <button className="btn btn-increment" onClick={increment} disabled={loading}>
              Increase
            </button>
          </div>
        </div>
        <p className="description">
          A Firebase-powered React counter application built with Vite
        </p>
      </header>
    </div>
  )
}

export default App