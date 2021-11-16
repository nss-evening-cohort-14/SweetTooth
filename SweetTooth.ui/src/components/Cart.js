import React from 'react';
import PropTypes from 'prop-types';
import {
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
// import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';
import {
  CartContainer,
  CartHeader,
  InfoContainer,
  ItemsContainer,
  TotalInfoContainer,
  TotalInfoTitle
} from '../styles/OrderStyled';
import { deleteOrder, processOrder } from '../helpers/data/OrderData';

function Cart({
  user,
  order,
  orderItems,
  setOrder
}) {
  console.warn(order);
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

  const handleClick = () => {
    processOrder(order.id).then(setOrder);
  };

  const handleDelete = () => {
    deleteOrder(order.id).then(setOrder({
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
    }));
  };

  return (

    <div>
      {
        order.orderItems
          ? <div>
      {
        order.processed === false
          ? <div>
             <CartHeader>
        <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
        {user.firstName}, here&apos;s what&apos;s in your cart
        <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
      </CartHeader>
      <div>
        <div>Once you process your order, you can&apos;t go back!</div>
        <Button onClick={handleClick}>Process Order</Button>
      </div>
      <div>
        <Button onClick={handleDelete}>Empty Cart</Button>
      </div>
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
          : <div>Order processed</div>
      }
    </div>
          : <div>Your cart is empty</div>
      }
    </div>
  );
}

Cart.propTypes = {
  user: PropTypes.any,
  order: PropTypes.object,
  orderItems: PropTypes.array,
  setOrder: PropTypes.func
};

export default Cart;
