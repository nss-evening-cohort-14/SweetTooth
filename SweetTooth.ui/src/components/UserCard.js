import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function UserCard({
  id, firebaseId, admin, firstName, lastName, email, profileUrl, dateCreated, moodId, softDelete
}) {
  return (
    <Row className='border'>
      <Col>{id}</Col>
      <Col>{firebaseId}</Col>
      <Col>{admin}</Col>
      <Col>{firstName}</Col>
      <Col>{lastName}</Col>
      <Col>{email}</Col>
      <Col>{profileUrl}</Col>
      <Col>{dateCreated}</Col>
      <Col>{moodId}</Col>
      <Col>{softDelete}</Col>
    </Row>
  );
}

UserCard.propTypes = {
  id: PropTypes.string,
  firebaseId: PropTypes.string,
  admin: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  profileUrl: PropTypes.string,
  dateCreated: PropTypes.string,
  moodId: PropTypes.string,
  softDelete: PropTypes.bool,
};
export default UserCard;
