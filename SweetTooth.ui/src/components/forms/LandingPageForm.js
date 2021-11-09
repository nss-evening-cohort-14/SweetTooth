import React from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label
} from 'reactstrap';
// import { signInUser } from '../../helpers/auth';

const handleSubmit = (e) => {
  e.preventDefault();
  console.warn('you clicked submit');
  // if (userObject.firebaseId) {
  //   updateUser(project)
  //     .then((response) => setUser(response));
  // } else {
  //   signInUser(user).then((userArray) => (setProjects(usersArray)));
  // }
};
function LandingPageForm() {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="exampleAddress" sm={2}>
            Address
          </Label>
          <Col sm={10}>
          <Input
            id="exampleAddress"
            name="address"
            placeholder="1234 Main St"
          />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleCity" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              id="exampleCity"
              name="city"
              placeholder="City"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleState" sm={2}>
            State
          </Label>
          <Col sm={3}>
          <Input
            id="exampleState"
            name="state"
            placeholder="TN"
          />
          </Col>
          <Label for="exampleZip" sm={1}>
            Zip
          </Label>
          <Col sm={6}>
          <Input
            id="exampleZip"
            name="zip"
            placeholder="37217"
          />
          </Col>
        </FormGroup>
        <hr/>
        <FormGroup row>
          <Label for="CardNumber" sm={2}>
            Number
          </Label>
          <Col sm={6}>
          <Input
            id="CardNumber"
            name="number"
            placeholder="1234567890123456"
          />
          </Col>
          <Col sm={4}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
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
          <Label for="exampleDate" sm={2}>
            ExpDate
          </Label>
          <Col sm={4}>
          <Input
            id="expDate"
            name="expDate"
            placeholder="mmyy"
          />
          </Col>
          <Label for="exampleDate" sm={2}>
            CVC
          </Label>
          <Col sm={4}>
          <Input
            id="securityCode"
            name="securityCode"
            placeholder="####"
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
