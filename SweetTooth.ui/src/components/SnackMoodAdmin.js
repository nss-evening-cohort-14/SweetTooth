import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { getSnackMoods } from '../helpers/data/SnackMood';
import SnackMoodCard from './SnackMoodCard';
import SnackMoodForm from './forms/SnackMoodForm';
import { getSnacks } from '../helpers/data/SnackData';
import { getMoods } from '../helpers/data/MoodData';

function SnackMoodAdmin() {
  const history = useHistory();

  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  const [snackMoods, setSnackMoods] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    getSnackMoods().then(setSnackMoods);
    getSnacks().then(setSnacks);
    getMoods().then(setMoods);
  }, []);

  return (
    <div>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
      <SnackMoodForm
            snacks={snacks}
            moods={moods}
            setSnackMoods={setSnackMoods}
          />
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
