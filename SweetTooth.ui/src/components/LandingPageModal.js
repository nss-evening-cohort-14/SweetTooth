import React, { useState } from 'react';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { signInUser } from '../helpers/auth';

function LandingPageModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
  <Button outline color='info' onClick={toggle}>Create your Account</Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={function noRefCheck() {}}>
      Modal title
    </ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={signInUser}
      >
        Google
      </Button>
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
