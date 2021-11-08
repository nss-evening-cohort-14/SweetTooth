import React, { useState, useEffect } from 'react';
import getMoods from '../helpers/data/MoodData';
import getOrders from '../helpers/data/OrderData';
import getSnacks from '../helpers/data/SnackData';
import { getUsers } from '../helpers/data/UserData';
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
        {orders.map((order) => (
          <OrderCard
            key={order.key}
            id={order.id}
            admin={order.admin}
            firstName={order.firstName}
            lastName={order.lastName}
            dateCreated={order.dateCreated}
            moodId={order.moodId}
          />
        ))}
      <h2>Moods</h2>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            id={mood.id}
            name={mood.name}
          />
        ))}
      <h2>Snacks</h2>
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
      <h2>Users</h2>
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
