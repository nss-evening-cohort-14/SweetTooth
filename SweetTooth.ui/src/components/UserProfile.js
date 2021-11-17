import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Col, Row, Button, Card, CardBody
} from 'reactstrap';
import UserAddressForm from './forms/userAddressForm';
import PaymentMethodForm from './forms/PaymentMethodForm';
// import getPaymentMethodByPaymentId from '../helpers/data/paymentMethodData';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  const [editNow, setEditNow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');

  const handleClick = (id) => {
    console.warn(id);
    if (id) {
      setIdToUpdate(id);
      setEditNow((prevState) => !prevState);
      // need call to get payment method by its id
    } else {
      console.warn('no id to get');
    }
    // setIdToUpdate((id));
    // switch (i) {
    //   case 'edit':
    //     setEditNow((prevState) => !prevState);
    //     break;
    //   default:
    //     console.warn('nothing selected');
    //     break;
    // }
  };
  return (
    <div>
        <h1>User Profile</h1>

      <UserAddressForm
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
      {
        userAddresses?.map((userAddressInfo) => (
          <Container
            key={userAddressInfo.id}
          >
            <Row>
              <Col>
              {/* <Button color='info' outline onClick={() => handleClick('edit')}>
                {editNow ? 'Close' : 'Edit'}
              </Button> */}
              </Col>
              <Col>
                <Row>{userAddressInfo.street}</Row>
                <Row>{userAddressInfo.city}</Row>
                <Row>{userAddressInfo.state}</Row>
                <Row>{userAddressInfo.zip}</Row>
              </Col>
            </Row>
          </Container>
        ))
        }

      {/* --------------Start payment method stuff---------------- */}

      {
      <Container>
        {paymentMethodsArray?.map((paymentMethodInfo) => (
            <Card
            key={paymentMethodInfo.id}
            >
              <CardBody>
                <p>{paymentMethodInfo?.method}</p>
                <p>{paymentMethodInfo?.cardNumber}</p>
                <p>{paymentMethodInfo?.expDate}</p>
                <p>{paymentMethodInfo?.securityCode}</p>
                <Button color='info' outline
                  // id={paymentMethodInfo.id}
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
        ))}
          </Container>
      }
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};
