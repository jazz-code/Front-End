import React from 'react'
import { Animated } from 'react-animated-css'

import UnregisteredPlayerModal from './UnregisteredPlayerModal'

const Welcome = props => {
  const { history, score } = props
  console.log('welcome props: ', props)

  return (
    <div>
      <button onClick onClick={() => history.push('/login')}>
        Login
      </button>
      <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
      <h2>Test your celebrity knowledge</h2>
      <p></p>
      <button onClick={() => history.push('/game')}>Play Now</button>
      {score === 5 ? <UnregisteredPlayerModal score={score} /> : null}
    </div>
  )
}

export default Welcome
