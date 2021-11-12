import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import LandingPageForm from './forms/LandingPageForm';

export default function UserProfile({ user }) {
  const [userAddresses, setUserAddresses] = useState([]);

  return (
    <div>
      <h1>User Profile</h1>
      <LandingPageForm user={user} />

      {
        userAddresses?.map((userAddressInfo) => (
          <Container
            key={userAddressInfo.id}
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
