import React, { useState, useEffect, useContext } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';
import UserDataContext from "../contexts/UserDataContext";

import axios from 'axios';

import '../styling/components/unregisteredplayermodal.scss';

const RegisteredPlayerModal = props => {
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
      <Modal.Header>YOUR TOTAL SCORE IS {userData.score}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" />
        <Modal.Description>
          <Header>CONGRATULATIONS!</Header>

          <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
          <p>
            We worked our voodoo and tallied your score, compared it to all of
            your challengers scores, and you're ranking in the top
            {/*spoof leader board, (everyone in the top 1% for feelz?) random percentage*/}{" "}
            of celebrity know-it-alls!
          </p>
        </Modal.Description>
        {/* <Button onClick={history.push("/game")}>Play again</Button>
      <Button onClick={history.push('/login')}>Login</Button> */}
      </Modal.Content>
      <Button primary icon onClick={() => props.history.push('/game')}>
        Play again! <Icon name="right chevron" />
      </Button>
    </Modal>
  )
};
export default RegisteredPlayerModal;
