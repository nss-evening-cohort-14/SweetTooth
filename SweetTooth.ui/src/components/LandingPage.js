import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup, Container
} from 'reactstrap';
import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';
import { signInUser, signOutUser } from '../helpers/auth';
import LandingPageModal from './LandingPageModal';

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  // border: 1px solid gray;
  padding: 10px;
  margin: 5px auto;
  // border-radius: 5px;
  // background-color: rgb(16,24,30);
`;

const LandingPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  display: inline-block;
  width: 50%;
  border-radius: 50%;
  padding 20x;
`;
function LandingPage({ user }) {
  const authButtons = () => (
    <div>
      {
        user !== null
        && <ButtonGroup>
          {
            user
              ? <Button outline color='danger' onClick={signOutUser}>Logout</Button>
              : <Button outline color='success' onClick={signInUser}>Login</Button>
          }
        </ButtonGroup>
      }
      </div>
  );
  return (
    <LandingPageContainer>
      <Container
        className="bg-light border"
        fluid="md"
      >
        <h1>Welcome to SweetTooth!</h1>
        <LandingPageLogo src={logo} alt="Logo"/>
          {user ? '' : <h4>Already have an Account?</h4>}
          {authButtons()}
          {user ? '' : <h5>New to SweetTooth? Then you&#39;re in for a treat!</h5>}
          <LandingPageModal/>
        {/* {
          user
            ? ''
            : <Button outline color='info' onClick={signInUser}>Create your Account</Button>
        } */}
      </Container>
    </LandingPageContainer>
  );
}

LandingPage.propTypes = {
  user: PropTypes.any,
};

export default LandingPage;
