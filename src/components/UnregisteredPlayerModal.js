import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const UnRegisteredPlayerModal = ({ score, history }) => (
  <Modal
    trigger={
      <Button className="unregistered-player-modal-btn">See How You Did</Button>
    }
    centered={false}
  >
    <Modal.Header>YOUR TOTAL SCORE IS {score}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" />
      <Modal.Description>
        <Header>CONGRATULATIONS!</Header>
        <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
        <p>Login to keep track of your score! Or play again!</p>
      </Modal.Description>
      {/* <Button onClick={history.push("/game")}>Play again</Button>
      <Button onClick={history.push('/login')}>Login</Button> */}
    </Modal.Content>
  </Modal>
)

export default UnRegisteredPlayerModal
