import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserByFirebaseId } from '../helpers/data/userData';
import { getUnprocessedOrderByUserId } from '../helpers/data/OrderData';
import { getSnacks } from '../helpers/data/SnackData';

export default function App() {
  const [user, setUser] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);
  const [paymentMethodsArray, setPaymentMethodsArray] = useState([]);
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
        // when still logged in but refresh page, user remains empty instead of changing state.
        // eslint-disable-next-line no-undef
        userInfo.getIdToken().then((token) => sessionStorage.setItem('token', token))
          .then(
            getUserByFirebaseId(userInfo.uid)
              .then((resp) => {
                setUser(resp);
                setUserAddresses(resp.addresses);
                setPaymentMethodsArray(resp.paymentMethods);
                getUnprocessedOrderByUserId(resp.id)
                  .then((res) => {
                    setOrder(res);
                    setOrderItems(res.orderItems);
                  });
              })
          );
      } else {
        setUser(false);
      }
    });
  }, []);

  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    getSnacks().then(setSnacks);
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavbarSweetTooth user={user} />
        <Routes
          user={user}
          order={order}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
<<<<<<< HEAD
          setOrder={setOrder}
=======
          snacks={snacks}
          setSnacks={setSnacks}
          paymentMethodsArray={paymentMethodsArray}
          setPaymentMethodsArray={setPaymentMethodsArray}
>>>>>>> development
        />
      </Router>
    </div>
  );
}
