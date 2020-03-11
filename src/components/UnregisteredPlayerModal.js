import React, { useState, useEffect, useContext } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import UserDataContext from "../contexts/UserDataContext";

import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'

import '../styling/components/unregisteredplayermodal.scss';

const UnRegisteredPlayerModal = props => {
  const { userData, setUserData } = useContext(UserDataContext);
  console.log('userData', userData);

  axios
    .get(`https://bw-celeb-dead-app.herokuapp.com/users/${userData.id}`)
    .then(response => console.log("Unreged response", response))
    .catch(error => console.log("error in unregged modal: ", error.response));

  const reset = () => {
    props.setCurrentScore(0) 
    props.history.push('/game')
  }
  return (
    <Modal
      trigger={
        <Button className="unregistered-player-modal-btn">
          See How You Did
        </Button>
      }
      centered={false}
    >
      <Modal.Header>CREATE an account & LOGIN to keep track of your score!</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" />
        <Modal.Description>
          <Header>Your SCORE is {props.currentScore}! CONGRATULATIONS! </Header>
            <h3>{props.currentScore === 0 ? 
              <span><h3>Better Luck Next Time!</h3></span> :
              <h3>You REALLY Seem to Know A LOT About Dead Celebrities...</h3> }
            </h3>
          <h5>
            That was a lot of fun right? Want to let everyone know if they are
            ever trapped in a room with a serial killer and the only way to make
            it out alive is to correctly guess whether or not 5 random
            celebrities are DEAD or ALIVE, you're their 'goto'? Create an
            account so your amazing score persists!
          </h5>
        </Modal.Description>
      </Modal.Content>
      <Button primary icon onClick={() => props.history.push('/signup')}>
        Create an Account <Icon name="right chevron" />
      </Button>
      <Button primary icon onClick={reset}>
        Play again! <Icon name="right chevron" />
      </Button>
    </Modal>
  );
}

export default UnRegisteredPlayerModal
