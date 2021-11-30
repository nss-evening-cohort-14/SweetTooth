import React from 'react';
import PropTypes from 'prop-types';

function UserCard({
  id, firebaseId, admin, firstName, lastName, email, dateCreated, moodId, softDelete
}) {
  return (
    <tr key={id}>
      <td>
        {
          softDelete === false
            ? <i className="fas fa-user"></i>
            : <i className="fas fa-user-slash"></i>
        }
      </td>
      <td>{id}</td>
      <td>{firebaseId}</td>
      <td>
        {
          admin === false
            ? <i className="fas fa-user-times"></i>
            : <i className="fas fa-crown"></i>
        }
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      {/* <td>{profileUrl}</td> */}
      <td>{dateCreated}</td>
      <td>{moodId}</td>
    </tr>
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
