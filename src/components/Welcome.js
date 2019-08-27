import React from 'react'
import { Animated } from 'react-animated-css'

const Welcome = props => {
  console.log(props)

  return (
    <div>
      <button onClick onClick={() => props.history.push('/login')}>
        Login
      </button>
      <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
      <h2>Test your celebrity knowledge</h2>
      <p></p>
      <button onClick={() => props.history.push('/game')}>Play Now</button>
    </div>
  )
}

export default Welcome
