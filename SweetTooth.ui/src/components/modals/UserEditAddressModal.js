import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import UserAddressForm from '../forms/userAddressForm';

function UserEditAddressModal({
  user, userAddressInfo, userAddresses, setUserAddresses
}) {
  const [idToUpdate, setIdToUpdate] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (addressId, e) => {
    e.preventDefault();
    toggle();
    if (addressId != null) {
      setIdToUpdate(addressId);
    }
  };
  return (
    <div style={{ paddingRight: '5%' }}>
       <Button color='info' outline size="sm"
            onClick={(e) => handleClick(userAddressInfo.id, e)}
          >
            Edit
          </Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Edit your Address
    </ModalHeader>
    <ModalBody>
    {
      idToUpdate === userAddressInfo.id
      && <UserAddressForm
        user={user}
        userAddressInfo={userAddressInfo}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
    }
    </ModalBody>
  </Modal>
    </div>
  );
}

UserEditAddressModal.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  idToUpdate: PropTypes.string

};

export default UserEditAddressModal;
