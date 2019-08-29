<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
import { Animated } from "react-animated-css";
import { Card, Icon, Image, Button } from "semantic-ui-react";
// import { useAlert } from "react-alert";
import ScoreContext from '../contexts/ScoreContext';

import axios from "axios";

import "../styling/components/celebdisplay.scss";

import UnregisteredPlayerModal from './UnregisteredPlayerModal';

const CelebDisplay = props => {
  // const { currentScore, setCurrentScore } = useContext(ScoreContext)
  const [celebs, setCelebs] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [newWidth, setNewWidth] = useState({ width: 5 });
  const [icon, setIcon] = useState({ icon: false })
  const [count, setCount] = useState(0)
=======
import React, { useState, useEffect, useContext } from 'react'
import { Animated } from 'react-animated-css'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import axios from 'axios'

import UserDataContext from '../contexts/UserContext'

import '../styling/components/celebdisplay.scss'

import UnregisteredPlayerModal from './UnregisteredPlayerModal'

const CelebDisplay = props => {
  const { userData, setUserData } = useContext(UserDataContext)
  console.log('celebDisplay userData: ', userData)

  const [celebs, setCelebs] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [icon, setIcon] = useState({ icon: true })
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59

  // console.log("USER", user)
  useEffect(() => {
    axios
      .get("https://bw-celeb-dead-app.herokuapp.com/celebs")
      .then(res => setCelebs(res.data))
<<<<<<< HEAD
      .catch(err => err.response);
  }, []);

  //if 10 button clicks --> axios.put
  // /users/${user.id}
  // user.score
  //
  //take points into user.score [useState]
=======
      .catch(err => err.response)
  }, [])
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  console.log('randomCeleb', randomCeleb)

  const nextCeleb = () => {
<<<<<<< HEAD
    let i = randomCeleb;
    i = i + 1; // increase
    i = i % celebs.length; // if we've gone too high, start from `0` again
    return randomCeleb[i]; // give us back the celeb of where we are now
  }

  const handleIcon = e => {
    e.preventDefault();
    setIcon({ icon: true })
  };
=======
    let i = 0
    i = randomCeleb + i // increase random
    i = i % celebs.length // if we've gone too high, start from `0` again
    return celebs[i] // give us back the celeb of where we are now
  }

  const handleIcon = e => {
    e.preventDefault()
    setIcon({ icon: !icon })
  }
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59

  // if (randomCeleb) console.log(randomCeleb.name);

  const isDead = randomCeleb ? randomCeleb.isDead : null;

  // if (currentScore === 5) {
  //   props.history.push('/login')
  // }
  // if (currentScore === 5) {
  //   props.history.push("/modal");
  // }

  if (count === 5 || currentScore === 5) {
    props.history.push('/modal')
  }

  console.log('COUNT', count)

  const DOB = () => {
    if (randomCeleb) {
      let str = randomCeleb.dob
      let res = str.split(",");
      return res[0].substr(0, 4)
      // console.log("DOB",res[1].substr(1,4) + res[0]);
    }
  };

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
<<<<<<< HEAD
      isVisible={true}
    >
      <div className="score-container">
        <div className="score percent" style={{ width: newWidth }}>
          Current Score: {currentScore}
        </div>
        {/* <button onClick={move()}>Test</button> */}
      </div>
=======
      isVisible={true}>
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59
      <Card>
        {userData.message}
        <Image
          className="card-image"
          src={randomCeleb ? randomCeleb.celebImage : null}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{randomCeleb ? randomCeleb.name : null}</Card.Header>

          <Card.Description>
            {randomCeleb ? <p>Born in {DOB()}</p> : null}
          </Card.Description>
        </Card.Content>
<<<<<<< HEAD
        <Card.Content>
          <Button.Group>
            <Button
              size="large"
              color="green"
              id="btn"
              onClick={() => {
                if (isDead) {
                  props.history.push('/game')
                  setCurrentScore(currentScore + 1);
                  setCount(count + 1)
                } else {
                  props.history.push('/game')
                  setCount(count + 1)
                }
              }}
            >
              <i className="thumbs down icon"></i>Dead
            </Button>
            <Button.Or />
            <Button
              size="large"
              color="pink"
              id="btn"
              onClick={() => {
                if (!isDead) {
                  setCurrentScore(currentScore + 1);
                  props.history.push("/game");
                  setCount(count + 1)
                } else {
                  props.history.push("/game");
                  setCount(count + 1)
                }
              }}
            >
              <i className="thumbs up icon"></i>Alive
            </Button>
          </Button.Group>
        </Card.Content>
=======
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
                  isVisible={true}>
                  {props.history.push('/game')}
                </Animated>
              )
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}>
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
          }}>
          <i className="pointing down icon"></i>
          Dead!
        </Button>
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59
      </Card>
    </Animated>
  )
<<<<<<< HEAD
};
=======
}
>>>>>>> e7436ce622e071433ef98315472d68e7dfa59d59

export default CelebDisplay
