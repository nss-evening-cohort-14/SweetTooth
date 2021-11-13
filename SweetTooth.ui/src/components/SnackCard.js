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

function SnackCard({
  id, name, category, price, description, image, orderItems
}) {
  console.warn(id);
  console.warn(orderItems);
  // const [orderItemsHook, setOrderItemsHook] = useState(orderItems || {});
  // console.warn(orderItemsHook);

  // const [newOrderItem, setNewOrderItem] = useState({
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
  // });

  // const snackExistsInOrderItems = (orderItemsArray, snackId) => ((orderItemsArray.map((orderItemsArray) => (orderItemsArray.snackId)).includes(snackId)));

  const [counter, setCounter] = useState('0');
  const plusOne = () => {
    let increase = Number(counter);
    increase += 1;
    setCounter(increase.toString());
    // snackExistsInOrderItems(orderItems, id);
  };
  const minusOne = () => {
    let decrease = Number(counter);
    if (decrease > 0) {
      decrease -= 1;
    }
    setCounter(decrease.toString());
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
  orderItems: PropTypes.array
};
export default SnackCard;
