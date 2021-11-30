import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import SnackCard from './SnackCard';

function SnacksAdmin({ snacks }) {
  const history = useHistory();

  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  return (
    <div>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
       <Row>
        {
        snacks.map((snack) => (
          <SnackCard
            key={snack.id}
            name={snack.name}
            category={snack.category}
            price={snack.price}
            description={snack.description}
            image={snack.image}
          />
        ))}
      </Row>
    </div>
  );
}

SnacksAdmin.propTypes = {
  snacks: PropTypes.array
};

export default SnacksAdmin;
