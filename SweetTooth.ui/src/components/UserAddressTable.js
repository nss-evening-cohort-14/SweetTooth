import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';
// import { getByAddressId } from '../helpers/data/userAddressData';

function UserAddressTable({
  userAddresses,
  // setUserAddresses,
  // userAddressObj
}) {
  const [editNow, setEditNow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');
  // const [addressObj, setAddressObj] = useState({});

  // useEffect(() => {
  //   userAddresses?.map((addr) => setAddressObj(addr));
  // }, []);

  const handleClick = (addressId) => {
    if (addressId != null) {
      setIdToUpdate(addressId);
      setEditNow((prevState) => !prevState);
      console.warn(addressId);
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
            onClick={(e) => handleClick(userAddressInfo.id, e)}
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
