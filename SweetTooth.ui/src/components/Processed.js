import React from 'react';
import PropTypes from 'prop-types';
import { NumberContainer, ProcessedContainer, ThankYouContainer } from '../styles/ProcessedStyled';

function Processed({ number, firstName }) {
  return (
    <ProcessedContainer>
      <ThankYouContainer>
        {firstName}, thank you for your purchase!
      </ThankYouContainer>
      <NumberContainer>
        Your order number is {number}. We will ship your order as soon as possible.
      </NumberContainer>
    </ProcessedContainer>
  );
}

Processed.propTypes = {
  number: PropTypes.number,
  firstName: PropTypes.string
};

export default Processed;
