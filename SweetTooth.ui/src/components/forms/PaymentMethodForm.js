import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
import { createNewPaymentMethod, getPayMethodById, updatePaymentMethod } from '../../helpers/data/paymentMethodData';

function PaymentMethodForm({
  user, paymentMethodInfo, setPaymentMethodsArray
}) {
  const [paymentMethodFormObj, setPaymentMethodFormObj] = useState({
    id: paymentMethodInfo?.id,
    userId: user?.id,
    method: paymentMethodInfo?.method || '',
    cardNumber: paymentMethodInfo?.cardNumber || '',
    expDate: paymentMethodInfo?.expDate || '',
    securityCode: paymentMethodInfo?.securityCode || '',
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
    if (paymentMethodFormObj?.id !== undefined) {
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
      <Form onSubmit={(e) => handleSubmit(e)}>
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
            value={paymentMethodFormObj.securityCode}
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
  paymentMethodInfo: PropTypes.object,
  setPaymentMethodsArray: PropTypes.func
};

export default PaymentMethodForm;
