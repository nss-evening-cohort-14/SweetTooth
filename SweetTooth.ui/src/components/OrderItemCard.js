import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import {
  CardItemImg,
  OrderItemCardStyled,
  TotalInfoContainer,
} from '../styles/OrderStyled';

function OrderItemCard({
  quantity, name, image, price
}) {
  return (
    <OrderItemCardStyled>
       <Card className="border-0">
        <CardBody>
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <TotalInfoContainer>
            <div>
              Price
            </div>
            <div>
              {`$${price}`}
            </div>
          </TotalInfoContainer>
          <TotalInfoContainer>
            <div>
              Quantity
            </div>
            <div>
              {quantity}
            </div>
          </TotalInfoContainer>
        </CardBody>
        <CardItemImg
          alt="Card image cap"
          src={image}
          width="100%"
          className="rounded"
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
