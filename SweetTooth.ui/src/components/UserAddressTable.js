import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
import { deleteUserAddress, getByAddressId } from '../helpers/data/userAddressData';
import UserEditAddressModal from './modals/UserEditAddressModal';

function UserAddressTable({
  user,
  userAddresses,
  setUserAddresses,
}) {
  const handleClick = (addressId) => {
    if (addressId) {
      getByAddressId(addressId)
        .then((address) => {
          deleteUserAddress(address)
            .then((resp) => setUserAddresses(resp));
        });
      debugger;
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
              <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
              {
                <UserEditAddressModal
                  user={user}
                  userAddressInfo={userAddressInfo}
                  userAddresses={userAddresses}
                  setUserAddresses={setUserAddresses}
                />
              }
              <Button color='danger' outline size="sm"
              onClick={() => handleClick(userAddressInfo.id)}
              >
              Delete
              </Button>

              </div>
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
  editAddressNow: PropTypes.bool,
  setEditAddressNow: PropTypes.func,
  idToUpdate: PropTypes.string
};

export default UserAddressTable;
