import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import Timer from "./Timer"
import UnregisteredPlayerModal from "./UnregisteredPlayerModal";

// Utils
import { axiosWithAuth } from "../utils/axiosWithAuth";
import useTraceUpdate from "../utils/useTraceUpdate"

// Context API
import UserDataContext from "../contexts/UserDataContext";
// import TimerContext from  "../contexts/TimerContext"
// import ScoreContext from  "../contexts/ScoreContext"
import { TimerProvider } from  "../contexts/TimerContext"
import { ScoreContextProvider } from '../contexts/ScoreContext';

// Styling 
import "../styling/components/celebdisplay.scss";
import { Animated } from "react-animated-css";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const CelebDisplay = ({ props, celebs, history, currentScore, setCurrentScore}) => {
  const { userData, setUserData } = useContext(UserDataContext)
  const [score, setScore] = useState(0)
  
  // const {score, setScore} = useContext(ScoreProvider)

  // const [currentScore, setCurrentScore] = useState(0);
  const [icon, setIcon] = useState({ icon: true });
  const [count, setCount] = useState(0);


  // const scorePut = () => {
  //   axiosWithAuth()
  //     .put(`https://bw-celeb-dead-app.herokuapp.com/users/${userData.id}`, {
  //       'points': combined,
  //     })
  //     .then(res => console.log("RES", res))
  //     .catch(err => err.response);
  // }
  // console.log("userData", userData);

  // let userScore = userData.points;
  // // if (!userScore) {}
  // let combined = userScore + currentScore;
  // console.log("combined", combined);

  //if 10 button clicks --> axios.put
  // /users/${user.id}
  // user.score
  //
  //take points into user.score [useState]

  // console.log('randomCeleb', randomCeleb)

  const nextCeleb = () => {
    let i = randomCeleb;
    i = i + 1; // increase
    i = i % celebs.length; // if we've gone too high, start from `0` again
    return randomCeleb[i]; // give us back the celeb of where we are now
  }

  const handleIcon = e => {
    e.preventDefault();
    setIcon({ icon: true });
  }

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  // if (randomCeleb) console.log(randomCeleb);
  const isDead = randomCeleb ? randomCeleb.isDead : null;
  console.log("isdead****", isDead)

  const DOB = () => {
    if (randomCeleb) {
      let str = randomCeleb.dob;
      let res = str.split(",");
      return res[0].substr(0, 4);
      // console.log("DOB",res[1].substr(1,4) + res[0]);
    }
  };

  // console.log("GREEN****", isDead)
  if (randomCeleb) { 
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div className="score-container">
        <div className="score percent">Score: {currentScore}</div>
      </div>
      <p className="welcome-msg">{userData.message}</p>
      <Card id="card-id">
        <Timer count={count} currentScore={currentScore} history={history}/>
        <Image
          className="card-image"
          src={randomCeleb ? randomCeleb.celebImage : <h2>Loading Celebs...</h2>}
          wrapped
          ui={false}
        />
        <Card.Content id="content-id">
          <Card.Header>{randomCeleb ? randomCeleb.name : null}</Card.Header>
          <Card.Description>{randomCeleb ? <p>Born in {DOB()}</p> : null}</Card.Description>
          <Button.Group id="btn-group">
            <Button
              size="large"
              color="green"
              id="btn-left"
              onClick={() => {
                if (isDead) {
                  history.push("/game");
                  setCurrentScore(currentScore + 1);
                  setCount(count + 1);
                } else {
                  history.push('/game')
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
              id="btn-right"
              onClick={() => {
                if (!isDead) {
                  history.push("/game");
                  setCurrentScore(currentScore + 1);
                  setCount(count + 1);
                } else {
                  history.push('/game')
                  setCount(count + 1)
                }
              }}
            >
              <i className="thumbs up icon"></i>Alive
            </Button>
          </Button.Group>
        
        </Card.Content>
      </Card>
    </Animated>
  );
}
else {
  return (
    <h2 className="loading">One moment, we're loading the Celebs...</h2>
  )
}
}

export default CelebDisplay