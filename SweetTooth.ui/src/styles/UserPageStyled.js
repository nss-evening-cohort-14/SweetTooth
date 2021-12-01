import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const UserPageContainer = styled.div`
  display: flex
  align-items: stretch
  justify-content: center;

`;

const UserPageHeader = styled.div`
  font-size: 40px;
  padding-top: 1%;
  font-weight: bold;
`;

const UserInfoContainer = styled.div`
  // width: 70%
`;

const UserPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  width: 25%;
  border-radius: 50%;
  padding 2%;
`;

const UserSidebar = styled.div`
  // width: 30%
  // border: solid 1px;
`;

export {
  UserPageContainer, UserPageHeader, UserInfoContainer, UserPageLogo, UserSidebar
};
