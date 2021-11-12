import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';
import {
  CartContainer,
  CartHeader,
  InfoContainer,
  ItemsContainer,
  TotalInfoContainer,
  TotalInfoTitle
} from '../styles/OrderStyled';

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

  useEffect(() => {
    getUnprocessedOrderByUserId(user.id).then((res) => {
      setOrder(res);
    });
  }, []);

  const calculate = (number, bool) => {
    // if bool is false, it will calculate the tax and add a zero if necessary
    // if bool is true, it will calculate the total
    let result = '';
    if (bool === false) {
      if ((number * 0.07).toString().split('.')[1].length === 1) {
        result = (number * 0.07).toString() + 0;
      } else {
        result = `${(number * 0.07).toString().split('.')[0]}.${(number * 0.07).toString().split('.')[1].slice(0, 2)}`;
      }
    } else if (bool === true) {
      if ((number * 0.07).toString().split('.').length === 1) {
        result = (number + 10 + (number * 0.07)).toString() + 0;
      } else {
        result = (number + 10 + (number * 0.07)).toString();
      }
    }
    return result;
  };

  return (
    <div>
      <CartHeader>
        {user.firstName}, here&apos;s what&apos;s in your cart
      </CartHeader>
    <CartContainer>
      <ItemsContainer>
      {
          order.orderItems?.map((item, i) => (
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
      <InfoContainer>
          <TotalInfoContainer>
            <TotalInfoTitle>
            Subtotal
            </TotalInfoTitle>
            <div>
              ${order.total}
            </div>
          </TotalInfoContainer>
          <TotalInfoContainer>
            <TotalInfoTitle>
              Sales Tax
            </TotalInfoTitle>
            <div>
              ${order.total !== 0 ? calculate(order.total, false) : ''}
            </div>
          </TotalInfoContainer>
          <TotalInfoContainer>
            <TotalInfoTitle>
              Shipping
            </TotalInfoTitle>
            <div>
            $10
            </div>
          </TotalInfoContainer>
          <TotalInfoContainer>
            <TotalInfoTitle>
            Total
            </TotalInfoTitle>
            <div>
            ${order.total !== 0 ? calculate(order.total, true) : ''}
            </div>
          </TotalInfoContainer>
        </InfoContainer>
        <InfoContainer
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
        </InfoContainer>
        <InfoContainer>
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
        </InfoContainer>
      </div>
    </CartContainer>
    </div>
  );
}

Cart.propTypes = {
  user: PropTypes.any
};
export default Cart;
