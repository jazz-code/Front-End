import React from 'react';
import { Animated } from 'react-animated-css';
import { Container, Divider, Button } from 'semantic-ui-react'

// import { Animated } from "react-animated-css";

const Welcome = props => {
  // console.log(props)
  return (
  <div>
    {/* <Container textAlign='left'>Left Aligned</Container>
    <Container textAlign='center'>Center Aligned</Container>
    <Container textAlign='right'>Right Aligned</Container> */}
    <Container textAlign='center'>
    {/* <div className="welcome-container"> */}
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <Container textAlign='center'>
      <div id='important-content' className="content">
        <div className="content__container">
          <p className="content__container__text">
            Celebrity
          </p>   
          <ul className="content__container__list">
            <li className="content__container__list__item">Dead !</li>
            <li className="content__container__list__item">or !</li>
            <li className="content__container__list__item">Alive !</li>
            <li className="content__container__list__item">or !</li>
          </ul>
        </div>
      </div>
      </Container>
      </Animated>
      {/* </div> */}
      <Container className='description-container'>
      <Divider />
      <h2>Want to test your celebrity knowledge?</h2>
      <h3>The objective is simple.</h3>
      <h3>You will be shown names and pictures of celebrities. Your goal is to guess whether they are alive or not! </h3>
       <Button
         id="welcome-btn"
         className="welcome-button"
         onClick={() => props.history.push('/game')}
       >
         Play Now
       </Button>
       </Container>
    </Container>
  </div>
  )
}

export default Welcome
