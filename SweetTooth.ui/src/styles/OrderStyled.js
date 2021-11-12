import styled from 'styled-components';
import { Card } from 'reactstrap';

const CartHeader = styled.div`
  font-size: 40px;
  padding-top: 3%;
  font-weight: bold;
`;

const OrderItemCardStyled = styled.div`
  width: 70%;
  height: Auto;
  margin: 2%;
`;

const ItemsContainer = styled.div`
  width: 25%;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3%;
`;

const InfoContainer = styled(Card)`
  margin: 3%;
`;

export {
  OrderItemCardStyled,
  CartContainer,
  ItemsContainer,
  InfoContainer,
  CartHeader
};
