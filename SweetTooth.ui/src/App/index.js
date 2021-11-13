import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserByFirebaseId } from '../helpers/data/userData';
import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';

export default function App() {
  const [user, setUser] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);
  const [order, setOrder] = useState(
    {
      id: '',
      orderDate: '',
      orderItems: [],
      orderNumber: 0,
      paymentMethod: null,
      paymentMethodId: '',
      processed: false,
      shipped: false,
      total: 0,
      userId: ''
    }
  );
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        console.warn('userinfo:', userInfo);
        // when still logged in but refresh page, user remains empty instead of changing state.
        // eslint-disable-next-line no-undef
        userInfo.getIdToken().then((token) => sessionStorage.setItem('token', token))
          .then(
            getUserByFirebaseId(userInfo.uid)
              .then((resp) => {
                setUser(resp);
                getUnprocessedOrderByUserId(resp.id)
                  .then((res) => {
                    setOrder(res);
                    setOrderItems(res.orderItems);
                    setUser(resp);
                    setUserAddresses(resp.addresses);
                    console.warn('order', order);
                    console.warn('orderItems', orderItems);
                    console.warn('user', user);
                  });
              })
          );
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavbarSweetTooth user={user} />
        <Routes
          user={user}
          order={order}
          orderItems={orderItems}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
        />
      </Router>
    </div>
  );
}
