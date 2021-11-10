import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';

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
    <div>
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
      <div>
      <div>
      <Card
      color="light"
      >
      <CardBody>
        <CardTitle tag="h5">
          Select a Payment Method
        </CardTitle>
        <CardText>
          {
            user.paymentMethods?.map((pm, i) => (
              <FormGroup check
              key={i}>
              <Input
                id="checkbox1"
                type="checkbox"
              />
              <Label check>
              {pm.cardNumber}
              </Label>
            </FormGroup>
            ))
          }
        </CardText>
        <CardText>
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
        </CardText>
      </CardBody>
      </Card>
      </div>
        </div>
      </div>
  );
}

Cart.propTypes = {
  user: PropTypes.any
};
export default Cart;
