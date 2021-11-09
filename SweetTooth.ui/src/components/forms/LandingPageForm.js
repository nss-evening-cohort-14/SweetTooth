import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
import createNewUserAddress from '../../helpers/data/userAddressData';
// import { signInUser } from '../../helpers/auth';

function LandingPageForm() {
  const [userAddressObj, setUserAddressObj] = useState({});
  const [userAddress, setUserAddress] = useState({
    street: userAddressObj?.street || '',
    city: userAddressObj?.city || '',
    state: userAddressObj?.state || '',
    zip: userAddressObj?.zip || ''
  });

  const handleInputChange = (e) => {
    setUserAddress((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(userAddress);
    console.warn(setUserAddressObj);
    createNewUserAddress(userAddress);
    // if (userObject.firebaseId) {
    //   updateUser(project)
    //     .then((response) => setUser(response));
    // } else {
    //   signInUser(user).then((userArray) => (setProjects(usersArray)));
    // }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="street" sm={2}>
            Address
          </Label>
          <Col sm={10}>
          <Input
            id="street"
            name="street"
            placeholder="1234 Main St"
            value={userAddressObj.street}
            onChange={handleInputChange}

          />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              id="city"
              name="city"
              placeholder="City"
              onChange={handleInputChange}
              value={userAddressObj.city}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="state" sm={2}>
            State
          </Label>
          <Col sm={3}>
          <Input
            id="state"
            name="state"
            placeholder="TN"
            onChange={handleInputChange}
              value={userAddressObj.state}
          />
          </Col>
          <Label for="zip" sm={1}>
            Zip
          </Label>
          <Col sm={6}>
          <Input
            id="zip"
            name="zip"
            placeholder="37217"
            onChange={handleInputChange}
            value={userAddressObj.zip}
          />
          </Col>
        </FormGroup>
        <hr/>
        {/* paymentInfo form starts here */}
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
  );
}

LandingPageForm.propTypes = {

};

export default LandingPageForm;
