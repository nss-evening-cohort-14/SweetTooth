import React from 'react';
import PropTypes from 'prop-types';
// import {
//   Container
// } from 'reactstrap';
import { Container } from 'reactstrap';
import PaymentMethodCard from './PaymentMethodCard';
import PaymentMethodModal from './modals/PaymentMethodModal';
import UserAddressModal from './modals/UserAddressModal';
import UserAddressTable from './UserAddressTable';
import logo from '../Assets/SweetToothLogo.png';
import {
  UserPageContainer, UserPageLogo, UserInfoContainer, UserSidebar, UserPageHeader, UserPageSectionHeader, UserPageSideBarText
} from '../styles/UserPageStyled';

export default function UserProfile({
  user, userAddresses, setUserAddresses, paymentMethodsArray, setPaymentMethodsArray
}) {
  return (
  <div style={{
    backgroundColor: 'lightgray',
    padding: '20px'
  }}>
    <UserPageHeader>
      <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
          { 'User Profile' }
      <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
    </UserPageHeader>

    <UserPageContainer>
      <UserInfoContainer>
        <UserPageSectionHeader>
          {'Addresses'}
        </UserPageSectionHeader>
        <Container style={{ paddingBottom: '10px' }}>
          {
          userAddresses.length > 0
            ? <UserAddressTable
              user={user}
              userAddresses={userAddresses}
              setUserAddresses={setUserAddresses}
              />
            : '*******Please Add an Address*******'
          }
        </Container>
        <UserPageSectionHeader>
          {'Payment Methods'}
        </UserPageSectionHeader>
      <>
        {
          paymentMethodsArray.length > 0
            ? paymentMethodsArray?.map((paymentMethodInfo) => (
              paymentMethodInfo.softDelete === false
                ? <PaymentMethodCard
                    key={paymentMethodInfo.id}
                    user={user}
                    paymentMethodsArray={paymentMethodsArray}
                    setPaymentMethodsArray={setPaymentMethodsArray}
                    paymentMethodInfo={paymentMethodInfo}
                  >
                  </PaymentMethodCard>
                : ''
            ))
            : '*******Please Add a Payment Method*******'
        }
      </>
      </UserInfoContainer>

      <UserSidebar>
        <UserPageLogo src={logo} />
        <hr/>
        <UserPageSideBarText>{user.firstName} {user.lastName}</UserPageSideBarText>
        <UserPageSideBarText>{user.email}</UserPageSideBarText>
        <hr/>
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
  </div>
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
