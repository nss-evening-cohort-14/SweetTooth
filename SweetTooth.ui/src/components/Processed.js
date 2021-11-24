import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NumberContainer, ProcessedContainer, ThankYouContainer } from '../styles/ProcessedStyled';
import { getOrderByUserId } from '../helpers/data/OrderData';

function Processed({ user }) {
  const [processedOrder, setProcessedOrder] = useState({});

  useEffect(() => {
    getOrderByUserId(user.id).then((resp) => setProcessedOrder(resp[resp.length - 2]));
  }, []);

  return (
    <ProcessedContainer>
      <ThankYouContainer>
        {user.firstName}, thank you for your purchase!
      </ThankYouContainer>
      <NumberContainer>
        Your order number is {processedOrder.orderNumber}. We will ship your order as soon as possible.
      </NumberContainer>
    </ProcessedContainer>
  );
}

Processed.propTypes = {
  user: PropTypes.any,
};

export default Processed;
