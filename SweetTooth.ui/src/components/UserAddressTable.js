import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'reactstrap';

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

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        // if (userAddressObj) {
        //   getAddressById(paymentMethodInfo.id)
        //     .then(() => {
        //       deleteAddress(paymentMethodInfo)
        //         .then((resp) => setUserAddresses(resp));
        //     });
        // }
        console.warn('you clicked delete');
        break;
      case 'edit':
        // if (addressObj != null) {
        setIdToUpdate(userAddresses.id);
        console.warn(userAddresses.id);
        setEditNow((prevState) => !prevState);
        // }
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
