import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup, UncontrolledCarousel
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';
import { LandingButtonContainer, LandingPageContainer } from '../styles/LandingPageStyled';

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
      <div>
        <h1>Welcome to SweetTooth!</h1>
        <LandingButtonContainer>
          {user ? '' : <h4>Already have an Account?</h4>}
          {authButtons()}

          {user ? '' : <h5>New to SweetTooth? Then you&#39;re in for a treat!</h5>}
          {user
            ? <Button tag={Link} to={'/user-profile'}
                style={{ backgroundColor: '#6bab90', border: 'none', marginLeft: '4px' }}>
                View Your Profile</Button>

            : <Button style={{ backgroundColor: '#6bab90', border: 'none', marginLeft: '4px' }}
              onClick={signInUser}>
              Create an Account</Button>
          }
        </LandingButtonContainer>
        <UncontrolledCarousel
  items={[
    {
      altText: '',
      caption: '',
      key: 1,
      src: 'https://livewallpaperhd.com/wp-content/uploads/2017/10/Nice-Chocolate-Wallpaper.jpg'
    },
    {
      altText: '',
      caption: '',
      key: 2,
      src: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PIL5MJA3YUYYPBJWET7DS2UPQA.jpg'
    },
    {
      altText: '',
      caption: '',
      key: 3,
      src: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'
    },
    {
      altText: '',
      caption: '',
      key: 4,
      src: 'https://images.unsplash.com/photo-1588756264692-d396bca41fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
  ]}
  />
      </div>
    </LandingPageContainer>
  );
}

LandingPage.propTypes = {
  user: PropTypes.any,
};

export default LandingPage;
