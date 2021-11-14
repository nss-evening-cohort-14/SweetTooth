import styled from 'styled-components';
import { Card } from 'reactstrap';

const CartHeader = styled.div`
  font-size: 40px;
  padding-top: 3%;
  font-weight: bold;
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
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3%;;
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
  CardItemImg
};
