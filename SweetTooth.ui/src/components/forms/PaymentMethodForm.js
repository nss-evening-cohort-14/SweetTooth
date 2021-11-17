import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
import { createNewPaymentMethod, getPayMethodById, updatePaymentMethod } from '../../helpers/data/paymentMethodData';

function PaymentMethodForm({
  user, paymentMethodsArray, setPaymentMethodsArray, ...paymentMethodInfo
}) {
  const [paymentMethodFormObj, setPaymentMethodFormObj] = useState({
    userId: user?.id,
    id: paymentMethodInfo?.id || '',
    method: paymentMethodInfo?.method || '',
    cardNumber: paymentMethodInfo?.cardNumber || '',
    expDate: paymentMethodInfo?.expDate || '',
    securityCode: paymentMethodInfo?.secturityCode || '',
    softDelete: false
  });

  const handleInputChange = (e) => {
    setPaymentMethodFormObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethodFormObj) {
      getPayMethodById(paymentMethodFormObj.id)
        .then(() => {
          updatePaymentMethod(paymentMethodFormObj)
            .then((resp) => setPaymentMethodsArray(resp));
        });
    } else {
      createNewPaymentMethod(paymentMethodFormObj)
        .then((resp) => setPaymentMethodsArray(resp));
    }
  };

  return (
    <div>
      <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="cardNumber" sm={2}>
            Number
          </Label>
          <Col sm={6}>
          <Input
            required
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter a 16-digit card #"
            value={paymentMethodFormObj.cardNumber}
            onChange={handleInputChange}
            minLength={16}
            maxLength={16}

          />
          </Col>
          <Col sm={4}>
            <Input
              required
              id="paymentMethod"
              name="method"
              type="select"
              value={paymentMethodFormObj.method}
              onChange={handleInputChange}
            >
              <option value=''></option>
              <option>Credit</option>
              <option>Debit</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="expDate" sm={2}>
            ExpDate
          </Label>
          <Col sm={4}>
          <Input
            required
            id="expDate"
            name="expDate"
            placeholder="mmyy"
            value={paymentMethodFormObj.expDate}
            onChange={handleInputChange}
            minLength={4}
            maxLength={4}

          />
          </Col>
          <Label for="securityCode" sm={2}>
            CVC
          </Label>
          <Col sm={4}>
          <Input
            required
            id="securityCode"
            name="securityCode"
            placeholder="3-4 digit security code"
            value={paymentMethodFormObj.secturityCode}
            onChange={handleInputChange}
            minLength={3}
            maxLength={4}
          />
          </Col>
        </FormGroup>
        <Button color= 'primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
}

PaymentMethodForm.propTypes = {
  user: PropTypes.any,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};

export default PaymentMethodForm;
