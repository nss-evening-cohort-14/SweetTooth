import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function MoodCard({
  id, name
}) {
  return (
    <Row className='border'>
      <Col>{id}</Col>
      <Col>{name}</Col>
    </Row>
  );
}

MoodCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
export default MoodCard;
