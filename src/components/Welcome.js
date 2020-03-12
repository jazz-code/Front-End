import React from 'react';
import { Animated } from 'react-animated-css';
import { Button } from 'semantic-ui-react';

const Welcome = props => {
  console.log(props)
  return (
    <div className="welcome-container">
      <div className="welcome-text">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            Celebrity
          </p>
    
          <ul class="content__container__list">
            <li class="content__container__list__item">Dead !</li>
            <li class="content__container__list__item">or !</li>
            <li class="content__container__list__item">Alive !</li>
            <li class="content__container__list__item">or !</li>
          </ul>
        </div>
      </div>
        {/* <h1>Welcome to the Celeb Dead or Alive Quiz</h1> */}
        <h2>Test your celebrity knowledge</h2>

        {/* <h2>How it works:</h2> */}
        <h3>The objective is simple.</h3>
        <h3>You will be shown names and pictures of celebrities.</h3> 
        <h3>Your job is to guess whether they are alive or not! </h3>
      </div>
      <Button
        id="welcome-btn"
        className="welcome-button"
        onClick={() => props.history.push('/game')}
      >
        Play Now
      </Button>
    </div>
  )
};

export default Welcome
