import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Table
} from 'reactstrap';
import UserAddressForm from './forms/userAddressForm';
import PaymentMethodCard from './PaymentMethodCard';
import PaymentMethodModal from './modals/PaymentMethodModal';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  return (
    <Container>
        <h1>User Profile</h1>

      <UserAddressForm
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
        <Table responsive bordered>
          <thead>
            <tr>
              <th>
                #
              </th>
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
            </tr>
          </thead>
          <tbody>
      {
        userAddresses?.map((userAddressInfo) => (
          // <Container
          //   key={userAddressInfo.id}
          // >
            <>
            <tr key={userAddressInfo.id} >
            <th scope="row">
              Address #1
            </th>
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
          </tr>
          </>
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
