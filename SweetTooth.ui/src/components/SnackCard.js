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
import { addOrderItem, updateOrderItem, updateTotal } from '../helpers/data/OrderData';

function SnackCard({
  id,
  name,
  category,
  price,
  description,
  image,
  orderId,
  orderItems,
  setOrderItems,
  setOrder
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const item = orderItems?.find((orderItem) => orderItem.snackId === id);
    if (item) {
      setCounter(item.quantity);
    }
  }, []);

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
      const updatedOrderItem = buildOrderItem(orderItem, newQuantity);
      updateOrderItem(updatedOrderItem.id, updatedOrderItem).then((resp) => {
        setOrderItems(resp);
        updateTotal(updatedOrderItem.orderId).then((orderResp) => setOrder(orderResp));
      });
    } else {
      const newOrder = newOrderItem(newQuantity);
      addOrderItem(newOrder).then((resp) => {
        setOrderItems(resp);
        updateTotal(newOrder.id).then((orderResp) => setOrder(orderResp));
      });
    }
  };

  const plusOne = () => {
    let increase = Number(counter);
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
  orderId: PropTypes.string,
  setOrder: PropTypes.func
};
export default SnackCard;
