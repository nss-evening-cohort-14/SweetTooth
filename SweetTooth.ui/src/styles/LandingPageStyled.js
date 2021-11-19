import styled from 'styled-components';
import logo from '../Assets/SweetToothLogo.png';

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  margin: 5px auto;
`;

const LandingPageLogo = styled.img`
  background-image: url(${logo}) no-repeat center center fixed;
  display: inline-block;
  width: 50%;
  border-radius: 50%;
  padding 20x;
`;

export { LandingPageContainer, LandingPageLogo };
