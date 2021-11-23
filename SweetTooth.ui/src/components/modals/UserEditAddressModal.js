import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import UserAddressForm from '../forms/userAddressForm';
// import { getByAddressId } from '../../helpers/data/userAddressData';

function UserEditAddressModal({
  user, userAddressInfo, userAddresses, setUserAddresses
}) {
  const [idToUpdate, setIdToUpdate] = useState('');
  const [editNow, setEditNow] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (addressId, e) => {
    e.preventDefault();
    if (addressId != null) {
      toggle();
      setEditNow((prevState) => !prevState);
      setIdToUpdate(addressId);
      // getByAddressId(addressId);
      console.warn('handleClick edit', addressId);
    }
  };
  return (
    <div style={{ padding: '2%' }}>
       <Button color='info' outline
            onClick={(e) => handleClick(userAddressInfo.id, e)}
          >
            Edit
            {/* { idToUpdate === userAddressInfo.id && editNow
              ? 'Close' : 'Edit' } */}
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
      && editNow && <UserAddressForm
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
