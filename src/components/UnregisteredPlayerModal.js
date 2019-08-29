import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../styling/components/unregisteredplayermodal.scss";

const UnRegisteredPlayerModal = props => {
  const [score, setScore] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`https://bw-celeb-dead-app.herokuapp.com/users/${id}`, {
  //       params: {
  //         id: todoId
  //       }
  //     }))
  //     .then(res => console.log("RESPONSE", res.data))
  //     .catch(err => console.log(err.response));
  // }, [])

  // useEffect(() => {
  //   fetchId(props.match.params.id);
  // }, [props.match.params.id])

  // const handleScore = event => {
  //   axios
  //     .put(`https://bw-celeb-dead-app.herokuapp.com/users/${id}`, score)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err.response))
  // };  const handleSubmit = event => {
  const handleSubmit = event => {
    event.preventDefault()
    axiosWithAuth()
      .get("https://bw-celeb-dead-app.herokuapp.com/users/${id}")
      .then(response => {
        console.log(response.data)
        // setScore({
        //     score: response.data.points,
        // })
      })
      .catch(error => {
        console.log("error", error.response)
      })
  };

  return (
    <Modal
      trigger={
        <Button
          onClick={handleSubmit}
          className="unregistered-player-modal-btn"
        >
          See How You Did
        </Button>
      }
      centered={false}
    >
      <Modal.Header>YOUR TOTAL SCORE IS id.score</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" />
        <Modal.Description>
          <Header>CONGRATULATIONS!</Header>
          <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
          <p>
            That was a lot of fun right? Want to let everyone know if they are
            ever trapped in a room with a serial killer and the only way to make
            it out alive is to correctly guess whether or not 10 random
            celebrities are DEAD or ALIVE, you're their 'goto'? Create an
            account so your amazing score persists!
          </p>
        </Modal.Description>
        {/* <Button onClick={history.push("/game")}>Play again</Button>
      <Button onClick={history.push('/login')}>Login</Button> */}
      </Modal.Content>
      <Button primary icon onClick={() => props.history.push("/signup")}>
        Create an Account <Icon name="right chevron" />
      </Button>
      <Button primary icon onClick={() => props.history.push("/game")}>
        Play again! <Icon name="right chevron" />
      </Button>
    </Modal>
  )
};

export default UnRegisteredPlayerModal;
