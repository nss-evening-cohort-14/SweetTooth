import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import OrderItemCardStyled from '../styles/OrderStyled';

export default function OrderItemCard() {
  return (
    <OrderItemCardStyled>
       <Card>
        <CardBody>
          <CardTitle tag="h5">
            Snack name
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Price
          </CardSubtitle>
          <CardText>
            Quantity
          </CardText>
        </CardBody>
        <img
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          width="100%"
        />
    </Card>
    </OrderItemCardStyled>
  );
}
