import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import getMoods from '../helpers/data/MoodData';
<<<<<<< HEAD
import getOrders from '../helpers/data/OrderData';
import getSnacks from '../helpers/data/SnackData';
=======
import { getOrders } from '../helpers/data/OrderData';
import { getSnacks } from '../helpers/data/SnackData';
>>>>>>> development
import { getUsers } from '../helpers/data/userData';
import MoodCard from './MoodCard';
import OrderCard from './OrderCard';
import SnackCard from './SnackCard';
import UserCard from './UserCard';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [moods, setMoods] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getOrders().then(setOrders);
    getMoods().then(setMoods);
    getSnacks().then(setSnacks);
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
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
      <h2>Moods</h2>
      <Row className='border'>
        <Col>id</Col>
        <Col>name</Col>
      </Row>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            id={mood.id}
            name={mood.name}
          />
        ))}
      <h2>Snacks</h2>
      <Row>
        {snacks.map((snack) => (
          <SnackCard
            key={snack.id}
            name={snack.name}
            category={snack.category}
            price={snack.price}
            description={snack.description}
            image={snack.image}
          />
        ))}
      </Row>
      <h2>Users</h2>
      <Row className='border'>
        <Col>id</Col>
        <Col>firebaseId</Col>
        <Col>admin</Col>
        <Col>firstName</Col>
        <Col>lastName</Col>
        <Col>email</Col>
        <Col>profileUrl</Col>
        <Col>dateCreated</Col>
        <Col>moodId</Col>
        <Col>softDelete</Col>
      </Row>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firebaseId={user.firebaseId}
            admin={user.admin}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            profileUrl={user.profileUrl}
            dateCreated={user.dateCreated}
            moodId={user.moodId}
            softDelete={user.softDelete}
          />
        ))}
    </div>
  );
}
