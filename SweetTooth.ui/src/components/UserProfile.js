import React from 'react';
import PropTypes from 'prop-types';
// import {
//   Container
// } from 'reactstrap';
import PaymentMethodCard from './PaymentMethodCard';
import PaymentMethodModal from './modals/PaymentMethodModal';
import UserAddressModal from './modals/UserAddressModal';
import UserAddressTable from './UserAddressTable';
import logo from '../Assets/SweetToothLogo.png';
import {
  UserPageContainer, UserPageLogo, UserInfoContainer, UserSidebar
} from '../styles/UserPageStyled';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  return (
    <UserPageContainer>
      <UserInfoContainer>
      {
      userAddresses.length > 0
        ? <UserAddressTable
          user={user}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
          />
        : ''
      }
      {
      <>
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
      </>
      }
      </UserInfoContainer>

      <UserSidebar>
        <UserPageLogo src={logo} />
        { <h4> Hi, {user.firstName}!</h4> }
        { <h5> Update your account details here.</h5> }
        <UserAddressModal
          user={user}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
        />
        <PaymentMethodModal
          user={user}
          paymentMethodsArray={paymentMethodsArray}
          setPaymentMethodsArray={setPaymentMethodsArray}
        />
      </UserSidebar>
    </UserPageContainer>
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
