import { UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const LandingPageContainer = styled.div`
  width: 100%;
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
`;

const LandingPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  display: inline-block;
  width: 50%;
  border-radius: 50%;
  padding 20x;
`;

const LandingButtonContainer = styled.div`
  margin: 2%;
  width: 25%;
`;

const LandingInfoContainer = styled.div`
  display: flex; 
  justify-content: space-between;
`;

const LoginContainer = styled.div`
  display: block;
  postion: absolute;
  top: 25%;
  left: 2%;
`;

const LandingPageTitle = styled.div`
  padding: 2%;
  font-size: 35px;
  font-weight: bold;
  color: #fc9dad;
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
  LandingInfoContainer
};
