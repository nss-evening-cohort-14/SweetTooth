import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const UserPageContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

const UserPageHeader = styled.div`
  background-color: white;
  margin: auto;
  width: 99%;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0px 0px 5px grey;
  border-radius: 10px;
`;

const UserPageSectionHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const UserPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  width: 50%;
  border-radius: 50%;
`;

const UserInfoContainer = styled.div`
  background-color: white;
  margin: auto;
  width: 70%;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  border-radius: 10px;
`;

const UserSidebar = styled.div`
  background-color: white;
  margin: auto;
  width: 30%;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  border-radius: 10px;
`;

export {
  UserPageContainer, UserPageHeader, UserInfoContainer, UserPageLogo, UserSidebar, UserPageSectionHeader
};
