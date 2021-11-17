import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup, Card, CardBody
} from 'reactstrap';
import PaymentMethodForm from './forms/PaymentMethodForm';
import { getPayMethodById, softDeletePaymentMethod } from '../helpers/data/paymentMethodData';

function PaymentMethodCard({
  user, paymentMethodsArray, setPaymentMethodsArray, ...paymentMethodInfo
}) {
  const [editNow, setEditNow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleClick = (type) => {
    switch (type) {
      case 'softDelete':
        if (paymentMethodInfo) {
          getPayMethodById(paymentMethodInfo.id)
            .then(() => {
              softDeletePaymentMethod(paymentMethodInfo)
                .then((resp) => setPaymentMethodsArray(resp));
            });
        }
        break;
      case 'edit':
        if (paymentMethodInfo != null) {
          setIdToUpdate(paymentMethodInfo.id);
          setEditNow((prevState) => !prevState);
        }
        break;
      default:
        console.warn('nothing selected');
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
        <ButtonGroup>
          <Button color='info' outline
            onClick={(e) => handleClick('edit', paymentMethodInfo.id, e)}
          >
            {idToUpdate === paymentMethodInfo.id && editNow
              ? 'Close' : 'Edit' }
          </Button>
          <Button color='danger' outline
            onClick={(e) => handleClick('softDelete', paymentMethodInfo.id, e)}
          >
            Delete
          </Button>
        </ButtonGroup>
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
  user: PropTypes.any,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};

export default PaymentMethodCard;
