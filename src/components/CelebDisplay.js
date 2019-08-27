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

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  console.log("randomCeleb", randomCeleb);

  if (randomCeleb) console.log(randomCeleb.name)

  const isDead = randomCeleb ? randomCeleb.isDead : null

  // console.log('isDead', isDead);

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div className="celeb-container">
        <h2>{randomCeleb ? randomCeleb.name : null}</h2>
        {/* <img src={props.celeb.img} alt={props.celeb.name}/> */}
        <h4> short description? </h4>
        <h4> {randomCeleb ? randomCeleb.dob : null} </h4>
        <button
          onClick={() => {
            alert(!isDead);
          }}
        >
          Alive!
        </button>

        <button
          onClick={() => {
            alert(isDead)
          }}
        >
          Dead!
        </button>
        <p>Current Score props.score</p>
      </div>
    </Animated>
  )
};

export default CelebDisplay
