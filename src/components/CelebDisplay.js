import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

import '../styling/components/celebdisplay.scss';

import UnregisteredPlayerModal from "./UnregisteredPlayerModal";

const CelebDisplay = props => {
  const [celebs, setCelebs] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  // const [width, setWidth] = useState(0)
  const [icon, setIcon] = useState({ icon: true });

  useEffect(() => {
    axios
      .get('https://bw-celeb-dead-app.herokuapp.com/celebs')
      .then(res => setCelebs(res.data))
      .catch(err => err.response)
  }, [])

  const nextCeleb = () => {
    let i = 0
    i = randomCeleb + i // increase random
    i = i % celebs.length // if we've gone too high, start from `0` again
    return celebs[i] // give us back the celeb of where we are now
  };

  const handleIcon = e => {
    e.preventDefault()
    setIcon({ icon: !icon });
  }

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  console.log('randomCeleb', randomCeleb)

  // if (randomCeleb) console.log(randomCeleb.name);

  const isDead = randomCeleb ? randomCeleb.isDead : null

  // if (currentScore === 5) {
  //   props.history.push('/login')
  // }
  if (currentScore === 5) {
    props.history.push('/modal')
  }
  // function addWidth() {
  //   document.getElementByClass(".percent").style.width = '15%';
  // }

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <Card>
        <Image
          src={randomCeleb ? randomCeleb.celebImage : null}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{randomCeleb ? randomCeleb.name : null}</Card.Header>

          <Card.Description>
            {randomCeleb ? randomCeleb.dob : null}
          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>

      <Card>
        <Button
          className="btn-alive ui labeled icon button"
          onClick={() => {
            if (!isDead) {
              alert('Correct')
              setCurrentScore(currentScore + 1)

              return (
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  {props.history.push('/game')}
                </Animated>
              )
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          <i className="pointing up icon"></i>
          Alive!
        </Button>
        <Button
          className="btn-dead ui labeled icon button"
          onClick={() => {
            if (isDead) {
              alert('Correct')
              props.history.push('/game')
              setCurrentScore(currentScore + 1)
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          <i className="pointing down icon"></i>
          Dead!
        </Button>
      </Card>

      <div className="score-container">
        <div className="score percent">Current Score: {currentScore}</div>
        {/* <button onClick={move()}>Test</button> */}
      </div>
    </Animated>
  );
};

export default CelebDisplay;
