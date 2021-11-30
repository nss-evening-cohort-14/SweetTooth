import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
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
    <div>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
        <h2>Moods</h2>
      <Row className='border'>
        <Col>id</Col>
        <Col>name</Col>
      </Row>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            id={mood.id}
            name={mood.name}
          />
        ))}
    </div>
  );
}
