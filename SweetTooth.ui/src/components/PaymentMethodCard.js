import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody } from 'reactstrap';
import PaymentMethodForm from './forms/PaymentMethodForm';

function PaymentMethodCard({
  user, paymentMethodsArray, setPaymentMethodsArray, ...paymentMethodInfo
}) {
  const [editNow, setEditNow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleClick = (id) => {
    if (id) {
      setIdToUpdate(id);
      setEditNow((prevState) => !prevState);
    } else {
      console.warn('no id to get');
    }
  };
  return (
    <Card
            key={paymentMethodInfo.id}
            >
              <CardBody>
                <p>{paymentMethodInfo?.method}</p>
                <p>{paymentMethodInfo?.cardNumber}</p>
                <p>{paymentMethodInfo?.expDate}</p>
                <p>{paymentMethodInfo?.securityCode}</p>
                <Button color='info' outline
                  onClick={(e) => handleClick(paymentMethodInfo.id, e)}
                  >
                  {idToUpdate === paymentMethodInfo.id && editNow
                    ? 'Close' : 'Edit' }
                </Button>
              </CardBody>
            {
              idToUpdate === paymentMethodInfo.id
                ? editNow && <PaymentMethodForm
                  user={user}
                  paymentMethodsArray={paymentMethodsArray}
                  setPaymentMethodsArray={setPaymentMethodsArray}
                  {...paymentMethodInfo}
              />
                : ''
            }
            </Card>
  );
}

PaymentMethodCard.propTypes = {

};

export default PaymentMethodCard;

PaymentMethodCard.propTypes = {
  user: PropTypes.any,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};
