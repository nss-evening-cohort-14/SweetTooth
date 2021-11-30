import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { getOrders } from '../helpers/data/OrderData';
import OrderCard from './OrderCard';

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  const history = useHistory();
  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  return (
    <div>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
       <h2>Orders</h2>
      <Row className='border'>
        <Col>id</Col>
        <Col>userId</Col>
        <Col>orderDate</Col>
        <Col>orderNumber</Col>
        <Col>total</Col>
        <Col>paymentMethodId</Col>
        <Col>processed</Col>
        <Col>shipped</Col>
      </Row>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            userId={order.userId}
            orderDate={order.orderDate}
            orderNumber={order.orderNumber}
            total={order.total}
            paymentMethodId={order.paymentMethodId}
            processed={order.processed}
            shipped={order.shipped}
          />
        ))}
    </div>
  );
}

export default OrdersAdmin;
