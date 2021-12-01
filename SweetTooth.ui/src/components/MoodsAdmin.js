import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import { getMoods } from '../helpers/data/MoodData';
import MoodCard from './MoodCard';

export default function MoodsAdmin() {
  const [moods, setMoods] = useState([]);

  const history = useHistory();
  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  useEffect(() => {
    getMoods().then(setMoods);
  }, []);

  return (
    <Container>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
        <h2>Moods</h2>
        {' '}
        <Table hover bordered>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Mood Name
              </th>
            </tr>
          </thead>
          <tbody>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            id={mood.id}
            name={mood.name}
          />
        ))}
          </tbody>
      </Table>
    </Container>
  );
}
