import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import LandingPageForm from './forms/LandingPageForm';

function LandingPageModal({ user }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
  <Button outline color='primary' onClick={toggle}>Finish Account Setup</Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Let&#39;s get our snack on!
    </ModalHeader>
    <LandingPageForm user={user}/>
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

LandingPageModal.propTypes = {
  user: PropTypes.any,
};

export default LandingPageModal;
