import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import axios from "axios";

const CelebDisplay = props => {
  const [celebs, setCelebs] = useState([]);

  useEffect(() => {
    axios
      .get("https://bw-celeb-dead-app.herokuapp.com/celebs")
      .then(res => setCelebs(res.data))
      .catch(err => err.response);
  }, [])

  const nextCeleb = () => {
    let i = 0;
    i = i + [Math.floor(Math.random() * celebs.length)]; // increase random
    i = i % celebs.length; // if we've gone too high, start from `0` again
    return celebs[i]; // give us back the celeb of where we are now
  }

  const randomCeleb = celebs[Math.floor(Math.random() * celebs.length)]
  console.log("randomCeleb", randomCeleb);

  // if (randomCeleb) console.log(randomCeleb.name);

  const isDead = randomCeleb ? randomCeleb.isDead : null

  // const displayBirth = () =>  {
  //   return randomCeleb.dob.toString();
  // }
  // console.log("birth", displayBirth())

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
        <button
          onClick={() => {
            if (!isDead) {
              alert('Correct')
              props.history.push('/game')
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          Alive!
        </button>
        <button
          onClick={() => {
            if (isDead) {
              alert('Correct')
              props.history.push('/game')
            } else {
              alert('Wrong')
              props.history.push('/game')
            }
          }}
        >
          Dead!
        </button>
      </Card>
    </Animated>
  )
};

export default CelebDisplay
