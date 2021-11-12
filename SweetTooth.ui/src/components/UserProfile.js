import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import LandingPageForm from './forms/LandingPageForm';

export default function UserProfile({
  user, userAddresses, setUserAddresses
}) {
  return (
    <div>
      <h1>User Profile</h1>
      <LandingPageForm
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />

      {
        userAddresses.map((userAddressInfo, i) => (
          <Container
            key={i}
            setUserAddresses={setUserAddresses}
            {...userAddressInfo}
          >
           <Row>{userAddressInfo.street}</Row>
           <Row>{userAddressInfo.City}</Row>
           <Row>{userAddressInfo.state}</Row>
           <Row>{userAddressInfo.zip}</Row>
          </Container>
        ))
        }
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func
};
