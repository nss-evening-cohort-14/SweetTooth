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
  box-shadow: 0px 0px 5px grey;
  margin: 20px
  font-weight: bold;
  font-size: 15px;
`;

const UserPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  width: 50%;
  border-radius: 50%;
`;

const UserSidebar = styled.div`
  margin: auto
  border: solid 1px;
  box-shadow: 0px 0px 5px grey;
  margin: 20px
`;

export {
  UserPageContainer, UserPageHeader, UserInfoContainer, UserPageLogo, UserSidebar
};
