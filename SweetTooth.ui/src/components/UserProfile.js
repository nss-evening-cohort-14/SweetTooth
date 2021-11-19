import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Table
} from 'reactstrap';
import PaymentMethodCard from './PaymentMethodCard';
import PaymentMethodModal from './modals/PaymentMethodModal';
import UserAddressModal from './modals/UserAddressModal';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  return (
    <Container>
        <h1>User Profile</h1>
      <UserAddressModal
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
        <Table responsive bordered>
          <thead>
            <tr>
              {/* <th>
                #
              </th> */}
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
          // <Container
          //   key={userAddressInfo.id}
          // >
            <tr key={userAddressInfo.id} >
            {/* <th scope="row">
              Address #1
            </th> */}
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
                <Button outline color='info'>
                  Edit
                </Button>
                {' '}
                <Button outline color ='danger'>
                  Delete
                </Button>
            </td>
          </tr>
        ))
      }
      </tbody>
      </Table>

        <PaymentMethodModal
          user={user}
          paymentMethodsArray={paymentMethodsArray}
          setPaymentMethodsArray={setPaymentMethodsArray}
        />

      {
      <Container>
        {paymentMethodsArray?.map((paymentMethodInfo) => (
          paymentMethodInfo.softDelete === false
            ? <PaymentMethodCard
              key={paymentMethodInfo.id}
              user={user}
              paymentMethodsArray={paymentMethodsArray}
              setPaymentMethodsArray={setPaymentMethodsArray}
              {...paymentMethodInfo}
              >
              </PaymentMethodCard>
            : ''
        ))}
      </Container>
      }
    </Container>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};
