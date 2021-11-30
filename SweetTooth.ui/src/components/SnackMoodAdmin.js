import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { getSnackMoods } from '../helpers/data/SnackMood';
import SnackMoodCard from './SnackMoodCard';

function SnackMoodAdmin() {
  const history = useHistory();

  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  const [snackMoods, setSnackMoods] = useState([]);
  useEffect(() => {
    getSnackMoods().then(setSnackMoods);
  }, []);

  return (
    <div>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>moodId</th>
            <th scope='col'>snackId</th>
            <th scope='col'>moodName</th>
            <th scope='col'>snackName</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>enter MoodId</td>
            <td>enter SnackId</td>
            <td>corresponding MoodName</td>
            <td>corresponding SnackName</td>
            <td><button type='submit' className="btn btn-outline-success btn-sm">Add</button></td>
          </tr>
          {
            snackMoods.map((snackMood) => (
              <SnackMoodCard
                key={snackMood.id}
                id={snackMood.id}
                moodId={snackMood.moodId}
                snackId={snackMood.snackId}
                moodName={snackMood.moodName}
                snackName={snackMood.snackName}
                setSnackMoods={setSnackMoods}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SnackMoodAdmin;
