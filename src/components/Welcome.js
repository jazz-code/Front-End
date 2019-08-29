import React from 'react'
import { Animated } from 'react-animated-css'
import { Button } from 'semantic-ui-react'

const Welcome = props => {
<<<<<<< HEAD
  console.log(props);
    return (
        <div className="welcome-container">
          <div className="welcome-text">
            <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
            <h2>Test your celebrity knowledge</h2>
          </div>
          <Button id="welcome-button" onClick={() => props.history.push('/game')}>Play Now</Button>
        </div>
        
        
    )

=======
  console.log(props)
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to the Celeb Dead or Alive Quiz</h1>
        <h2>Test your celebrity knowledge</h2>
      </div>
      <Button
        className="welcome-button"
        onClick={() => props.history.push('/game')}>
        Play Now
      </Button>
    </div>
  )
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59
}

export default Welcome
