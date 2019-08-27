import React from 'react'
import { Animated } from 'react-animated-css'
import { Button } from 'semantic-ui-react'
<<<<<<< HEAD

import UnregisteredPlayerModal from './UnregisteredPlayerModal'

const Welcome = props => {
  const { history, score } = props
  console.log('welcome props: ', props)

  return (
    <div>
      <Button onClick onClick={() => history.push('/login')}>
=======
const Welcome = props => {
  console.log(props)

  return (
    <div>
      <Button onClick onClick={() => props.history.push('/login')}>
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78
        Login
      </Button>
      <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
      <h2>Test your celebrity knowledge</h2>
      <p></p>
<<<<<<< HEAD
      <Button onClick={() => history.push('/game')}>Play Now</Button>
      {score === 5 ? <UnregisteredPlayerModal score={score} /> : null}
=======
      <Button onClick={() => props.history.push('/game')}>Play Now</Button>
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78
    </div>
  )
}

export default Welcome
