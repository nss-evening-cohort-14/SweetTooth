import React, { useState } from 'react';
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
  id, name, category, price, description, image, orderItems, setOrderItems, orderId
}) {
  // orderItem Model:
  //   id: '',
  //   orderId: '',
  //   snackId: '',
  //   quantity: 0,
  //   itemSnack: {
  //     id: '',
  //     name: '',
  //     category: '',
  //     price: 0,
  //     description: '',
  //     image: '',
  //     softDelete: false
  //   }

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
      const orderItem = orderItemsArray.find((item) => (item.snackId).includes(snackId));
      const updatedOrder = buildOrderItem(orderItem, newQuantity);
      console.warn('updatedorder', updatedOrder);
      updateOrderItem(updatedOrder.id, updatedOrder).then(setOrderItems);
      console.warn('snackId', snackId, true);
    } else {
      const newOrder = newOrderItem(newQuantity);
      console.warn('neworder', newOrder);
      addOrderItem(newOrder).then(setOrderItems);
      console.warn('snackId', snackId, false);
    }
  };

  const [counter, setCounter] = useState('0');
  const plusOne = () => {
    // e.preventDefault();
    let increase = Number(counter);
    increase += 1;
    setCounter(increase.toString());
    snackExistsInOrderItems(orderItems, id, increase);
  };
  const minusOne = () => {
    // e.preventDefault();
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
