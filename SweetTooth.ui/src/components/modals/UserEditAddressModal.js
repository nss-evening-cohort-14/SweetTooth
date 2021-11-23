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
    toggle();
    if (addressId != null) {
      setEditNow((prevState) => !prevState);
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
      editNow && idToUpdate === userAddressInfo.id
      && <UserAddressForm
        toggle={toggle}
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
