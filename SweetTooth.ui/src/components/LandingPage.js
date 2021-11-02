import React from 'react';
// import PropTypes from 'prop-types';
import {
  Col, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  border: 1px solid gray;
  padding: 10px;
  margin: 5px auto;
  border-radius: 5px;
  // background-color: rgb(16,24,30);
  @media only screen and (max-width: 700px) {
    width: 90%;
  }
  .todo-content {
    padding: 10px;
    word-break: break-all;
  }
  .far {
    cursor: pointer;
  }
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      {/* <Container
        className="bg-light border"
        fluid="md"
      > */}

        <h1>Welcome to SweetTooth!</h1>
        <Col>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>
          <Button>
            Submit
          </Button>
        </Form>
        </Col>
      {/* </Container> */}
    </LandingPageContainer>
  );
}

// LandingPage.propTypes = {

// };

export default LandingPage;
