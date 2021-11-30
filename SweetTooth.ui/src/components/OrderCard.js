import React from 'react';
// import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function OrderCard({
  id, userId, orderDate, orderNumber, total, paymentMethodId, processed, shipped
}) {
  return (
    <>
        <tr key={id} >
            <td>{id}</td>
            <td>{userId}</td>
            <td>{orderDate}</td>
            <td>{orderNumber}</td>
            <td>{total}</td>
            <td>{paymentMethodId}</td>
            <td> {{ processed } === 0 ? 'processed' : 'not'}</td>
            <td>{shipped}</td>
        </tr>
  </>
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
