<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Animated } from 'react-animated-css'
import axios from 'axios'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const CelebDisplay = props => {
  const [celebs, setCelebs] = useState([])
=======
import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import axios from "axios";

import "../styling/components/celebdisplay.scss";

const CelebDisplay = props => {
  const [celebs, setCelebs] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78

  useEffect(() => {
    axios
      .get('https://bw-celeb-dead-app.herokuapp.com/celebs')
      .then(res => setCelebs(res.data))
      .catch(err => err.response)
  }, [])

  const nextCeleb = () => {
<<<<<<< HEAD
    let i = 0
    i = i + [Math.floor(Math.random() * celebs.length)] // increase random
    i = i % celebs.length // if we've gone too high, start from `0` again
    return celebs[i] // give us back the celeb of where we are now
=======
    let i = 0;
    i = randomCeleb + i; // increase random
    i = i % celebs.length; // if we've gone too high, start from `0` again
    return celebs[i]; // give us back the celeb of where we are now
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78
  }

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  console.log('randomCeleb', randomCeleb)

  // if (randomCeleb) console.log(randomCeleb.name);

  const isDead = randomCeleb ? randomCeleb.isDead : null

  if (currentScore === 5) {
    props.history.push('/login');
  }

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}>
      <Card>
        <Image
<<<<<<< HEAD
          src={
            'https://bw-celeb-dead-app.herokuapp.com/images/Billygoathill.jpeg'
          }
=======
          src={randomCeleb ? randomCeleb.celebImage : null}
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78
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
<<<<<<< HEAD
        <Button
          onClick={() => {
            props.history.push('/game')
          }}>
          Dead!
        </Button>
=======
>>>>>>> bde2bba925ea7e1da4d8df97ccdcd89527f43d78
      </Card>

      <Card>
        <button
          className="btn-alive"
          onClick={() => {
            if (!isDead) {
              alert('Correct')
              setCurrentScore(currentScore + 1);
              return (
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  {props.history.push("/game")}
                </Animated>
              );
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          Alive!
        </button>
        <button
          className="btn-dead"
          onClick={() => {
            if (isDead) {
              alert('Correct')
              props.history.push('/game')
              setCurrentScore(currentScore + 1);
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          Dead!
        </button>
      </Card>

      <h4>Current Score: {currentScore}</h4>
    </Animated>
  )
}

export default CelebDisplay
