import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({
  id, userId, orderDate, orderNumber, total, paymentMethodId, processed, shipped
}) {
  return (
    <div>
      {id}<br/>
      {userId}<br/>
      {orderDate}<br/>
      {orderNumber}<br/>
      {total}<br/>
      {paymentMethodId}<br/>
      {processed}<br/>
      {shipped}<br/>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  orderDate: PropTypes.instanceOf(Date),
  orderNumber: PropTypes.number,
  total: PropTypes.number,
  paymentMethodId: PropTypes.string,
  processed: PropTypes.bool,
  shipped: PropTypes.bool,
};
export default OrderCard;
