import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function AdminDashboard() {
  const history = useHistory();

  const handleClick = (view) => {
    switch (view) {
      case 'orders':
        history.push('/admin-orders');
        break;
      case 'users':
        history.push('/admin-users');
        break;
      case 'moods':
        history.push('/admin-moods');
        break;
      case 'snacks':
        history.push('/admin-snacks');
        break;
      default: console.warn('select a valid option');
    }
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Button onClick={() => handleClick('orders')}>Orders</Button>
      <Button onClick={() => handleClick('moods')}>Moods</Button>
      <Button onClick={() => handleClick('snacks')}>Snacks</Button>
      <Button onClick={() => handleClick('users')}>Users</Button>
    </div>
  );
}

export default AdminDashboard;
