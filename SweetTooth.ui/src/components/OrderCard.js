import React from 'react';
// import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

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
          <td>
            {
              processed === true
                ? <i className="far fa-check-square"></i>
                : <i className="far fa-square"></i>
            }
          </td>
          <td>
            {
              shipped === true
                ? <i className="far fa-check-square"></i>
                : <i className="far fa-square"></i>
            }
          </td>
          <td>
            <Button color='primary' outline size="md"
              onClick={() => console.warn('ship status', shipped)}
              >
              <i className="fas fa-shipping-fast"></i>
            </Button>
          </td>

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
