import React from 'react';
import PropTypes from 'prop-types';

function MoodCard({
  id, name
}) {
  return (
    <div>
      {id}<br/>
      {name}
    </div>
  );
}

MoodCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
export default MoodCard;
