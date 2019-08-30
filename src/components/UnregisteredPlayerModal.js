import React, { useState, useEffect, useContext } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import UserDataContext from "../contexts/UserDataContext";

import axios from 'axios';

import '../styling/components/unregisteredplayermodal.scss';

const UnRegisteredPlayerModal = props => {
  const { userData, setUserData } = useContext(UserDataContext);
  console.log('userData', userData);

  axios
    .get(`https://bw-celeb-dead-app.herokuapp.com/users/${userData.id}`)
    .then(response => setUserData(userData.response))
    .catch(error => error.response);

  return (
    <Modal
      trigger={
        <Button className="unregistered-player-modal-btn">
          See How You Did
        </Button>
      }
      centered={false}
    >
      <Modal.Header>LOGIN TO KEEP TRACK OF YOUR SCORE</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" />
        <Modal.Description>
          <Header>CONGRATULATIONS!</Header>
          <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
          <p>
            That was a lot of fun right? Want to let everyone know if they are
            ever trapped in a room with a serial killer and the only way to make
            it out alive is to correctly guess whether or not 5 random
            celebrities are DEAD or ALIVE, you're their 'goto'? Create an
            account so your amazing score persists!
          </p>
        </Modal.Description>
        {/* <Button onClick={history.push("/game")}>Play again</Button>
      <Button onClick={history.push('/login')}>Login</Button> */}
      </Modal.Content>
      <Button primary icon onClick={() => props.history.push('/signup')}>
        Create an Account <Icon name="right chevron" />
      </Button>
      <Button primary icon onClick={() => props.history.push('/game')}>
        Play again! <Icon name="right chevron" />
      </Button>
    </Modal>
  );
}

export default UnRegisteredPlayerModal
