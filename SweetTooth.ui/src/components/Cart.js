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
import { getOrderByUserId } from '../helpers/data/OrderData';
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

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderByUserId(user.id).then((res) => {
      setOrder(res);
      setOrderItems(res.orderItems);
    });
  }, []);

  console.warn(order);
  console.warn(user.paymentMethods);

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
          Select an shipping address
        </CardTitle>
        <CardText>
          {
            user.paymentMethods.map((pm, i) => (
              <FormGroup check
              key={i}>
              <Input
                id="checkbox1"
                type="checkbox"
              />
              {' '}
              <Label check>
                {pm}
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
