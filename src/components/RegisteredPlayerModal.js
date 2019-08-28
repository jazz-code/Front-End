import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const RegisteredPlayerModal = ({ score }) => (
  <Modal
    trigger={
      <Button className="registered-player-modal-btn">See How You Did</Button>
    }
    centered={false}>
    <Modal.Header>YOUR TOTAL SCORE IS {score}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" />
      <Modal.Description>
        <Header>CONGRATULATIONS!</Header>
        <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default RegisteredPlayerModal
