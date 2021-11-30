import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Container } from 'reactstrap';
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
    <Container>
      <Button onClick={returnToDashboard}>Return to Dashboard</Button>
       <h2>Orders</h2>
       <Table hover bordered>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                UserId
              </th>
              <th>
                Order Date
              </th>
              <th>
                Order Number
              </th>
              <th>
                Total
              </th>
              <th>
                Payment Method
              </th>
              <th>
                Processed
              </th>
              <th>
                Shipped
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
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
        </tbody>
      </Table>
    </Container>
  );
}

export default OrdersAdmin;
