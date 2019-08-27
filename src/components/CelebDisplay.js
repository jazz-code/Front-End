import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";

const CelebDisplay = props => {
  const [celebs, setCelebs] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-celeb-dead-app.herokuapp.com/celebs")
      .then(res => setCelebs(res.data))
      .catch(err => err.response);
  }, [])

  // const randomCeleb = () => {
  //   return celebs[Math.floor(Math.random() * celebs.length)]
  // };
  // console.log('rand', randomCeleb())

  const rand = celebs[Math.floor(Math.random() * celebs.length)]
  console.log("rand", rand);

  if (rand) console.log(rand.name)

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div className="celeb-container">
        <h2>{rand ? rand.name : null}</h2>
        {/* <img src={props.celeb.img} alt={props.celeb.name}/> */}
        <h4> short description? </h4>
        <h4> birth year </h4>
        <button>Alive!</button>
        <Animated animationIn="shake" animationOut="fadeOut" isVisible={true}>
          <button>Dead!</button>
        </Animated>
        <p>Current Score props.score</p>
      </div>
    </Animated>
  )
};

export default CelebDisplay
