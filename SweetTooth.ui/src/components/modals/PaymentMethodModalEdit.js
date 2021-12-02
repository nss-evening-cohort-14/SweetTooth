import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import PaymentMethodForm from '../forms/PaymentMethodForm';

function PaymentMethodModalEdit({
  user, paymentMethodsArray, setPaymentMethodsArray, ...paymentMethodInfo
}) {
  const [idToUpdate, setIdToUpdate] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = (paymentMethodId, e) => {
    e.preventDefault();
    toggle();
    if (paymentMethodId != null) {
      setIdToUpdate(paymentMethodId);
      console.warn(paymentMethodId);
    }
  };
  return (
    <div style={{ paddingRight: '5%' }}>
       <Button color='info' outline size="sm"
            onClick={(e) => handleClick(paymentMethodInfo.id, e)}
          >
            Edit
          </Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Edit this Payment Method
    </ModalHeader>
    <ModalBody>
    {
      idToUpdate === paymentMethodInfo.id
        ? <PaymentMethodForm
          user={user}
          paymentMethodInfo={paymentMethodInfo}
          paymentMethodsArray={paymentMethodsArray}
          setPaymentMethodsArray={setPaymentMethodsArray}
        />
        : 'did not work'
    }
    </ModalBody>
  </Modal>
    </div>
  );
}

PaymentMethodModalEdit.propTypes = {
  user: PropTypes.any,
  paymentMethodInfo: PropTypes.object,
  paymentMethodsArray: PropTypes.func,
  setPaymentMethodsArray: PropTypes.array,
  idToUpdate: PropTypes.string

};

export default PaymentMethodModalEdit;
