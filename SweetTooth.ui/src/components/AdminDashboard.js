import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminDiv from '../styles/AdminDashboardStyled';

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
      case 'snackMoods':
        history.push('/admin-snack-moods');
        break;
      default: console.warn('select a valid option');
    }
  };
  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <AdminDiv onClick={() => handleClick('orders')}>Orders</AdminDiv>
        <AdminDiv onClick={() => handleClick('moods')}>Moods</AdminDiv>
        <AdminDiv onClick={() => handleClick('snacks')}>Snacks</AdminDiv>
        <AdminDiv onClick={() => handleClick('snackMoods')}>SnackMoods</AdminDiv>
        <AdminDiv onClick={() => handleClick('users')}>Users</AdminDiv>
      </div>
    </Container>
  );
}

export default AdminDashboard;
