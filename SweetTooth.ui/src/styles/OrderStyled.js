import styled from 'styled-components';
import { Button, Card } from 'reactstrap';

const CartHeader = styled.div`
  font-size: 40px;
  padding-top: 3%;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProcessButton = styled(Button)`
  background-color: #6bab90;
  border: 0;
  margin: 2%;
`;

const EmptyButton = styled(Button)`
  background-color: #5e4c5a;
  border: 0;
  margin: 2%;
`;

const OrderItemCardStyled = styled.div`
  width: 30%;
  height: 35%;
  margin: 2%;
`;

const CardItemImg = styled.img`
  height: 150px;
`;

const ItemsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3%;
`;

const SubContainer = styled.div`
  width: 100%;
`;

const InfoContainer = styled(Card)`
  margin: 3%;
`;

const TotalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  font-size: 19px;
`;

const TotalInfoTitle = styled.div`
  font-weight: bold; 
`;

export {
  OrderItemCardStyled,
  CartContainer,
  ItemsContainer,
  InfoContainer,
  CartHeader,
  TotalInfoContainer,
  TotalInfoTitle,
  CardItemImg,
  SubContainer,
  ButtonContainer,
  EmptyButton,
  ProcessButton
};
