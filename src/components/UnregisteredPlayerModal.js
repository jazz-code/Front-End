import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const UnRegisteredPlayerModal = ({ score }) => (
  <Modal
    trigger={
      <Button className="unregistered-player-modal-btn">See How You Did</Button>
    }
    centered={false}>
    <Modal.Header>YOUR TOTAL SCORE IS {score}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" />
      <Modal.Description>
        <Header>CONGRATULATIONS!</Header>
        <p>You REALLY Seem to Know A LOT About Dead Celebrities...</p>
        <p>
          That was a lot of fun right? Want to let everyone know if they are
          ever trapped in a room with a serial killer and the only way to make
          it out alive is to correctly guess whether or not 10 random
          celebrities are DEAD or ALIVE, you're their 'goto'? Create an account
          so your amazing score persists!
        </p>
      </Modal.Description>
    </Modal.Content>
    <Button primary icon>
      Create an Account <Icon name="right chevron" />
    </Button>
  </Modal>
)

export default UnRegisteredPlayerModal
