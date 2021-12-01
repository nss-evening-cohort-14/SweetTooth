import React from 'react';
import PropTypes from 'prop-types';

function MoodCard({
  id, name
}) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
}

MoodCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
export default MoodCard;
