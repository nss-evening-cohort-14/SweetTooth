import React from 'react';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';

function PaymentMethodForm() {
  // const [paymentMethodFormObj, setPaymentMethodFormObj] = useState({
  //   userId: user?.id,
  //   method: paymentMethodInfo?.method || '',
  //   cardNumber: paymentMethodInfo?.cardNumber || '',
  //   expDate: paymentMethodInfo?.expDate || '',
  //   secturityCode: paymentMethodInfo?.secturityCode || '',

  // });

  const handleInputChange = (e) => {
    // setPaymentMethodFormObj((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value
    // }));
    console.warn(e);
  };

  const handleSubmit = () => {
    // createNewPaymentMethod().then(() => console.warn(paymentMethod))
    console.warn('you submitted a new payment method');
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
            id="cardNumber"
            name="cardNumber"
            placeholder="1234567890123456"
            onChange={handleInputChange}
          />
          </Col>
          <Col sm={4}>
            <Input
              id="paymentMethod"
              name="method"
              type="select"
              onChange={handleInputChange}
            >
              <option>
                Credit
              </option>
              <option>
                Debit
              </option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="expDate" sm={2}>
            ExpDate
          </Label>
          <Col sm={4}>
          <Input
            id="expDate"
            name="expDate"
            placeholder="mmyy"
            onChange={handleInputChange}
          />
          </Col>
          <Label for="securityCode" sm={2}>
            CVC
          </Label>
          <Col sm={4}>
          <Input
            id="securityCode"
            name="securityCode"
            placeholder="####"
            onChange={handleInputChange}
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

export default PaymentMethodForm;
