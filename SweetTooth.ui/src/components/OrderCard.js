import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function OrderCard({
  id, userId, orderDate, orderNumber, total, paymentMethodId, processed, shipped
}) {
  return (
    <Row className='border'>
      <Col>{id}</Col>
      <Col>{userId}</Col>
      <Col>{orderDate}</Col>
      <Col>{orderNumber}</Col>
      <Col>{total}</Col>
      <Col>{paymentMethodId}</Col>
      <Col>{processed}</Col>
      <Col>{shipped}</Col>
    </Row>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  orderDate: PropTypes.string,
  orderNumber: PropTypes.number,
  total: PropTypes.number,
  paymentMethodId: PropTypes.string,
  processed: PropTypes.bool,
  shipped: PropTypes.bool,
};
export default OrderCard;
