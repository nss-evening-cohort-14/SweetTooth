import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row
} from 'reactstrap';
import UserAddressForm from './forms/userAddressForm';
import PaymentMethodCard from './PaymentMethodCard';
// import getPaymentMethodByPaymentId from '../helpers/data/paymentMethodData';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  return (
    <div>
        <h1>User Profile</h1>

      <UserAddressForm
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
      {
        userAddresses?.map((userAddressInfo) => (
          <Container
            key={userAddressInfo.id}
          >
            <Row>{userAddressInfo.street}</Row>
            <Row>{userAddressInfo.city}</Row>
            <Row>{userAddressInfo.state}</Row>
            <Row>{userAddressInfo.zip}</Row>
          </Container>
        ))
        }

      {
      <Container>
        {paymentMethodsArray?.map((paymentMethodInfo) => (
          paymentMethodInfo.softDelete === false
            ? <PaymentMethodCard
              key={paymentMethodInfo.id}
              paymentMethodsArray={paymentMethodsArray}
              setPaymentMethodsArray={setPaymentMethodsArray}
              {...paymentMethodInfo}
              >
              </PaymentMethodCard>
            : ''
        ))}
      </Container>
      }
    </div>
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
