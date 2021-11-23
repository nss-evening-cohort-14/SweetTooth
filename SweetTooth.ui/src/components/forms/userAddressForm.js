import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
import { createNewUserAddress, getByAddressId, updateUserAddress } from '../../helpers/data/userAddressData';

function UserAddressForm({
  user, setUserAddresses, userAddressInfo
}) {
  const [userAddressFormObj, setUserAddressFormObj] = useState({
    id: userAddressInfo?.id,
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
    debugger;
    if (userAddressFormObj.id !== undefined) {
      getByAddressId(userAddressFormObj.id)
        .then(() => {
          updateUserAddress(userAddressFormObj)
            .then((resp) => setUserAddresses(resp));
        });
    } else {
      createNewUserAddress(userAddressFormObj).then((resp) => {
        setUserAddresses(resp);
      });
    }
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
            required
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
              required
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
            required
            id="state"
            name="state"
            placeholder="TN"
            onChange={handleInputChange}
            value={userAddressFormObj.state.toUpperCase()}
            minLength={2}
            maxLength={2}
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
            minLength={5}
            maxLength={5}
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

UserAddressForm.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func
};

export default UserAddressForm;
