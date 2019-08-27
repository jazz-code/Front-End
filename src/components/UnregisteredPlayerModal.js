import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const UnRegisteredPlayerModal = ({ score }) => (
  <Modal trigger={<Button>See How You Did</Button>} centered={false}>
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

export default UnRegisteredPlayerModal
