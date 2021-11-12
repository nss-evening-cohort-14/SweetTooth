import styled from 'styled-components';

const OrderItemCardStyled = styled.div`
  width: 100%
  height: Auto;
`;

const ItemsContainer = styled.div`
  width: 25%;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2%;
`;

const InfoContainer = styled.div`
  margin: 2%;
`;

export {
  OrderItemCardStyled, CartContainer, ItemsContainer, InfoContainer
};
