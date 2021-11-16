import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Container, FormGroup, Input, Label, Row
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
                <FormGroup check>
                    <Input
                      id="checkbox1"
                      type="checkbox"
                    />
                    <Label check>
                    </Label>
                  </FormGroup>
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
            key={paymentMethodInfo.id}
          >
            <Row>{paymentMethodInfo?.method}</Row>
            <Row>{paymentMethodInfo?.cardNumber}</Row>
            <Row>{paymentMethodInfo?.expDate}</Row>
            <Row>{paymentMethodInfo?.securityCode}</Row>
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
