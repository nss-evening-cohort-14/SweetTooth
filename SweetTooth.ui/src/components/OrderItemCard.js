import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import { OrderItemCardStyled } from '../styles/OrderStyled';

function OrderItemCard({
  quantity, name, image, price
}) {
  return (
    <OrderItemCardStyled>
       <Card>
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {`$${price}`}
          </CardSubtitle>
          <CardText>
            {quantity}
          </CardText>
        </CardBody>
        <img
          alt="Card image cap"
          src={image}
          width="100%"
        />
    </Card>
    </OrderItemCardStyled>
  );
}

OrderItemCard.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

export default OrderItemCard;
