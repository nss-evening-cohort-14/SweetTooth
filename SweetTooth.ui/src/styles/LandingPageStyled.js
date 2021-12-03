import { UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3%;
`;

const LandingCarousel = styled(UncontrolledCarousel)`
  width: 50%;
  height: auto;
  magin: 2%;
  display: block;
  position: absolute;
  top: 25%;
  left: 25%;
  padding-right: 2%;
  padding-left: 2%;
`;

const LandingPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  display: inline-block;
  width: 50%;
  border-radius: 50%;
  padding 20x;
`;

const LandingButtonContainer = styled.div`
  width: 25%;
  padding-top: 10%;
`;

const LandingInfoContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const LoginContainer = styled.div`
  display: block;
  postion: absolute;
  top: 25%;
  left: 2%;
`;

const LandingPageTitle = styled.div`
  padding-bottom: 3%;
  font-size: 35px;
  font-weight: bold;
  color: #fc9dad;
`;

const ProfileInfo = styled.h4`
  padding-bottom: 10px;
`;

// const InfoCarouselContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   Width: 100%;
// `;

export {
  LandingPageContainer,
  LandingPageLogo,
  LandingButtonContainer,
  LandingPageTitle,
  LandingCarousel,
  LoginContainer,
  LandingInfoContainer,
  ProfileInfo
};
