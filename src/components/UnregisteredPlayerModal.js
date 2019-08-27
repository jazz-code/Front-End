import React, { useState } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const NestedModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
      {toggle(open)}
      {isOpen && content(close)}
    <Modal
      open={open()}
      onOpen={open()}
      onClose={close()}
      size="small"
      trigger={
        <Button primary icon>
          Proceed <Icon name="right chevron" />
        </Button>
      }>
      <Modal.Header>Modal #2</Modal.Header>
      <Modal.Content>
        <p>That's everything!</p>
      </Modal.Content>
      <Modal.Actions>
        <Button icon="check" content="All Done" onClick={close()} />
      </Modal.Actions>
    </Modal>
  )
}

const UnregisteredPlayerModal = () => (
  <Modal trigger={<Button>Multiple Modals</Button>}>
    <Modal.Header>Modal #1</Modal.Header>
    <Modal.Content image>
      <div className="image">
        <Icon name="right arrow" />
      </div>
      <Modal.Description>
        <p>We have more to share with you. Follow us along to modal 2</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default UnregisteredPlayerModal
