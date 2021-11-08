import React from 'react';
import PropTypes from 'prop-types';

function UserCard({
  id, admin, firstName, lastName, dateCreated, moodId
}) {
  return (
    <div>
      {id}<br/>
      {admin}<br/>
      {firstName}<br/>
      {lastName}<br/>
      {dateCreated}<br/>
      {moodId}<br/>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.string,
  admin: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateCreated: PropTypes.instanceOf(Date),
  moodId: PropTypes.string,
};
export default UserCard;
