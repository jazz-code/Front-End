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
        <p>
          We worked our voodoo and tallied your score, compared it to all of
          your challengers scores, and you're ranking in the top
          {/*spoof leader board, (everyone in the top 1% for feelz?) random percentage*/}{' '}
          of celebrity know-it-alls!
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default RegisteredPlayerModal
