import React, { useState } from 'react';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import LandingPageForm from './forms/LandingPageForm';

function LandingPageModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
  <Button outline color='info' onClick={toggle}>Create your Account</Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Let&#39;s get our snack on!
    </ModalHeader>
    <LandingPageForm />
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
    </ModalBody>
    <ModalFooter>
      {' '}
      <Button onClick={function noRefCheck() {}}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
</div>
  );
}

export default LandingPageModal;
