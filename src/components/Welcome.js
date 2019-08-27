import React from 'react'
import { Animated } from 'react-animated-css'
import { Button } from 'semantic-ui-react'
const Welcome = props => {
  console.log(props)

  return (
    <div>
      <Button onClick onClick={() => props.history.push('/login')}>
        Login
      </Button>
      <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
      <h2>Test your celebrity knowledge</h2>
      <p></p>
      <Button onClick={() => props.history.push('/game')}>Play Now</Button>
    </div>
  )
}

export default Welcome
