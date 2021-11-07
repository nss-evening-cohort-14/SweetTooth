import React from 'react';
import Orders from '../helpers/views/Orders';
import Moods from '../helpers/views/Moods';
import Snacks from '../helpers/views/Snacks';
import Users from '../helpers/views/Users';

// need to pass in user/admin to display greeting

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Orders</h2>
        <Orders/>
      <h2>Moods</h2>
        <Moods/>
      <h2>Snacks</h2>
        <Snacks/>
      <h2>Users</h2>
        <Users/>
    </div>
  );
}
