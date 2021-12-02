import React from 'react';
import PropTypes from 'prop-types';
import { deleteSnackMood } from '../helpers/data/SnackMood';

function SnackMoodCard({
  id,
  moodId,
  snackId,
  moodName,
  snackName,
  setSnackMoods
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{moodId}</td>
      <td>{snackId}</td>
      <td>{moodName}</td>
      <td>{snackName}</td>
      <td><button type='submit' className="btn btn-outline-danger btn-sm" onClick={() => deleteSnackMood(id).then(setSnackMoods)}>Delete</button></td>
    </tr>
  );
}

SnackMoodCard.propTypes = {
  id: PropTypes.string,
  moodId: PropTypes.string,
  snackId: PropTypes.string,
  moodName: PropTypes.string,
  snackName: PropTypes.string,
  setSnackMoods: PropTypes.func
};

export default SnackMoodCard;
