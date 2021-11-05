import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import OrderItemCardStyled from '../styles/OrderStyled';

function OrderItemCard({ quantity }) {
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
            {quantity}
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

OrderItemCard.propTypes = {
  quantity: PropTypes.number.isRequired
};

export default OrderItemCard;
