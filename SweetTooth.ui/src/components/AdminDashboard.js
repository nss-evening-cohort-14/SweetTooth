import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminDashContainer, AdminDashButton } from '../styles/AdminDashboardStyled';
import { CartHeader } from '../styles/OrderStyled';

function AdminDashboard() {
  const history = useHistory();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

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
    <>
    <CartHeader
    style={{ paddingBottom: '5%' }}
  >
    <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
    {'Admin Dashboard'}
    <i className="fas fa-candy-cane" style={{ margin: '2%', color: '#ffe2d1' }}></i>
  </CartHeader>
    <AdminDashContainer
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
        <AdminDashButton
          color='primary'
          onClick={() => handleClick('orders')}
        >
          {hover ? 'Orders' : <i className="fas fa-chart-line fa-7x"></i>}
        </AdminDashButton>
        <AdminDashButton
          color='info'
          onClick={() => handleClick('moods')}
        >
          {hover ? 'Moods' : <i className="fas fa-grin-beam-sweat fa-7x" ></i>}
        </AdminDashButton>
        <AdminDashButton
          color='success'
          onClick={() => handleClick('snacks')}
        >
          {hover ? 'Snacks' : <i className='fas fa-cookie-bite fa-7x'></i>}
        </AdminDashButton>
        <AdminDashButton
          color='warning'
          onClick={() => handleClick('snackMoods')}
          >
            {hover ? 'Snack Moods' : <i className="fas fa-smile-beam fa-7x"></i>}
        </AdminDashButton>
        <AdminDashButton
          color='danger'
          onClick={() => handleClick('users')}
        >
          {hover ? 'Users' : <i className='fas fa-user fa-7x'></i>}
          </AdminDashButton>
    </AdminDashContainer>
    </>
  );
}

export default AdminDashboard;
