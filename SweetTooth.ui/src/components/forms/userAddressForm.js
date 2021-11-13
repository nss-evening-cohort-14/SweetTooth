import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
import { createNewUserAddress } from '../../helpers/data/userAddressData';

function LandingPageForm({
  user, userAddresses, setUserAddresses, ...userAddressInfo
}) {
  const [userAddressFormObj, setUserAddressFormObj] = useState({
    userId: user?.id,
    street: userAddressInfo?.street || '',
    city: userAddressInfo?.city || '',
    state: userAddressInfo?.state || '',
    zip: userAddressInfo?.zip || ''
  });

  const handleInputChange = (e) => {
    setUserAddressFormObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUserAddress(userAddressFormObj).then((resp) => {
      setUserAddresses(resp);
    });
    // if (userAddressFormObj.id) {
    //   updateUser(userAddressFormObj)
    //     .then((response) => setUserAddresses(response));
    // } else {
    //   createNewUserAddress(userAddressFormObj)
    //     .then((response) => (setUserAddresses(response)));
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
            value={userAddressFormObj.street}
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
              value={userAddressFormObj.city}
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
              value={userAddressFormObj.state}
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
            value={userAddressFormObj.zip}
          />
          </Col>
        </FormGroup>
        <hr/>
        <Button color= 'primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

LandingPageForm.propTypes = {
  user: PropTypes.any,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func
};

export default LandingPageForm;
