import React from 'react';
import PropTypes from 'prop-types';
import {
  Container
} from 'reactstrap';
import PaymentMethodCard from './PaymentMethodCard';
import PaymentMethodModal from './modals/PaymentMethodModal';
import UserAddressModal from './modals/UserAddressModal';
import UserAddressTable from './UserAddressTable';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  // const [editAddressNow, setEditAddressNow] = useState(false);

  return (
    <Container>
        <h1>User Profile</h1>

      <UserAddressModal
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
      <UserAddressTable
        user={user}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />

      <PaymentMethodModal
        user={user}
        paymentMethodsArray={paymentMethodsArray}
        setPaymentMethodsArray={setPaymentMethodsArray}
      />
      {
      <Container>
        {paymentMethodsArray?.map((paymentMethodInfo) => (
          paymentMethodInfo.softDelete === false
            ? <PaymentMethodCard
              key={paymentMethodInfo.id}
              user={user}
              paymentMethodsArray={paymentMethodsArray}
              setPaymentMethodsArray={setPaymentMethodsArray}
              {...paymentMethodInfo}
              >
              </PaymentMethodCard>
            : ''
        ))}
      </Container>
      }
    </Container>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  userAddressInfo: PropTypes.object,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func,
};
