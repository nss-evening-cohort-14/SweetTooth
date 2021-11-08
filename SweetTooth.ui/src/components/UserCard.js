import React from 'react';
import PropTypes from 'prop-types';

function UserCard({
  id, firebaseId, admin, firstName, lastName, email, profileUrl, dateCreated, moodId, softDelete
}) {
  return (
    <div>
      {id}<br/>
      {firebaseId}<br/>
      {admin}<br/>
      {firstName}<br/>
      {lastName}<br/>
      {email}<br/>
      {profileUrl}<br/>
      {dateCreated}<br/>
      {moodId}<br/>
      {softDelete}<br/>
    </div>
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
  dateCreated: PropTypes.instanceOf(Date),
  moodId: PropTypes.string,
  softDelete: PropTypes.bool,
};
export default UserCard;
