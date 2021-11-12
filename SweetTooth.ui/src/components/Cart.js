import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';
import { CartContainer, ItemsContainer } from '../styles/OrderStyled';

function Cart({ user }) {
  const [order, setOrder] = useState(
    {
      id: '',
      orderDate: '',
      orderItems: [],
      orderNumber: 0,
      paymentMethod: null,
      paymentMethodId: '',
      processed: false,
      shipped: false,
      total: 0,
      userId: ''
    }
  );

  console.warn(order);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getUnprocessedOrderByUserId(user.id).then((res) => {
      setOrder(res);
      setOrderItems(res.orderItems);
    });
  }, []);

  return (
    <CartContainer>
      <ItemsContainer>
      {
          orderItems.map((item, i) => (
            <OrderItemCard
            key={i}
            quantity={item.quantity}
            name={item.itemSnack.name}
            price={item.itemSnack.price}
            image={item.itemSnack.image}
            />
          ))
        }
      </ItemsContainer>
      <div>
        <Card
        color="light"
        >
        <CardBody>
          <CardTitle tag="h5">
            Select a Payment Method
          </CardTitle>
          <div>
            {
              user.paymentMethods?.map((pm, i) => (
                <FormGroup check
                key={i}>
                <Input
                  id="checkbox1"
                  type="checkbox"
                />
                <Label check>
                **** **** **** {pm.cardNumber.slice([-4])}
                </Label>
              </FormGroup>
              ))
            }
          </div>
        </CardBody>
        </Card>
        <Card>
          <CardBody>
          <CardTitle tag="h5">
            Select an Address
          </CardTitle>
          <div>
            {
              user.addresses?.map((ad, i) => (
                <FormGroup check
                key={i}>
                <Input
                  id="checkbox1"
                  type="checkbox"
                />
                <Label check>
                <p>{ad.street} {ad.city}, {ad.state}, {ad.zip}</p>
                </Label>
              </FormGroup>
              ))
            }
          </div>
          </CardBody>
        </Card>
      </div>
    </CartContainer>
  );
}

Cart.propTypes = {
  user: PropTypes.any
};
export default Cart;
