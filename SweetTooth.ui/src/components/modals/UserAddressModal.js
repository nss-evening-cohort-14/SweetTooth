import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import UserAddressForm from '../forms/userAddressForm';

function UserAddressModal({
  user, userAddresses, setUserAddresses
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div style={{ padding: '2%' }}>
      <Button color='primary' onClick={toggle}>New Address</Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Add a New Address
    </ModalHeader>
    <ModalBody>
    <UserAddressForm
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
    </ModalBody>
  </Modal>
    </div>
  );
}

UserAddressModal.propTypes = {
  user: PropTypes.any,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func
};

export default UserAddressModal;
