import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import { deleteUserAddress, getByAddressId } from '../helpers/data/userAddressData';
// import { getByAddressId } from '../helpers/data/userAddressData';

function UserAddressTable({
  userAddresses,
  setUserAddresses,
  // userAddressObj
}) {
  const [editNow, setEditNow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleClick = (type, addressId) => {
    switch (type) {
      case 'delete':
        console.warn('delete', addressId);
        if (addressId) {
          getByAddressId(addressId)
            .then((address) => {
              deleteUserAddress(address)
                .then((resp) => setUserAddresses(resp));
            });
        }
        break;
      case 'edit':
        if (addressId != null) {
          setIdToUpdate(addressId);
          setEditNow((prevState) => !prevState);
          console.warn('handleClick', addressId);
        }
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Table hover bordered>
          <thead>
            <tr>
              <th>
                Street
              </th>
              <th>
                City
              </th>
              <th>
                State
              </th>
              <th>
                Zip Code
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
      {
        userAddresses?.map((userAddressInfo) => (
          <tr key={userAddressInfo.id} >
              <td>
                {userAddressInfo.street}
              </td>
              <td>
                {userAddressInfo.city}
              </td>
              <td>
                {userAddressInfo.state}
              </td>
              <td>
                {userAddressInfo.zip}
              </td>
              <td>
              <Button color='info' outline
            onClick={(e) => handleClick('edit', userAddressInfo.id, e)}
          >
            {idToUpdate === userAddressInfo.id && editNow
              ? 'Close' : 'Edit' }
          </Button>
          {' '}
          <Button color='danger' outline
            onClick={(e) => handleClick('delete', userAddressInfo.id, e)}
          >
            Delete
          </Button>
              </td>
          </tr>
        ))
      }
      </tbody>
      </Table>
  );
}

UserAddressTable.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddressObj: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
};

export default UserAddressTable;
