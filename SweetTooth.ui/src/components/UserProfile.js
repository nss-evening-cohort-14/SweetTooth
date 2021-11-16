import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Col, Row, Button
} from 'reactstrap';
import UserAddressForm from './forms/userAddressForm';
import PaymentMethodForm from './forms/PaymentMethodForm';

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
            <Row>
              <Col>
              <Button color='info' outline >Edit</Button>
              </Col>
              <Col>
                <Row>{userAddressInfo.street}</Row>
                <Row>{userAddressInfo.city}</Row>
                <Row>{userAddressInfo.state}</Row>
                <Row>{userAddressInfo.zip}</Row>
              </Col>
            </Row>
          </Container>
        ))
        }

      <PaymentMethodForm
        user={user}
        paymentMethodsArray={paymentMethodsArray}
        setPaymentMethodsArray={setPaymentMethodsArray}
      />

      {
        paymentMethodsArray?.map((paymentMethodInfo) => (
          <Container
            fluid
            key={paymentMethodInfo.id}
          >
            <Row>
              <Col>
                  <Button color='info' outline >Edit</Button>
              </Col>
              <Col>
                <Row>{paymentMethodInfo?.method}</Row>
                <Row>{paymentMethodInfo?.cardNumber}</Row>
                <Row>{paymentMethodInfo?.expDate}</Row>
                <Row>{paymentMethodInfo?.securityCode}</Row>
              </Col>
            </Row>
          </Container>
        ))
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
