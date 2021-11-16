import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup, Container
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import { LandingPageContainer, LandingPageLogo } from '../styles/LandingPageStyled';
import logo from '../Assets/SweetToothLogo.png';

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

        <Container fluid="sm">
          {user ? '' : <h4>Already have an Account?</h4>}
          {authButtons()}

          {user ? '' : <h5>New to SweetTooth? Then you&#39;re in for a treat!</h5>}
          {user
            ? <Button tag={Link} to={'/user-profile'}
                outline color='info'>
                View Your Profile</Button>

            : <Button outline color='info' onClick={signInUser}>
              Create an Account</Button>
          }
        </Container>
      </Container>
    </LandingPageContainer>
  );
}

LandingPage.propTypes = {
  user: PropTypes.any,
};

export default LandingPage;
