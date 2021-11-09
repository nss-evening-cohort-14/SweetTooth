import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserByFirebaseId } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState({});
  const [userPaymentMethod, setUserPaymentMethod] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        // eslint-disable-next-line no-undef
        userInfo.getIdToken().then((token) => sessionStorage.setItem('token', token));
        getUserByFirebaseId(userInfo.uid).then((resp) => setUser(resp));
        console.warn(userInfo.uid);
      } else {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    getPaymentMethodByUserId()
  }, [])

  return (
    <div className='App'>
      <Router>
          <NavbarSweetTooth user={user}/>
          <Routes user={user}/>
      </Router>
    </div>
  );
}

export default App;
