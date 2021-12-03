import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalHeader
} from 'reactstrap';
import PaymentMethodForm from '../forms/PaymentMethodForm';

function PaymentMethodModal({
  user, paymentMethodsArray, setPaymentMethodsArray
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div style={{ padding: '2%' }}>
      <Button
        outline color='primary' onClick={toggle}>
          New Payment Method
      </Button>
  <Modal
    isOpen={modal} toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Create a New Payment Method
    </ModalHeader>
    <ModalBody>
      <PaymentMethodForm
        user={user}
        paymentMethodsArray={paymentMethodsArray}
        setPaymentMethodsArray={setPaymentMethodsArray}
      />
    </ModalBody>
  </Modal>
    </div>
  );
}

PaymentMethodModal.propTypes = {
  user: PropTypes.any,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};

export default PaymentMethodModal;
