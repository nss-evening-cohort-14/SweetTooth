import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import { SnackImage } from '../styles/ShoppingPageStyled';
import { addOrderItem, updateOrderItem } from '../helpers/data/OrderData';

function SnackCard({
  id, name, category, price, description, image, orderId, orderItems, setOrderItems
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.warn('orderItems snackCard', orderItems);
    const item = orderItems?.find((orderItem) => orderItem.snackId === id);
    if (item) {
      setCounter(item.quantity);
    }
  }, []);

  console.warn('counter', counter);

  const newOrderItem = (quantity) => {
    const order = {
      orderId,
      snackId: id,
      quantity
    };
    return order;
  };

  const buildOrderItem = (orderItem, newQuantity) => {
    const order = {
      id: orderItem.id || null,
      orderId: orderItem.orderId || orderId,
      snackId: orderItem.snackId || id,
      quantity: newQuantity
    };
    return order;
  };

  const snackExistsInOrderItems = (orderItemsArray, snackId, newQuantity) => {
    if (orderItemsArray.map((orderItem) => (orderItem.snackId)).includes(snackId)) {
      const orderItem = orderItemsArray.find((element) => (element.snackId).includes(snackId));
      const updatedOrder = buildOrderItem(orderItem, newQuantity);
      console.warn('updatedorder', updatedOrder);
      updateOrderItem(updatedOrder.id, updatedOrder).then(setOrderItems);
      console.warn('update', orderItems);
      // console.warn('snackId', snackId, true);
    } else {
      const newOrder = newOrderItem(newQuantity);
      // console.warn('neworder', newOrder);
      addOrderItem(newOrder).then(setOrderItems);
      // console.warn('snackId', snackId, false);
    }
  };

  const plusOne = () => {
    let increase = Number(counter);
    console.warn('increase', increase);
    increase += 1;
    setCounter(increase.toString());
    snackExistsInOrderItems(orderItems, id, increase);
  };
  const minusOne = () => {
    let decrease = Number(counter);
    if (decrease > 0) {
      decrease -= 1;
      setCounter(decrease.toString());
      snackExistsInOrderItems(orderItems, id, decrease);
    }
  };

  return (
    <div className="col-sm-4">
      <Card className='d-flex justify-content-center' body>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardText style={{ minHeight: 70 }}>
          {category}<br />
          {description}<br />
        </CardText>
        ${price}
        <SnackImage className='m-auto img-thumbnail' src={image} alt={name} />
        <Row>
          <Col>
            <Button onClick={minusOne}><i className='fas fa-minus fa-2x'></i></Button>
          </Col>
          <Col className='m-auto'>
            {counter}
          </Col>
          <Col>
            <Button onClick={plusOne}><i className='fas fa-plus fa-2x'></i></Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

SnackCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  orderItems: PropTypes.array,
  setOrderItems: PropTypes.func,
  orderId: PropTypes.string
};
export default SnackCard;
