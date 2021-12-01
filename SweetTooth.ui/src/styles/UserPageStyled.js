import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const UserPageContainer = styled.div`
  display: flex
  align-items: stretch
  justify-content: center;
  // align-items: center;
  // border-style: solid;
  // box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const UserInfoContainer = styled.div`
  width: 70%
`;

const UserPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  width: 25%;
  border-radius: 50%;
  padding 2%;
`;

const UserSidebar = styled.div`
  width: 30%
  // border-style: solid;
  // box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

export {
  UserPageContainer, UserInfoContainer, UserPageLogo, UserSidebar
};
