import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";
import { Card, Icon, Image, Button } from "semantic-ui-react";

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

  // console.log('isDead', isDead);

  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <Card>
        <Image
          src={
            "https://bw-celeb-dead-app.herokuapp.com/images/Billygoathill.jpeg"
          }
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
        <Button
          onClick={() => {
            props.history.push('/game');
          }}
        >
          Dead!
        </Button>
      </Card>

      {/* <div className="celeb-container">
        <h2>{randomCeleb ? randomCeleb.name : null}</h2>

        <h4>
          {" "}
          <img
            src={randomCeleb ? randomCeleb.celebImage : null}
            alt="celeb"
          />{" "}
        </h4>
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
            // return console.log(nextCeleb());
            props.history.push('/game');
          }}
        >
          Dead!
        </button>
        <p>Current Score props.score</p>
      </div> */}
    </Animated>
  )
};

export default CelebDisplay
