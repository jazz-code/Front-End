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
    <Modal className="modal-container"
      trigger={
        <Button id="modal-btn" className="unregistered-player-modal-btn">
          Click here to see your score!
        </Button>
      }
      centered={true}
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
          <h4>
            That was a lot of fun right? Want to let everyone know if they are
            ever trapped in a room with a serial killer and the only way to make
            it out alive is to correctly guess whether or not random
            celebrities are DEAD or ALIVE-- you're their goto?
          </h4>
          <h3>Create an account so your amazing score persists!</h3>
        </Modal.Description>
      <div id="modal-btn-group">
      <Button primary icon onClick={() => props.history.push('/signup')}>
        Create an Account! <br/><Icon name="left chevron" />
      </Button>
      <Button primary icon onClick={reset}>
        Play another game! <br/><Icon name="right chevron" />
      </Button>
      </div>
      </Modal.Content>
    </Modal>
  );
}

export default UnRegisteredPlayerModal
